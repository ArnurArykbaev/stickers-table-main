<template>
    <section class="dragboard">
        <div class="container">
            <div class="dragtable" id="dragtable">
                <template v-for="(dragZone, index) in dragZones" :key="dragZone.id">
                    <div class="drag-zone" @drop="onDrop($event, dragZone.column)" @dragenter.prevent @dragover.prevent>
                        <div @dblclick="editMode = index" class="drag-zone-title">
                            <input v-if="editMode === index" v-model="dragZone.text" class="edit-mode"
                                v-click-outside="onClickOutside" @keydown.esc="onClickOutside" />
                            <p v-else> {{ dragZone.text }}</p>
                        </div>
                        <template v-for="card in getList(dragZone.column)" :key="card.id">
                            <DragCard :card="card" @dragstart="startDrag" />
                        </template>
                        <button @click="addNewCard(dragZone.column)" class="btn-add-card">
                            +
                        </button>
                    </div>
                </template>
                <div class="drag-zone-add">
                    <button @click="addDragZone" class="btn-add-zone">
                        +
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import DragCard from './DragCard.vue';

import { useCardsStore } from '@/store/cards';
import { useDragZonesStore } from '@/store/dragZones';
import { Card } from '@/models/card';
import { dragZoneTitle } from '@/models/dragZone';
import { addNewCard } from '@/helpers/card';

const dragZonesStore = useDragZonesStore()
const dragZones = computed(() => dragZonesStore.getDragZones())

const cardsStore = useCardsStore()
const cardsList = computed(() => cardsStore.getCardList())

const editMode = ref(-1)


const getList = (columnNumber: number) => {
    return cardsList.value.filter((item: Card) => item.column === columnNumber)
}

const startDrag = (event, item) => {
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('itemID', item.id)
}

const onDrop = (event, columnNumber) => {
    const itemID = event.dataTransfer.getData('itemID ')
    let item = cardsList.value.find((card) => card.id === +itemID)
    item.column = columnNumber
    cardsStore.updateCard(item)
}

const addDragZone = () => {
    const newDragZone: dragZoneTitle = {
        id: Math.floor(Math.random() * 100000),
        text: 'new drag zone',
        column: dragZones.value.length + 1
    };

    dragZonesStore.addDragZoneTitle(newDragZone)
}

const onClickOutside = () => {
    editMode.value = -1
}
</script>

<style lang="scss">
@import "@/styles/helpers/_variables.scss";

.dragtable {
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    border: none;
    border-radius: 10px;
    background-color: $bg-color;
    width: 100%;
    padding: 10px;
    min-height: 760px;
    overflow: auto;

    .drag-zone {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        min-width: 200px;

        button.btn-add-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            border: none;
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 0.5s ease, transform 0.5s ease;

            &:hover {
                background-color: $black;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }

            &:active {
                background-color: $black;
                transform: scale(0.95);
            }

            &:focus {
                border: none;
                outline: none;
            }

            &:focus-visible {
                outline: none;
            }
        }

        &-title {
            display: flex;
            min-width: 200px;
            min-height: 50px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 10px;
            background-color: $dark;
            font-size: $fz-lg;

            input {
                padding: 5px;
                border: 1px solid $white;
                border: none;
                border-radius: 10px;
                color: $dark;
                background-color: $light;
                font-size: $fz-xs;
            }
        }

        &-add {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
            width: 50px;

            button.btn-add-zone {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                width: 50px;
                aspect-ratio: 1;
                border: none;
                border-radius: 50%;
                transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;

                &:hover {
                    background-color: $black;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }

                &:active {
                    background-color: $black;
                    transform: scale(0.95);
                }

                &:focus {
                    border: none;
                    outline: none;
                }

                &:focus-visible {
                    outline: none;
                }
            }
        }

        &:hover {
            button.btn-add-card {
                opacity: 1;
                transform: translateY(0);
                transition-delay: 0.2s;
            }
        }
    }
}
</style>
