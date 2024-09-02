<template>
  <div
    class="step-wrapper"
    :class="{ 'no-interactive': !isInteractive, 'step-load': stepLoad }"
  >
    <div class="step-wrapper__block">
      <div class="step-wrapper__content">
        <transition name="fade">
          <div
            class="interactive-item"
            :class="[moduleStep == 1 ? 'pulse' : '']"
            data-item="1"
            @click="showMessage"
            v-if="moduleStep < 2"
          >
            <img src="@/assets/img/modules/module-1/object-6.svg" alt="" />
          </div>
        </transition>

        <div
          class="interactive-item"
          :class="[personVisual.isSelected ? 'reverse' : '']"
          data-item="2"
        >
          <img :src="personVisual.path" alt="" />
        </div>

        <div
          class="interactive-item"
          data-item="3"
          :class="[moduleStep == 5 ? 'pulse' : '']"
          @click="setShowQuiz"
        >
          <img src="@/assets/img/modules/module-1/object-2.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          data-item="4"
          :class="[moduleStep == 2 ? 'pulse' : '']"
          @click="showSecondStepModal"
        >
          <img src="@/assets/img/modules/module-1/object-3.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          data-item="5"
          :class="[moduleStep == 3 ? 'pulse' : '']"
          @click="showVideoModal"
        >
          <img src="@/assets/img/modules/module-1/object-4.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 4 ? 'pulse' : '']"
          data-item="6"
          @click="showWardrobe = moduleStep >= 4 ? true : false"
        >
          <img src="@/assets/img/modules/module-1/object-5.svg" alt="" />
        </div>

        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" v-if="showMessageModal">
            <div class="man-modal__close" @click="closeModalAndNextStep"></div>
            Дорогой друг, я так ждал тебя. Сегодня мы отправляемся в путешествие
            к сыроварне «Хохланда». И я хочу рассказать тебе об этой компании...
            до встречи!
          </div>
        </transition>
        <div
          class="arrow-template"
          v-for="step in 5"
          :class="[moduleStep == step ? 'show' : '']"
          :data-item="step"
        >
          <div class="arrow-template_img"></div>
        </div>

        <transition name="fade" mode="out-in">
          <div class="modal-template tabs-modal" v-if="isShowSecondStepModal">
            <div class="modal-content">
              <!-- <div
                class="man-modal__close"
                @click="isShowSecondStepModal = false"
              ></div> -->
              <div class="tabs-modal__inner">
                <div
                  class="mute-btn"
                  @click="isMute = !isMute"
                  :class="[isMute ? 'mute' : '']"
                >
                  <vue-plyr>
                    <audio :autoplay="!isMute" loop>
                      <source src="@/assets/files/audio.mp3" type="audio/mp3" />
                    </audio>
                  </vue-plyr>
                </div>
                <div class="tabs-head">
                  <div
                    class="tabs-btn"
                    :class="[activeTab == index ? 'current' : '']"
                    v-for="(tabItem, index) in tabsList"
                    @click="showCurrentTab(index)"
                  >
                    {{ tabItem.tabName }}
                  </div>
                </div>
                <div class="tabs-content">
                  {{ tabsList[activeTab].tabContent }}
                </div>
                <div
                  class="modal-btn"
                  :class="[!isShowAlTabs ? 'pointer-none' : '']"
                  @click="setNextStep(3)"
                >
                  Прочитано
                </div>
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade" mode="out-in">
          <div class="modal-template video-modal" v-if="isShowVideoModal">
            <div class="modal-content">
              <!-- <div
                class="man-modal__close"
                @click="isShowVideoModal = false"
              ></div> -->
              <div class="video-block">
                <vue-plyr @play="() => console.log('Video Is Play')">
                  <video
                    crossorigin
                    playsinline
                    poster="@/assets/img/poster.png"
                  >
                    <source
                      src="@/assets/files/video-ex.mp4"
                      type="video/mp4"
                    />
                  </video>
                </vue-plyr>
              </div>
              <div class="modal-btn" @click="setNextStep(4)">Просмотрено</div>
            </div>
          </div>
        </transition>

        <transition name="fade" mode="out-in">
          <Wardrobe
            v-show="showWardrobe"
            @closeWardrobe="closeWardrobe($event)"
            @selectNewVisual="($event) => (personVisual = $event)"
          />
        </transition>

        <transition name="fade" mode="out-in">
          <QuizModal
            v-if="showQuiz"
            @modalClose="showQuiz = false"
            :questionsList="questionsList"
            :step="1"
          >
            <div class="result__image">
              <img
                src="@/assets/img/modules/module-1/modal-result.png"
                alt=""
              />
            </div>
            <div class="result__text">
              Вы ответили правильно на все вопросы!
            </div>
            <div class="result__btn" @click="compliteModule">
              Перейти на следующий этап
            </div>
          </QuizModal>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import Wardrobe from "@/components/Wardrobe.vue";
import QuizModal from "@/components/QuizModal.vue";
import { ref, onMounted, computed } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

import { useGameStore } from "@/stores/GameStore.js";
const store = useGameStore();

const stepLoad = ref(false);
const moduleStep = ref(0);
const isInteractive = ref(false);
const showMessageModal = ref(false);
const isShowSecondStepModal = ref(false);
const isShowVideoModal = ref(false);
const showWardrobe = ref(false);
const activeTab = ref(0);
const featuredTabs = ref([0]);
const showQuiz = ref(false);

const personVisual = ref({
  path: new URL(`../assets/img/modules/module-1/object-1.svg`, import.meta.url),
  isSelected: false,
});

const isMute = ref(false);
const isShowAlTabs = computed(() => {
  return featuredTabs.value.length == tabsList.length;
});

const tabsList = [
  {
    tabName: "Лист 1",
    tabContent:
      "Ты уже определился с корпоративной связью и подал заявку в ServiceDesk, предварительно согласовав с непосредственным руководителем и прикрепив письмо о согласовании к заявке? Если нет, то пора сделать.",
  },
  {
    tabName: "Лист 2",
    tabContent:
      "редварительно согласовав с непосредственным руководителем и прикрепив письмо о согласовании к заявке? Если нет, то пора сделать.",
  },
  {
    tabName: "Лист 1",
    tabContent:
      "Ты уже определился с корпоративной  предварительно согласовав с непным руководителем и прикрепив письмо о согласовании к заявке? Если нет, то пора сделать.",
  },
];

const questionsList = [
  {
    id: 0,
    title: "В чем заключается ключевая роль корпоративной этики?",
    options: [
      {
        id: 0,
        title: "Это неотъемлемая часть любого бизнеса",
        error: "Вы ответили не правильно! Описание  администратором",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "Это эффективный инструмент менеджмента",
        error:
          "Вы ответили не правильно! Описание ответа создается администратором",
        correctAnswer: false,
      },

      {
        id: 2,
        title: "Это ключевой элемент, объединяющий людей",
        error: "Вы ответили не правильно! Описание ответа ",
        correctAnswer: true,
      },

      {
        id: 3,
        title: "Это способ повысить эффективность команды",
        error: "Вы ответили не правильно!",
        correctAnswer: false,
      },
    ],
  },
  {
    id: 1,
    title: "Второй вопрос",
    options: [
      {
        id: 0,
        title: "Это неотъемлемая часть любого бизнеса",
        error: "Вы ответили не правильно! Описание  администратором",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "Это эффективный инструмент менеджмента",
        error:
          "Вы ответили не правильно! Описание ответа создается администратором",
        correctAnswer: false,
      },

      {
        id: 2,
        title: "Это ключевой элемент, объединяющий людей",
        error: "Вы ответили не правильно! Описание ответа ",
        correctAnswer: true,
      },

      {
        id: 3,
        title: "Это способ повысить эффективность команды",
        error: "Вы ответили не правильно!",
        correctAnswer: false,
      },
    ],
  },
];

const showMessage = () => {
  if (moduleStep.value == 1) {
    showMessageModal.value = true;
    moduleStep.value = 0;
  }
};

const setShowQuiz = () => {
  if (moduleStep.value == 5) {
    showQuiz.value = true;
  }
};

const showVideoModal = () => {
  isShowVideoModal.value = moduleStep.value < 3 ? false : true;
};

const closeModalAndNextStep = () => {
  showMessageModal.value = false;
  moduleStep.value = 2;
};

const showSecondStepModal = () => {
  isShowSecondStepModal.value = true;
};

const setNextStep = (step) => {
  if (step == 3) {
    if (moduleStep.value < 3) {
      moduleStep.value = 3;
    }
    isShowSecondStepModal.value = false;
  }
  if (step == 4) {
    isShowVideoModal.value = !1;
    if (moduleStep.value < 4) {
      moduleStep.value = 4;
    }
  }
};

const showCurrentTab = (ind) => {
  activeTab.value = ind;
  if (!featuredTabs.value.includes(ind)) {
    featuredTabs.value.push(ind);
  }
};

const closeWardrobe = (isComplite) => {
  if (isComplite) {
    moduleStep.value = 5;
  }
  showWardrobe.value = false;
};

const compliteModule = () => {
  store.openNewStep(2);
  router.push("/");
};

onMounted(() => {
  setTimeout(() => {
    moduleStep.value = 1;
    isInteractive.value = true;
    stepLoad.value = true;
  }, 800);
});
</script>

<style lang="scss" scoped>
.step-wrapper__content {
  background-image: url(@/assets/img/modules/module-1/module-1-bg.svg);
}

.arrow-template {
  position: absolute;

  width: 123px;
  height: 215px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  pointer-events: none;
  .arrow-template_img {
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='123' height='215' viewBox='0 0 123 215' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cmask id='mask0_2109_5305' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='123' height='215'%3e%3crect width='123' height='215' fill='%23D9D9D9'/%3e%3c/mask%3e%3cg mask='url(%23mask0_2109_5305)'%3e%3cg filter='url(%23filter0_d_2109_5305)'%3e%3cpath d='M87.9582 141.996L122.182 138.826L55.3048 213.776L16.3366 130.375L53.1999 139.875C53.1999 139.875 85.3189 64.9363 11.6033 1.59618C11.6033 1.59618 99.0172 34.3266 87.9582 141.996Z' fill='white'/%3e%3cpath d='M87.8383 142.117C98.0684 141.373 112.148 140.466 122.259 139.657L121.561 138.279C99.5735 162.253 75.7978 188.556 54.2251 212.814L56.6136 213.164C44.235 187.113 29.108 156.252 16.8057 130.168L16.2058 130.889C26.8613 133.666 42.2501 137.591 53.0473 140.477C56.69 135.535 57.3989 127.632 59.0239 121.477C68.5451 76.0544 47.7577 29.2216 12.7377 0.273624L10.9927 3.2362C65.8185 26.74 93.7931 83.9364 87.8383 142.117ZM88.0673 141.887C96.5742 87.8719 71.2062 30.3039 22.0843 4.69016C19.7286 3.55323 7.49174 -4.06639 10.4582 2.91917C50.0808 34.8516 70.7482 90.7033 52.6437 139.646L53.3417 139.296C42.37 137.055 26.3378 131.469 15.835 130.244C15.5951 130.649 25.4653 151.135 25.4762 151.507C33.9176 170.19 45.4347 195.76 53.9852 214.388C55.7847 218.772 70.181 197.957 73.0821 195.99C88.6017 178.487 107.491 157.072 122.804 139.384C125.967 135.721 90.8921 142.335 88.0782 141.887L88.0673 141.887Z' fill='black'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter id='filter0_d_2109_5305' x='-0.00244141' y='0' width='123.008' height='215' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset dx='-10'/%3e%3cfeComposite in2='hardAlpha' operator='out'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0.0392157 0 0 0 0 0.733333 0 0 0 0 0.937255 0 0 0 1 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_2109_5305'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_2109_5305' result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e ");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  &.show {
    opacity: 1;
    visibility: visible;
    .arrow-template_img {
      animation: heartBeat 4s ease-in-out infinite 1s;
    }
  }

  &[data-item="1"] {
    right: 24%;
    width: 6%;
    height: 20%;
    top: 3%;
    z-index: 4;
    transform: rotate(313deg);
  }

  &[data-item="2"] {
    right: 31.6%;
    width: 7%;
    height: 20%;
    top: 11%;
    z-index: 4;
    transform: rotate(270deg);
  }

  &[data-item="3"] {
    right: 33%;
    width: 7%;
    height: 20%;
    top: 19%;
    z-index: 4;
    transform: rotate(359deg);
  }

  &[data-item="4"] {
    left: 28%;
    width: 8%;
    height: 25%;
    top: 28%;
    z-index: 4;
    transform: rotate(268deg) scaleY(-1);
  }

  &[data-item="5"] {
    right: 16%;
    width: 8%;
    height: 25%;
    top: 37%;
    z-index: 4;
    transform: rotate(268deg);
  }
}

.interactive-item {
  cursor: pointer;
  transition: opacity 0.2s ease-in-out, filter 0.5s ease-in-out;
  filter: drop-shadow(0px 6px 0px rgba(0, 0, 0, 0));
  &.pulse {
    // filter: drop-shadow(0px 6px 10px #0078dc) drop-shadow(0px -6px 10px #0078dc);
    filter: drop-shadow(0px 6px 10px #00c5ff) drop-shadow(0px -6px 10px #00c5ff);
    animation: dropShadowPulse 3s linear infinite 1s;
  }

  img {
    width: 100%;
    object-fit: contain;
    height: 100%;
  }
  position: absolute;

  &[data-item="1"] {
    right: 10%;
    width: 15%;
    height: 88%;
    top: 11%;
    z-index: 2;
  }

  &[data-item="2"] {
    pointer-events: none;
    left: 15%;
    width: 20%;
    height: 88%;
    top: 9%;
    z-index: 6;

    &.reverse {
      left: 27%;
      transform: scaleX(-1);
    }
  }

  &[data-item="3"] {
    right: 0.8%;
    width: 11%;
    height: 93.2%;
    top: 6.4%;
    z-index: 1;
  }

  &[data-item="4"] {
    right: 17%;
    width: 11%;
    height: 16.3%;
    top: 13.3%;
  }

  &[data-item="5"] {
    right: 29.4%;
    width: 14.6%;
    height: 18%;
    top: 42.7%;
  }

  &[data-item="6"] {
    // background-color: rgba(255, 0, 0, 0.183);
    left: -2.4%;
    width: 36.9%;
    height: 80.5%;
    top: 12.4%;
  }
}
</style>
