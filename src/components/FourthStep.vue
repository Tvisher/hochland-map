<template>
  <div
    class="step-wrapper"
    :class="{ 'no-interactive': !isInteractive, 'step-load': stepLoad }"
  >
    <div class="step-wrapper__block">
      <div class="step-wrapper__content">
        <div
          class="interactive-item"
          data-item="1"
          :class="[moduleStep == 1 ? 'pulse' : '']"
          @click="openStep(1)"
        >
          <img src="@/assets/img/modules/module-4/object-1.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          data-item="2"
          :class="[moduleStep == 2 ? 'pulse' : '']"
          @click="openStep(2)"
        >
          <img src="@/assets/img/modules/module-4/object-2.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          data-item="3"
          :class="[moduleStep == 3 ? 'pulse' : '']"
          @click="openStep(3)"
        >
          <img src="@/assets/img/modules/module-4/object-3.svg" alt="" />
        </div>

        <div
          class="arrow-template"
          v-for="step in 3"
          :class="[moduleStep == step ? 'show' : '']"
          :data-item="step"
        >
          <div class="arrow-template_img"></div>
        </div>

        <transition name="fade" mode="out-in">
          <QuizModal
            v-if="showQuiz"
            @modalClose="showQuiz = false"
            :questionsList="questionsList"
            :step="4"
          >
            <div class="result__image">
              <img
                src="@/assets/img/modules/module-4/modal-result.png"
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

        <transition name="fade" mode="out-in">
          <div class="modal-template parking-modal" v-show="showParkingModal">
            <div class="modal-content">
              <div class="tabs-modal__inner">
                <div class="tabs-content">
                  Забронируйте место на парковке Хохланд
                  <div class="parking-modal__image">
                    <img
                      src="@/assets/img/modules/module-4/modal-parking/modal-bg.svg"
                      alt=""
                    />
                    <div
                      class="sign-item"
                      :class="{ pulse: parkingNumber == 1 }"
                      data-item="1"
                      @click="parkingNumber = 1"
                    >
                      <img
                        src="@/assets/img/modules/module-4/modal-parking/sign-1.svg"
                        alt=""
                      />
                    </div>
                    <div
                      class="sign-item"
                      :class="{ pulse: parkingNumber == 2 }"
                      data-item="2"
                      @click="parkingNumber = 2"
                    >
                      <img
                        src="@/assets/img/modules/module-4/modal-parking/sign-2.svg"
                        alt=""
                      />
                    </div>
                    <div
                      class="sign-item"
                      :class="{ pulse: parkingNumber == 3 }"
                      data-item="3"
                      @click="parkingNumber = 3"
                    >
                      <img
                        src="@/assets/img/modules/module-4/modal-parking/sign-3.svg"
                        alt=""
                      />
                    </div>

                    <div
                      class="line-item"
                      :class="{ pulse: parkingNumber == 1 }"
                      data-item="1"
                    >
                      <img
                        src="@/assets/img/modules/module-4/modal-parking/line-1.svg"
                        alt=""
                      />
                    </div>
                    <div
                      class="line-item"
                      :class="{
                        pulse: parkingNumber == 1 || parkingNumber == 2,
                      }"
                      data-item="2"
                    >
                      <img
                        src="@/assets/img/modules/module-4/modal-parking/line-2.svg"
                        alt=""
                      />
                    </div>
                    <div
                      class="line-item"
                      :class="{
                        pulse: parkingNumber == 2 || parkingNumber == 3,
                      }"
                      data-item="3"
                    >
                      <img
                        src="@/assets/img/modules/module-4/modal-parking/line-3.svg"
                        alt=""
                      />
                    </div>
                    <div
                      class="line-item"
                      :class="{ pulse: parkingNumber == 3 }"
                      data-item="4"
                    >
                      <img
                        src="@/assets/img/modules/module-4/modal-parking/line-4.svg"
                        alt=""
                      />
                    </div>

                    <div
                      class="markup-item"
                      :class="{ pulse: parkingNumber == 1 }"
                      data-item="1"
                    >
                      <img
                        src="@/assets/img/modules/module-4/modal-parking/markup-1.svg"
                        alt=""
                      />
                    </div>
                    <div
                      class="markup-item"
                      :class="{ pulse: parkingNumber == 2 }"
                      data-item="2"
                    >
                      <img
                        src="@/assets/img/modules/module-4/modal-parking/markup-2.svg"
                        alt=""
                      />
                    </div>
                    <div
                      class="markup-item"
                      :class="{ pulse: parkingNumber == 3 }"
                      data-item="3"
                    >
                      <img
                        src="@/assets/img/modules/module-4/modal-parking/markup-3.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="modal-btn" @click="compliteStep(1)">Прочитано</div>
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade" mode="out-in">
          <div class="modal-template cafe-modal" v-show="showCafeModal">
            <div class="modal-content">
              <div class="tabs-modal__inner">
                <div class="tabs-content">
                  Забронируйте место в кафе Хохланд
                  <div class="cafe-modal__image">
                    <img
                      src="@/assets/img/modules/module-4/cafe-modal/modal-bg.svg"
                      alt=""
                    />

                    <div
                      class="table-item"
                      v-for="(el, ind) in 6"
                      :data-table="ind + 1"
                      :class="{ pulse: tableNumber == ind + 1 }"
                      @click="tableNumber = ind + 1"
                    >
                      <img
                        src="@/assets/img/modules/module-4/cafe-modal/table.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="modal-btn" @click="compliteStep(2)">Прочитано</div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import QuizModal from "@/components/QuizModal.vue";

import { ref, onMounted } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

import { useGameStore } from "@/stores/GameStore.js";
const store = useGameStore();

const stepLoad = ref(false);
const moduleStep = ref(null);
const isInteractive = ref(false);

const showQuiz = ref(false);
const showParkingModal = ref(false);
const showCafeModal = ref(false);
const parkingNumber = ref(1);
const tableNumber = ref(1);

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

const openStep = (step) => {
  const currentStep = moduleStep.value;
  if (step == 1 && currentStep >= 1) {
    showParkingModal.value = true;
  }

  if (step == 2 && currentStep >= 2) {
    showCafeModal.value = true;
  }
  if (step == 3 && currentStep >= 3) {
    showQuiz.value = true;
  }
};

const compliteStep = (step) => {
  if (step == 1) {
    showParkingModal.value = false;
    if (moduleStep.value < 2) {
      moduleStep.value = 2;
    }
  }

  if (step == 2) {
    showCafeModal.value = !1;
    if (moduleStep.value < 3) {
      moduleStep.value = 3;
    }
  }

  if (step == 3) {
    showQuiz.value = false;
    if (moduleStep.value < 3) {
      moduleStep.value = 3;
    }
  }
};

const compliteModule = () => {
  store.openNewStep(4);
  router.push("/");
};

onMounted(() => {
  setTimeout(() => {
    setTimeout(() => {
      moduleStep.value = 1;
    }, 500);
    stepLoad.value = true;
    isInteractive.value = true;
  }, 800);
});
</script>

<style lang="scss" scoped>
.step-wrapper__content {
  background-image: url(@/assets/img/modules/module-4/module-4-bg.svg);
}

.arrow-template {
  pointer-events: none;
  position: absolute;

  width: 123px;
  height: 215px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
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
    left: 14%;
    width: 6%;
    height: 20%;
    top: 50%;
    z-index: 4;
    transform: scaleX(-1) rotate(-28deg);
  }

  &[data-item="2"] {
    right: 31%;
    width: 7%;
    height: 20%;
    top: 5%;
    z-index: 4;
    transform: rotate(298deg);
  }

  &[data-item="3"] {
    left: 24.6%;
    width: 6%;
    height: 18%;
    top: 21%;
    z-index: 4;
    transform: rotate(187deg) scaleY(-1);
  }
}

.interactive-item {
  cursor: pointer;
  transition: opacity 0.2s ease-in-out, filter 0.5s ease-in-out;
  filter: drop-shadow(0px 6px 0px rgba(0, 0, 0, 0));
  position: absolute;
  &.pulse {
    z-index: 3;
    filter: drop-shadow(0px 6px 10px #00c5ff) drop-shadow(0px -6px 10px #00c5ff);
    animation: dropShadow 3s linear infinite 0.4s;
  }

  img {
    width: 100%;
    object-fit: contain;
    height: 100%;
  }

  &[data-item="1"] {
    left: 0;
    width: 22%;
    height: 26%;
    bottom: 11.3%;
  }

  &[data-item="2"] {
    right: -0.25%;
    width: 32.3%;
    height: 90%;
    top: 0;
  }

  &[data-item="3"] {
    left: 24.3%;
    top: 44.3%;
    width: 6%;
    height: 37.5%;
  }
}
</style>
