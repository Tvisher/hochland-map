<template>
  <div>
    <FirstStep v-if="step == 1" />
    <SecondStep v-if="step == 2" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import FirstStep from "@/components/FirstStep.vue";
import SecondStep from "@/components/SecondStep.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const step = ref(route.params.id);
</script>

<style scoped></style>
