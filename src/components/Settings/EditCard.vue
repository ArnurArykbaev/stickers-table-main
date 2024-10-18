<template>
    <div>
        <Modal :modelValue="modelValue" @update:modelValue="updateValue" :max="660">
            <template v-slot:content>
                <div class="edit-card">
                    <h3 class="edit-card__title">Редактирование карты</h3>
                    <form @submit.prevent="updateCard">
                        <div class="edit-card__field">
                            <label for="title">Название:</label>
                            <input type="text" id="title" v-model="card.title" class="title-edit">
                        </div>

                        <div class="edit-card__field">
                            <label for="text">Описание:</label>
                            <textarea id="text" v-model="card.text" class="text-edit"></textarea>
                        </div>

                        <button type="submit" class="submit-button">Сохранить</button>
                    </form>
                </div>
            </template>
        </Modal>
    </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import { Card } from '@/models/card';
import { useCardsStore } from '@/store/cards'
import Modal from '@/components/ui/Modal.vue';

interface Props {
    modelValue: Boolean;
    card: Card;
}

const props = defineProps<Props>();
const emit = defineEmits(['close']);

const cardStore = useCardsStore()
const editedCard: Ref<Card> = ref({ id: null, title: '', text: '', column: 1 })

const updateValue = (value) => {
    emit('update:modelValue', value);
    if (!value) {
        emit('close');
    }
};

const updateCard = () => {
    cardStore.updateCard(props.card)

    emit('update:modelValue', false);
    emit('close')
}

</script>

<style lang="scss">
@import "@/styles/helpers/_variables.scss";

.card-modal {
    max-width: 600px;
}

.edit-card {
    display: flex;
    flex-direction: column;

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
    }

    &__field {
        display: flex;
        flex-direction: column;
        gap: 10px;

        label {
            text-align: left;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .title-edit {
            padding: 10px;
            border: none;
            border-radius: 10px;
            background-color: $dark;
        }

        .text-edit {
            padding: 10px;
            border: none;
            border-radius: 10px;
            resize: none;
            min-height: 100px;
            background-color: $dark;
        }

        .submit-button {
            margin-top: 20px;
            background-color: $dark;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            border-radius: 5px;

            &:hover {
                background-color: darken($dark, 10%);
            }
        }
    }
}
</style>
