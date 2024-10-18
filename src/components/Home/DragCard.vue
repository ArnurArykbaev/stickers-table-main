<template>
    <div class="drag-card" draggable="true" @dragstart="startDrag($event, card)" @dblclick="onEditCard"
        v-click-outside="onClickOutside">
        <div v-if="editMode" class="edit-mode">
            <input v-model="editCard.title" @keypress.enter="saveEdit" class="title" type="text" />
            <textarea v-model="editCard.text" @keypress.enter="saveEdit" class="text"></textarea>
            <button @click="saveEdit" class="btn-save">save</button>
        </div>
        <div class="show-mode" v-else>
            <div class="title">{{ card.title }}</div>
            <div class="text">{{ card.text }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Ref, computed, ref } from 'vue'
import { useCardsStore } from '@/store/cards';
import { useDragZonesStore } from '@/store/dragZones';
import { Card } from '@/models/card';

const dragZonesStore = useDragZonesStore()
const dragZones = computed(() => dragZonesStore.getDragZones())


interface Props {
    card: Card;
}

const props = defineProps<Props>();
const emit = defineEmits(['dragstart'])

const cardStore = useCardsStore()

const editCard: Ref<Card> = ref({ id: null, title: '', text: '', column: null })
const editMode = ref(false)

const startDrag = (event, item) => {
    emit('dragstart', event, item)
}
const onEditCard = () => {
    editMode.value = true
    editCard.value = JSON.parse(JSON.stringify(props.card))
};

const saveEdit = () => {
    editMode.value = false

    cardStore.updateCard(editCard.value)
    editCard.value = { id: null, title: '', text: '', column: null }
};

const onClickOutside = () => {
    editMode.value = false

}
</script>

<style lang="scss" scoped>
@import "@/styles/helpers/_variables.scss";

.drag-card {
    display: flex;
    max-width: 200px;
    width: 100%;
    min-height: 200px;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border: none;
    text-align: left;
    border-radius: 20px;
    background-color: $dark;

    .show-mode {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .title {
            word-wrap: break-word;
            font-size: $fz-lg;
        }

        .text {
            word-wrap: break-word;
            font-size: $fz-xs;
        }
    }

    .edit-mode {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .title,
        .text {
            padding: 5px;
            border: 1px solid $white;
            border: none;
            border-radius: 10px;
            color: $dark;
            background-color: $light;
            font-size: $fz-xs;
        }

        .text {
            height: 80px;
        }

        button.btn-save {
            margin-top: auto;
            padding: 5px;
            border: 1px solid $white;
            border-radius: 10px;
            color: $white;
            background-color: $dark;
            font-size: $fz-xs;
        }
    }
}
</style>