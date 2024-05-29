<template>
  <div class="interactive-map">
    <div
      class="interactive-step"
      v-for="(image, index) in images"
      :key="index"
      :class="[
        openSteps.includes(index + 1) ? 'open' : '',
        `step-${index + 1}`,
      ]"
    >
      <img
        :src="openSteps.includes(index + 1) ? image.base : image.close"
        class="base-image"
        alt=""
      />
      <img :src="image.replace" class="replace-image" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const images = ref([]);
const openSteps = ref([]);

const loadImages = () => {
  const imageCount = 10;
  for (let i = 1; i <= imageCount; i++) {
    images.value.push({
      base: new URL(`../assets/img/steps/${i}.svg`, import.meta.url).href,
      replace: new URL(`../assets/img/steps-hover/${i}.svg`, import.meta.url)
        .href,
      close: new URL(`../assets/img/steps-close/${i}.svg`, import.meta.url)
        .href,
    });
  }
};

onMounted(() => {
  loadImages();
  for (let index = 1; index < 11; index++) {
    setTimeout(() => {
      openSteps.value.push(index);
    }, 1500 * index);
  }
});
</script>

<style lang="scss">
.interactive-map {
  background-image: url("@/assets/img/map-bg.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  width: 100%;
  height: 52vw;
  position: relative;
}

.interactive-step {
  will-change: transform;
  cursor: pointer;
  position: absolute;
  display: none;
  width: 200px;
  height: 200px;

  img {
    will-change: transform;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    filter: grayscale(100);
  }

  &.open {
    img {
      filter: grayscale(0);
    }

    animation: bounce 1.6s ease forwards;
  }

  .base-image,
  .replace-image {
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out,
      filter 1s ease-in-out;
  }

  .replace-image {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }

  &.open:hover {
    .base-image {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
    }

    .replace-image {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  &.step-1 {
    display: block;
    left: 11.2vw;
    top: 10.3vw;
    width: 9vw;
    height: 9vw;

    .replace-image {
      width: 110%;
      height: 110%;
    }
  }

  &.step-2 {
    display: block;
    left: 3.2vw;
    top: 20.8vw;
    width: 12.3vw;
    height: 8vw;

    .replace-image {
      width: 110%;
      height: 110%;
    }
  }

  &.step-3 {
    display: block;
    left: 5vw;
    top: 34vw;
    width: 10vw;
    height: 11vw;
  }

  &.step-4 {
    display: block;
    left: 30.5vw;
    top: 32.6vw;
    width: 8vw;
    height: 13vw;

    .replace-image {
      width: 130%;
      height: 130%;
    }
  }

  &.step-5 {
    display: block;
    left: 23.5vw;
    top: 16.3vw;
    width: 9vw;
    height: 10vw;
  }

  &.step-6 {
    display: block;
    left: 37.6vw;
    top: 6.3vw;
    width: 9.5vw;
    height: 10.5vw;
  }

  &.step-7 {
    display: block;
    left: 47vw;
    top: 18.3vw;
    width: 10.5vw;
    height: 8vw;

    .replace-image {
      width: 120%;
      height: 120%;
    }
  }

  &.step-8 {
    display: block;
    left: 62.1vw;
    top: 6.5vw;
    width: 10vw;
    height: 9.4vw;
  }

  &.step-9 {
    display: block;
    left: 62.4vw;
    top: 20.5vw;
    width: 15vw;
    height: 9.4vw;
  }

  &.step-10 {
    display: block;
    left: 56vw;
    top: 33.5vw;
    width: 11vw;
    height: 12vw;
  }
}
</style>
