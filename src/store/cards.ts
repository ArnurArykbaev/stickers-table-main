import { vue } from '@vitejs/plugin-vue';
import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import { Card } from "@/models/card.ts"

export const useCardsStore = defineStore("cardsStore", () => {
    /* state */
    const card: Ref<Card> = ref({ id: null, text: '', column: 1 })
    const cardList: Ref<Card[]> = ref([
        { id: 1, text: 'Card example', column: 1 },
        { id: 2, text: 'Card example 2', column: 1 },
        { id: 3, text: 'Card example 3', column: 2 },
    ])

    /* getters */
    const getCardList = () => cardList.value as Card[];
    const setCardList = (newCardList: Card[]) => {
        cardList.value = newCardList
    }

    const addCard = (newCard: Card) => {
        cardList.value.push(newCard)
    }
    const updateCard = (updatedCard: Card) => {
        cardList.value = cardList.value.map(card => 
            card.id === updatedCard.id ? updatedCard : card
        );
    };
    const removeCard = (cardId: number) => {
        cardList.value = cardList.value.filter(card => card.id !== cardId);
    };
    return {
        getCardList,
        setCardList,

        addCard,
        updateCard,
        removeCard
    }
})
