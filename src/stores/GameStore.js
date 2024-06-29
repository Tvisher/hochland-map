import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useGameStore = defineStore("GameStore", () => {
    // state refs
    const gameData = ref({
        openSteps: [1]
    })



    return {
        gameData
    }
})




