<template>
    <div class="dragtable" id="dragtable">
        <template v-for="dragZone in dragZones" :key="dragZone.id">
            <div class="drag-zone" @drop="onDrop($event, dragZone.column)" @dragenter.prevent @dragover.prevent>
                <div class="drag-zone-title">
                    {{ dragZone.text }}
                </div>
                <div v-for="card in getList(dragZone.column)" :key="card.id" class="drag-card" draggable="true"
                    @dragstart="startDrag($event, card)">
                    {{ card.text }}
                </div>
            </div>
        </template>
        <div class="drag-zone-add">
            <button @click="addDragZone">
                +
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCardsStore } from '@/store/cards';
import { useDragZonesStore } from '@/store/dragZones';
import { Card } from '@/models/card';
import { dragZoneTitle } from '@/models/dragZone'

const dragZonesStore = useDragZonesStore()
const dragZones = computed(() => dragZonesStore.getDragZones())

const cardsStore = useCardsStore()
const cardsList = computed(() => cardsStore.getCardList())


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
    max-width: 1200px;
    min-height: 700px;
    overflow: auto;

    .drag-zone {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        min-width: 200px;
    }

    .drag-zone-title {
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
    }

    .drag-zone-add {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        width: 50px;

        button {
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

    .drag-card {
        display: flex;
        min-width: 200px;
        min-height: 200px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 10px;
        background-color: $dark;
        font-size: $fz-md;
    }
}
</style>