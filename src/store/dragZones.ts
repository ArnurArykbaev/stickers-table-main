import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import { dragZoneTitle } from '@/models/dragZone';

export const useDragZonesStore = defineStore("dragZonesStore", () => {
    /* state */
    const dragZone: Ref<dragZoneTitle> = ref({id: 1, text: 'new drag zone', column: 1});
    const dragZones: Ref<dragZoneTitle[]> = ref([{ id: 1, text: 'drag zone 1', column: 1 }, { id: 2, text: 'drag zone 2', column: 2 }])
    /* getters */
    const getDragZones = () => dragZones.value as dragZoneTitle[];
    const setDragZones = (newDragZones: dragZoneTitle[]) => {
        dragZones.value = newDragZones
    }

    const addDragZoneTitle = (newDragZone: dragZoneTitle) => {
        dragZones.value.push(newDragZone)
    }
    const updateDragZoneTitle = (updateDragZoneTitle: dragZoneTitle) => {
        dragZones.value = dragZones.value.map(dragItem => 
            dragItem.id === updateDragZoneTitle.id ? updateDragZoneTitle : dragItem
        );
    };
    const removeDragZoneTitle = (dragZoneId: number) => {
        dragZones.value = dragZones.value.filter(dragItem => dragItem.id !== dragZoneId);
    };
    return {
        getDragZones,
        setDragZones,

        addDragZoneTitle,
        updateDragZoneTitle,
        removeDragZoneTitle
    }
})
