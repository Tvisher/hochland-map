<template>
  <div v-if="stepIsOpen">
    <component :is="currentStep"></component>
  </div>
  <div v-else>модуль закрыт</div>
</template>

<script setup>
import FirstStep from "@/components/steps/FirstStep.vue";
import SecondStep from "@/components/steps/SecondStep.vue";
import ThirdStep from "@/components/steps/ThirdStep.vue";
import FourthStep from "@/components/steps/FourthStep.vue";
import FiveStep from "@/components/steps/FiveStep.vue";
import SixStep from "@/components/steps/SixStep.vue";
import SevenStep from "@/components/steps/SevenStep.vue";

import { ref, computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

import { useGameStore } from "@/stores/GameStore.js";
const store = useGameStore();

const step = ref(+route.params.id);

const currentStep = computed(() => {
  switch (step.value) {
    case 1:
      return FirstStep;
      break;

    case 2:
      return SecondStep;
      break;

    case 3:
      return ThirdStep;
      break;

    case 4:
      return FourthStep;
      break;

    case 5:
      return FiveStep;
      break;

    case 6:
      return SixStep;
      break;

    case 7:
      return SevenStep;
      break;

    default:
      break;
  }
});
const stepIsOpen = store.gameData.openSteps.includes(step.value);
</script>

<style scoped></style>
