import { defineStore } from 'pinia';
import { ref } from 'vue';
import { dragZoneTitle } from '@/models/dragZone';

export const useDragZonesStore = defineStore('dragZonesStore', {
    state: () => ({
        dragZone: { id: 1, text: 'new drag zone', column: 1 } as dragZoneTitle,
        dragZones: [
            { id: 1, text: 'drag zone 1', column: 1 },
            { id: 2, text: 'drag zone 2', column: 2 },
        ] as dragZoneTitle[],
    }),
    persist: true,
    actions: {
        getDragZones() {
            return this.dragZones;
        },
        setDragZones(newDragZones: dragZoneTitle[]) {
            this.dragZones = newDragZones;
        },
        addDragZoneTitle(newDragZone: dragZoneTitle) {
            this.dragZones.push(newDragZone);
        },
        updateDragZoneTitle(updatedDragZone: dragZoneTitle) {
            this.dragZones = this.dragZones.map(dragItem =>
                dragItem.id === updatedDragZone.id ? updatedDragZone : dragItem
            );
        },
        removeDragZoneTitle(dragZoneId: number) {
            this.dragZones = this.dragZones.filter(dragItem => dragItem.id !== dragZoneId);
        },
    },
});
