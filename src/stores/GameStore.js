import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useGameStore = defineStore("GameStore", () => {
    // state refs
    const gameData = ref({
        openSteps: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    })


    const openNewStep = (step) => {
        gameData.value.openSteps.push(step);
    }
    return {
        gameData,
        openNewStep
    }
})








