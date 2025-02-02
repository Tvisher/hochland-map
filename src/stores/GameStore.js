import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';


const appElement = document.querySelector('#app');
const stage = appElement.getAttribute('data-stage');
const userId = appElement.getAttribute('data-user-id');
const openSteps = [];
for (let index = 0; index <= stage; index++) {
    if (index == 10) break;
    openSteps.push(index + 1);
}
const isFirstVisit = stage == 0;

export const useGameStore = defineStore("GameStore", () => {
    // state refs
    const isAuth = ref(userId);
    const gameData = ref({
        openSteps,
    });
    const userIsFirstVisit = ref(isFirstVisit);
    const userCompliteGame = ref(false);

    const openNewStep = (step) => {
        if (gameData.value.openSteps.includes(step)) return;

        gameData.value.openSteps.push(step);
        axios.post('/wp-content/themes/sp-theme-master/ajax/utap.php', {
            user: userId,
            stage: step - 1
        },)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log("Ошибка!!!", error);
            });
    }


    return {
        isAuth,
        userCompliteGame,
        userIsFirstVisit,
        gameData,
        openNewStep
    }
})








