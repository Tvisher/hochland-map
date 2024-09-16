<template>
  <div v-if="stepIsOpen">
    <component :is="currentStep"></component>
  </div>
  <div v-else>модуль закрыт</div>
</template>

<script setup>
import FirstStep from "@/components/FirstStep.vue";
import SecondStep from "@/components/SecondStep.vue";
import ThirdStep from "@/components/ThirdStep.vue";
import FourthStep from "@/components/FourthStep.vue";
import FiveStep from "@/components/FiveStep.vue";
import SixStep from "@/components/SixStep.vue";

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

    default:
      break;
  }
});
const stepIsOpen = store.gameData.openSteps.includes(step.value);
</script>

<style scoped></style>
