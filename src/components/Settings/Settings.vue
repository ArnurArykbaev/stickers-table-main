<template>
    <section class="settings">
        <div class="settings-container container">
            <div class="settings-header">
                <div class="number">
                    №
                </div>
                <div class="card-name">
                    Card
                </div>
                <div class="column">Column</div>
                <div class="edit"></div>
                <div class="delete"></div>
            </div>
            <div class="settings-body">
                <div class="card" v-for="(card, index) in cardsList" :key="card.id">
                    <div class="number">
                        {{ index + 1 }}
                    </div>
                    <div class="card-name">
                        {{ card.text }}
                    </div>
                    <div class="column">{{ card.column }}</div>
                    <button @click="onEditCard(card)" class="edit">Edit</button>
                    <button @click="onDeleteCard(card.id)" class="delete">Delete</button>
                </div>
                <button @click="addNewCard(1)" class="btn-add-card">
                    Add new card
                </button>
            </div>
        </div>
        <EditCardModal v-model="modal" :card="editCard" />
    </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCardsStore } from '@/store/cards';
import { addNewCard } from '@/helpers/card';
import { Card } from '@/models/card';
import EditCardModal from './EditCard.vue';

const cardsStore = useCardsStore()
const cardsList = computed(() => cardsStore.getCardList())
const editCard = ref({id: null, title: '', text: '', column: null})


const modal = ref(false);
const closeModal = () => {
    editCard.value = null
    modal.value = false
}
const openModal = () => {
    modal.value = true
}

const onEditCard = (card: Card) => {
    editCard.value = JSON.parse(JSON.stringify(card))
    openModal()
}
const onDeleteCard = (id) => {
    cardsStore.removeCard(id)
}
</script>

<style lang="scss">
@import "@/styles/helpers/_variables.scss";

.settings {
    display: flex;
    flex-direction: column;

    &-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &-header,
    .card {
        display: grid;
        grid-template-columns: 60px auto 100px 80px 80px;
        min-height: 50px;
        gap: 20px;

        .number,
        .card-name,
        .column,
        .edit,
        .delete {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            padding: 20px;
            border: none;
            border-radius: 10px;
            height: 100%;
            background-color: $bg-color;
        }
    }

    &-header {

        .number,
        .card-name,
        .column,
        .edit,
        .delete {
            background-color: $light;
            color: $black;
        }
    }

    &-body {
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: $fz-md;

        button.btn-add-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            border: none;
            opacity: 0.2;
            transform: translateY(10px);
            transition: opacity 0.5s ease, transform 0.5s ease;

            &:hover {
                background-color: $dark;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }

            &:active {
                background-color: $dark;
                transform: scale(0.95);
            }

            &:focus {
                border: none;
                outline: none;
            }

            &:focus-visible {
                outline: none;
            }


            &:hover {
                opacity: 1;
                transform: translateY(0);
                transition-delay: 0.2s;
            }
        }
    }
}
</style>