import { defineStore } from "pinia";

export const testStore = defineStore('testStore', {
    state: () => ({
        testData: 'Hello, world!',
    }),
    persist: true,
});
