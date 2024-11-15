<template>
  <div
    class="step-wrapper"
    :class="{ 'no-interactive': !isInteractive, 'step-load': stepLoad }"
  >
    <div class="step-wrapper__block">
      <div class="step-wrapper__content">
        <transition name="fade" mode="out-in">
          <div class="step-bg-segment" v-if="moduleStep >= 18">
            <img src="@/assets/img/modules/module-7/bg-element.svg" alt="" />
          </div>
        </transition>
        <div
          class="interactive-item"
          :class="[moduleStep == 1 ? 'pulse' : '']"
          data-item="1"
          @click="openStep()"
        >
          <img src="@/assets/img/modules/module-8/object-1.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 1 ? 'pulse' : '']"
          data-item="2"
          @click="openStep()"
        >
          <img src="@/assets/img/modules/module-8/object-2.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 1 ? 'pulse' : '']"
          data-item="3"
          @click="openStep()"
        >
          <img src="@/assets/img/modules/module-8/object-3.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 1 ? 'pulse' : '']"
          data-item="4"
          @click="openStep()"
        >
          <img src="@/assets/img/modules/module-8/object-4.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 1 ? 'pulse' : '']"
          data-item="5"
          @click="openStep()"
        >
          <img src="@/assets/img/modules/module-8/object-5.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 1 ? 'pulse' : '']"
          data-item="6"
          @click="openStep()"
        >
          <img src="@/assets/img/modules/module-8/object-6.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 1 ? 'pulse' : '']"
          data-item="7"
          @click="openStep()"
        >
          <img src="@/assets/img/modules/module-8/object-7.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 1 ? 'pulse' : '']"
          data-item="8"
          @click="openStep()"
        >
          <img src="@/assets/img/modules/module-8/object-8.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 1 ? 'pulse' : '']"
          data-item="9"
          @click="openStep()"
        >
          <img src="@/assets/img/modules/module-8/object-9.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 1 ? 'pulse' : '']"
          data-item="10"
          @click="openStep()"
        >
          <img src="@/assets/img/modules/module-8/object-10.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 1 ? 'pulse' : '']"
          data-item="11"
          @click="openStep()"
        >
          <img src="@/assets/img/modules/module-8/object-11.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 1 ? 'pulse' : '']"
          data-item="12"
          @click="openStep()"
        >
          <img src="@/assets/img/modules/module-8/object-12.svg" alt="" />
        </div>

        <div
          class="arrow-template"
          v-for="step in [1, 2, 3, 4, 5]"
          :class="[moduleStep == step ? 'show' : '']"
          :data-item="step"
        >
          <div class="arrow-template_img"></div>
        </div>
        <transition name="fade" mode="out-in">
          <div class="modal-template glasses-modal" v-show="showGlassesModal">
            <div class="modal-content">
              <div class="tabs-modal__inner">
                <div class="tabs-content__inner">
                  <div class="tabs-content__title">
                    Каждый новый сотрудник компании получает в подарок
                    приветственный пакет. Ты уже забрал свой?
                    <br /><br />
                    А бонусом к этому пакету есть
                    <a href="#">стикеры в Телеграме</a> — забирай их себе и
                    отправляй коллегам.
                  </div>
                  <div class="modal-btn" @click="compliteStep()">
                    Получить стикеры
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade" mode="out-in">
          <div class="modal-template reward-modal" v-show="showRewardModal">
            <div class="modal-content">
              <div class="tabs-modal__inner">
                <div class="tabs-content__inner">
                  <div class="tabs-content__title">
                    Ты знаком с премией «Лидеры года»? Она проходит ежегодно.
                    Участвовать может каждый, независимо от стажа и должности.
                  </div>
                  <div class="tabs-content__title _small">
                    Всего пять номинаций:
                  </div>

                  <div class="phone-modal__list">
                    <ul>
                      <li class="list-item">
                        «Быстрый старт» — для новых сотрудников
                      </li>
                      <li>
                        «Лидер с большой буквы» — для руководителей команд
                      </li>
                      <li>
                        «Инноватор года» — для сотрудников, которые предложили
                        прорывное решение для компании
                      </li>
                      <li>
                        «Лидер в профессии» — для высокоэффективных сотрудников
                      </li>
                      <li>
                        «Проект года» — специальная командная номинация для тех,
                        кто готов вывести кросс-функциональное взаимодействие в
                        компании на новый уровень
                      </li>
                    </ul>
                    <p
                      class="tabs-content__title _small"
                      style="font-weight: 600"
                    >
                      Больше информации ты можешь найти на
                      <a href="#">сайте премии</a>:
                    </p>
                  </div>
                  <div class="modal-btn" @click="compliteStep()">Прочитано</div>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <!-- QuizModal -->
        <transition name="fade" mode="out-in">
          <QuizModal
            v-if="showQuiz"
            @modalClose="showQuiz = false"
            :questionsList="questionsList"
            :step="7"
          >
            <div class="result__image">
              <img
                src="@/assets/img/modules/module-7/modal-result.png"
                alt=""
                rel="preload"
              />
            </div>
            <div class="result__text">
              Ты ответил правильно <br />
              на все вопросы!
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
import QuizModal from "@/components/QuizModal.vue";
import { ref, onMounted, computed } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

import { useGameStore } from "@/stores/GameStore.js";
const store = useGameStore();

const stepLoad = ref(false);
const moduleStep = ref(null);
const isInteractive = ref(false);
const showGlassesModal = ref(false);
const showRewardModal = ref(false);
const showQuiz = ref(false);

const questionsList = [
  {
    id: 0,
    title: "Какие бонусы будут после прохождения испытательного периода? ",
    options: [
      {
        id: 0,
        title: "Увеличенный рабочий день",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "Дополнительный выходной",
        correctAnswer: false,
      },
      {
        id: 2,
        title: "ДМС и пенсионный счет",
        correctAnswer: true,
      },
      {
        id: 3,
        title: "Личный наставник",
        correctAnswer: false,
      },
    ],
  },

  {
    id: 1,
    title: "Какого числа будет приходить зарплата?",
    options: [
      {
        id: 0,
        title: "5-го и 15-го",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "10-го и 25-го",
        correctAnswer: true,
      },
      {
        id: 2,
        title: "12-го и 27-го",
        correctAnswer: false,
      },
      {
        id: 3,
        title: "5-го и 29-го",
        correctAnswer: false,
      },
    ],
  },

  {
    id: 2,
    title: "Когда можно пойти в отпуск?",
    options: [
      {
        id: 0,
        title: "Через полгода",
        correctAnswer: true,
      },
      {
        id: 1,
        title: "Через девять месяцев",
        correctAnswer: false,
      },
      {
        id: 2,
        title: "Через год",
        correctAnswer: false,
      },
      {
        id: 3,
        title: "Какой ещё отпуск?",
        correctAnswer: false,
      },
    ],
  },
];

const openStep = (step) => {
  const currentStep = moduleStep.value;
  if (step == 2 && currentStep <= 2) {
    moduleStep.value = 2;
  }
  console.log(step);
};

const compliteStep = (step) => {
  if (step == 18) {
    showATMModal.value = false;
    if (moduleStep.value < 19) {
      moduleStep.value = 19;
    }
  }
};

const compliteModule = () => {
  store.openNewStep(6);
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
  background-image: url(@/assets/img/modules/module-8/module-8-bg-0.svg);
  background-size: contain;
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

  //   &[data-item="1"] {
  //     left: 13%;
  //     width: 6%;
  //     height: 20%;
  //     top: 15%;
  //     z-index: 4;
  //     transform: rotate(310deg);
  //   }
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
    left: 0%;
    bottom: 12%;
    width: 18%;
    height: 17%;
  }

  &[data-item="2"] {
    left: 32%;
    bottom: 50.5%;
    width: 11%;
    height: 19.4%;
  }

  &[data-item="3"] {
    left: 69.5%;
    top: 26.5%;
    width: 7%;
    height: 13.4%;
  }

  &[data-item="4"] {
    left: 63.5%;
    top: 13%;
    width: 11%;
    height: 13.4%;
  }

  &[data-item="5"] {
    left: 67.5%;
    top: 40%;
    width: 7%;
    height: 12.5%;
  }

  &[data-item="6"] {
    left: 52%;
    top: 54.5%;
    width: 7.5%;
    height: 12.5%;
  }

  &[data-item="7"] {
    left: 56%;
    top: 42.5%;
    width: 10.5%;
    height: 12.5%;
  }

  &[data-item="8"] {
    left: 52%;
    top: 25.2%;
    width: 7.5%;
    height: 15.5%;
  }

  &[data-item="9"] {
    left: 61.5%;
    top: 26%;
    width: 5.5%;
    height: 10.5%;
  }

  &[data-item="10"] {
    left: 55.5%;
    top: 10%;
    width: 7%;
    height: 13%;
  }

  &[data-item="11"] {
    left: 63.5%;
    top: 55%;
    width: 9%;
    height: 12%;
  }

  &[data-item="12"] {
    left: 24.5%;
    top: 70%;
    width: 10%;
    height: 18%;
  }
}
</style>
