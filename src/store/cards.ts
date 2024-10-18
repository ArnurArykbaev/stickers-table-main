import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Card } from '@/models/card.ts';

export const useCardsStore = defineStore('cardsStore', {
    state: () => ({
        card: { id: null, title: '', text: '', column: 1 } as Card,
        cardList: [
            { id: 1, title: 'Title', text: 'Card example', column: 1 },
            { id: 2, title: 'Title', text: 'Card example 2', column: 1 },
            { id: 3, title: 'Title', text: 'Card example 3', column: 2 },
        ] as Card[],
    }),
    persist: true,
    actions: {
        getCardList() {
            return this.cardList;
        },
        setCardList(newCardList: Card[]) {
            this.cardList = newCardList;
        },
        addCard(newCard: Card) {
            console.log('Добавляем карточку:', newCard);
            this.cardList.push(newCard);
        },
        updateCard(updatedCard: Card) {
            this.cardList = this.cardList.map(card =>
                card.id === updatedCard.id ? updatedCard : card
            );
        },
        removeCard(cardId: number) {
            this.cardList = this.cardList.filter(card => card.id !== cardId);
        },
    },
});
