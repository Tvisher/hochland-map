<template>
  <router-view v-slot="{ Component }" v-if="isAuth">
    <transition mode="out-in" name="fade">
      <component :is="Component" />
    </transition>
  </router-view>

  <div v-else>Пользователь не авторизирован</div>
</template>

<script setup>
import { useGameStore } from "@/stores/GameStore.js";
const store = useGameStore();
const isAuth = store.isAuth;

console.log(isAuth);
</script>
