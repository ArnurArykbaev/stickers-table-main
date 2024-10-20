<template>
    <div>
        <Modal :modelValue="modelValue" @update:modelValue="updateValue" :max="660">
            <template v-slot:content>
                <div class="delete-card">
                    <h3 class="delete-card__title">Удаление карты</h3>
                    <form @submit.prevent="removeCard">
                        <div class="delete-card__field">
                            Вы действительно хотите удалить карту "{{ card.title }}"?
                        </div>

                        <div class="bottom-block">
                            <div class="bottom-block__buttons">
                                <button @click="closeModal" class="cancel-button">Отмена</button>
                                <button type="submit" class="submit-button">Ок</button>
                            </div>
                        </div>
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

const updateValue = (value) => {
    emit('update:modelValue', value);
    if (!value) {
        emit('close');
    }
};

const removeCard = () => {
    cardStore.removeCard(props.card.id)

    emit('update:modelValue', false);
    emit('close')
}
const closeModal = () => {
    emit('close')
}

</script>

<style lang="scss">
@import "@/styles/helpers/_variables.scss";

.delete-card {
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
    }

    .bottom-block {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        &__buttons {
            display: flex;
            flex-direction: row;
            gap: 10px;

            .cancel-button {
                margin-top: 20px;
                background-color: $light;
                color: $dark;
                border: none;
                padding: 10px;
                cursor: pointer;
                border-radius: 5px;

                &:hover {
                    background-color: darken($dark, 10%);
                    color: $white;
                }
            }

            .submit-button {
                min-width: 60px;
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
}
</style>
