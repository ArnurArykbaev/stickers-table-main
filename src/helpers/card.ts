import { Card } from '@/models/card';
import { useCardsStore } from '@/store/cards';

export const addNewCard = (column) => {
    const newCard: Card = {
        id: Math.floor(Math.random() * 100000),
        title: 'title',
        text: 'new card',
        column: column
    }

    useCardsStore().addCard(newCard)
}