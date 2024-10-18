<template>
    <transition name="fade" mode="out-in">
        <div v-if="modelValue" class="modal" @click="onCloseModal">
            <div class="modal-wrapper" :style="{ maxWidth: max + 'px' }" @click.stop>
                <button @click="onCloseModal" type="button" class="close-button">
                    X
                </button>
                <div class="modal-body">
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">

interface Props {
    modelValue: boolean;
    max?: number;
}

const props = withDefaults(defineProps<Props>(), {
    max: 800,
});
const emit = defineEmits(['closeModal', 'openModal', 'update:modelValue']);


const onCloseModal = () => {
    emit('update:modelValue', false);
    emit('closeModal');
};
</script>

<style lang="scss">
@import "@/styles/helpers/_variables.scss";

.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #00000050;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;


    .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 16px;
    }

    &-wrapper {
        background: $bg-color;
        border-radius: 10px;
        min-width: 600px;
        width: 100%;
        padding: 20px;
        margin: 40px;
        position: relative;
    }

    &-body {
        margin-top: 20px;
    }

}
</style>
