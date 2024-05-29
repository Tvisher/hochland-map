<template>
  <router-view v-slot="{ Component }">
    <transition mode="out-in" name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
console.log("pageLoad");
</script>

<style scoped></style>
