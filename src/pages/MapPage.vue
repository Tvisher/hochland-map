<template>
  <div class="interactive-map">
    <div class="app-logo">
      <img src="@/assets/img/logo.svg" alt="" />
    </div>
    <div class="user-btn">
      <span>Дарья Т.</span>
      <a href="#" class="user-btn__exit"></a>
    </div>
    <div class="menu-btns">
      <a href="javascript:void(0)" class="menu-btn">
        <div class="menu-btn__ball">
          <div class="menu-btn__image">
            <img src="@/assets/img/database.svg" alt="" />
          </div>
        </div>
        <div class="menu-btn__text">База знаний</div>
      </a>

      <a href="javascript:void(0)" class="menu-btn">
        <div class="menu-btn__ball">
          <div class="menu-btn__image">
            <img src="@/assets/img/message.svg" alt="" />
          </div>
        </div>
        <div class="menu-btn__text">Написать письмо</div>
      </a>
    </div>
    <div
      class="interactive-step"
      v-for="(image, index) in images"
      :key="index"
      @click="showGameStepModal(index + 1)"
      :class="[
        gameData.openSteps.includes(index + 1) ? 'open' : '',
        `step-${index + 1}`,
        modalData.selectedStep == index + 1 ? 'modal-open' : '',
        index == gameData.openSteps.length - 1 ? 'last-bounce' : '',
      ]"
    >
      <img
        :src="gameData.openSteps.includes(index + 1) ? image.base : image.close"
        class="base-image"
        alt=""
      />
      <img preload :src="image.replace" class="replace-image" alt="" />
    </div>
    <transition name="fade">
      <div
        class="modal-template"
        v-show="modalData.showModal"
        @click="closeModal"
      >
        <div class="modal-template__content">
          <div class="modal-step">{{ modalData.selectedStep }}</div>
          <div class="modal-img">
            <div class="modal-img__man"></div>
          </div>
          <div class="modal-template__title">Подготовка</div>
          <div class="modal-template__text">
            В 2017 году наша компания отметила Юбилей. И специально для вас мы
            собрали коллекцию важных событий нашей истории.
          </div>
          <router-link
            :to="`/step/${modalData.selectedStep}`"
            class="modal-template__btn"
          >
            <span>Поехали!</span>
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useGameStore } from "@/stores/GameStore.js";
const store = useGameStore();
const { gameData } = storeToRefs(store);

const images = ref([]);
const modalData = ref({
  showModal: false,
  selectedStep: "",
});

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

const showGameStepModal = (ind) => {
  if (!gameData.value.openSteps.includes(ind)) return;
  // console.log(ind);
  modalData.value.showModal = true;
  modalData.value.selectedStep = ind;
};

const closeModal = (e) => {
  const target = e.target;
  if (
    target.closest(".modal-template") &&
    !target.closest(".modal-template__content")
  ) {
    modalData.value.showModal = false;
    setTimeout(() => {
      modalData.value.selectedStep = "";
    }, 600);
  }
};

onMounted(() => {
  loadImages();
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
    transition: filter 0.3s ease-in-out;
  }

  &.open {
    img {
      filter: grayscale(0);
    }
    &.last-bounce {
      animation: bounce 1.6s ease forwards;
    }
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

  &.open:hover,
  &.modal-open {
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
