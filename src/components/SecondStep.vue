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
          :class="[moduleStep == 4 ? 'pulse' : '']"
          @click="openStep(4)"
        >
          <img src="@/assets/img/modules/module-2/object-1.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          data-item="2"
          :class="[moduleStep == 3 ? 'pulse' : '']"
          @click="openStep(3)"
        >
          <img src="@/assets/img/modules/module-2/object-2.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          data-item="3"
          :class="[moduleStep == 2 ? 'pulse' : '']"
          @click="openStep(2)"
        >
          <img src="@/assets/img/modules/module-2/object-3.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          data-item="4"
          :class="[moduleStep == 1 ? 'pulse' : '']"
          @click="openStep(1)"
        >
          <img src="@/assets/img/modules/module-2/object-4.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          data-item="5"
          :class="[moduleStep == 5 ? 'pulse' : '']"
          @click="openStep(5)"
        >
          <img src="@/assets/img/modules/module-2/object-5.svg" alt="" />
        </div>

        <div
          class="arrow-template"
          v-for="step in 5"
          :class="[moduleStep == step ? 'show' : '']"
          :data-item="step"
        >
          <div class="arrow-template_img"></div>
        </div>

        <transition name="fade" mode="out-in">
          <div class="modal-template file-modal" v-show="showFileModal">
            <div class="modal-content">
              <div class="man-modal__close" @click="compliteStep(1)"></div>
              <div class="file-modal__inner">
                <div class="file-modal__title">
                  Нажмите кнопку для того чтобы скачать инструкцию
                </div>
                <div class="file-modal__img">
                  <img
                    src="@/assets/img/modules/module-2/file-modal-image.svg"
                    alt=""
                  />
                </div>
                <a
                  href="../assets/img/modules/module-2/modal-card-image.png"
                  download
                  class="file-modal__btn"
                >
                  <span>Скачать PDF</span>
                  <div class="ico">
                    <svg
                      width="61"
                      height="60"
                      viewBox="0 0 61 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.8725 59.0779C46.5703 59.0779 59.2958 46.1716 59.2958 30.2509C59.2958 14.3301 46.5703 1.42383 30.8725 1.42383C15.1748 1.42383 2.44922 14.3301 2.44922 30.2509C2.44922 46.1716 15.1748 59.0779 30.8725 59.0779Z"
                        fill="#23C2F1"
                      />
                      <path
                        d="M52.0694 10.8692C54.5584 13.7193 56.646 16.9766 58.0912 20.4782C59.5365 24.0612 60.4197 27.8885 60.5 31.8787C60.5 35.8689 59.7774 39.8591 58.1715 43.5235C56.5657 47.188 54.0767 50.4453 51.1059 53.0511C48.0548 55.6569 44.5219 57.5299 40.8285 58.6699C37.1351 59.81 33.2811 60.2172 29.4271 59.8914C21.7993 59.4028 14.4125 56.1455 8.95266 50.5267C6.22274 47.758 3.97457 44.4193 2.52931 40.6734C1.08406 36.9275 0.361436 32.9373 0.52202 28.8657C0.682604 20.8039 4.29574 12.7421 10.2373 7.3676C13.2081 4.68034 16.741 2.5631 20.5147 1.34162C24.2884 0.120131 28.303 -0.287031 32.2373 0.201562C36.0913 0.690156 39.865 1.99307 43.157 3.78458C46.5292 5.65753 49.5 8.01906 51.9891 10.8692H52.0694ZM51.7482 11.1949C49.2591 8.42622 46.1278 6.22755 42.7555 4.8432C39.3833 3.45885 35.6898 2.88883 32.157 2.97026C28.6241 3.05169 25.0913 3.86602 21.8796 5.16893C18.668 6.47185 15.6972 8.34479 13.1278 10.7063C10.5585 13.0679 8.5512 15.918 6.94536 19.0124C5.41982 22.1883 4.53661 25.6084 4.21544 29.11C3.73369 36.1132 5.98186 43.4421 10.4782 49.0609C12.7264 51.8296 15.6169 54.2726 18.9088 55.9012C22.1205 57.5299 25.8139 58.5071 29.4271 58.5885C33.0402 58.6699 36.7336 57.9371 40.0256 56.5527C43.3176 55.0869 46.2884 53.0511 48.7774 50.5267C53.7555 45.5593 57.0474 38.9633 57.9307 31.7159C58.3321 28.1328 58.1715 24.387 57.0475 20.8039C56.0037 17.2209 54.1569 13.8822 51.6679 11.1135L51.7482 11.1949Z"
                        fill="black"
                      />
                      <path
                        d="M34 18.8571C34 16.9003 32.3264 15.5 30.5 15.5C28.6736 15.5 27 16.9003 27 18.8571V22.3227C25.7166 21.7395 24.1398 21.9468 23.0651 22.9448C21.645 24.2635 21.645 26.4508 23.0651 27.7695L28.0651 32.4124C29.4217 33.6721 31.5783 33.6721 32.9349 32.4124L37.9349 27.7695C39.355 26.4508 39.355 24.2635 37.9349 22.9448C36.8602 21.9468 35.2834 21.7395 34 22.3227V18.8571ZM23 35.5714C23 33.6146 21.3264 32.2143 19.5 32.2143C17.6736 32.2143 16 33.6146 16 35.5714V39.2857C16 40.706 16.6086 42.0435 17.6509 43.0113C18.6894 43.9756 20.0757 44.5 21.5 44.5H39.5C40.9243 44.5 42.3106 43.9756 43.3491 43.0113C44.3914 42.0435 45 40.706 45 39.2857V35.5714C45 33.6146 43.3264 32.2143 41.5 32.2143C39.6736 32.2143 38 33.6146 38 35.5714V37.7857H23V35.5714Z"
                        fill="white"
                        stroke="black"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade" mode="out-in">
          <div class="modal-template wi-fi-modal" v-show="showWiFiModal">
            <div class="modal-content">
              <!-- <div class="man-modal__close" @click="compliteStep(2)"></div> -->
              <div class="tabs-modal__inner">
                <div class="tabs-content">
                  Ты уже определился с корпоративной связью и подал заявку в
                  ServiceDesk, предварительно согласовав с непосредственным
                  руководителем и прикрепив письмо о согласовании к заявке? Если
                  нет, то пора сделать.
                </div>
                <div class="modal-btn" @click="compliteStep(2)">Прочитано</div>
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade" mode="out-in">
          <div class="modal-template phone-modal" v-show="showPhoneModal">
            <div class="modal-content">
              <div class="man-modal__close" @click="compliteStep(3)"></div>
              <div class="tabs-modal__inner">
                <div class="tabs-content">
                  Ты уже определился с корпоративной связью и подал заявку в
                  ServiceDesk, предварительно согласовав с непосредственным
                  руководителем и прикрепив письмо о согласовании к заявке? Если
                  нет, то пора сделать.
                </div>
                <div class="phone-modal__card">
                  <div class="card__img">
                    <img
                      src="@/assets/img/modules/module-2/modal-card-image.png"
                      alt=""
                    />
                  </div>
                  <div class="card__content">
                    <div class="card__name">Дарья Москалева</div>
                    <div class="card__position">Cтарший бренд менеджер</div>
                    <a href="tel:+79880000000" class="card__link"
                      >+7 (988) 0000-000</a
                    >
                    <a href="mailto:mailadress@mail.com" class="card__link"
                      >mailadress@mail.com</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <transition name="fade" mode="out-in">
          <div class="modal-template hummer-modal" v-show="showHummerModal">
            <div class="modal-content">
              <!-- <div class="man-modal__close" @click="compliteStep(4)"></div> -->
              <div class="tabs-modal__inner">
                <div class="tabs-content">
                  Ты уже определился с корпоративной связью и подал заявку в
                  ServiceDesk, предварительно согласовав с непосредственным
                  руководителем и прикрепив письмо о согласовании к заявке? Если
                  нет, то пора сделать.
                </div>
                <div class="modal-btn" @click="compliteStep(4)">Прочитано</div>
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade" mode="out-in">
          <QuizModal
            v-if="showQuiz"
            @modalClose="showQuiz = false"
            :questionsList="questionsList"
            :step="2"
          >
            <div class="result__image">
              <img
                src="@/assets/img/modules/module-2/modal-result.png"
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
import QuizModal from "@/components/QuizModal.vue";

import { ref, onMounted, computed } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

import { useGameStore } from "@/stores/GameStore.js";
const store = useGameStore();

const stepLoad = ref(false);
const moduleStep = ref(null);
const isInteractive = ref(false);

const showFileModal = ref(false);
const showWiFiModal = ref(false);
const showPhoneModal = ref(false);
const showHummerModal = ref(false);
const showQuiz = ref(false);

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
    showFileModal.value = true;
  }

  if (step == 2 && currentStep >= 2) {
    showWiFiModal.value = true;
  }

  if (step == 3 && currentStep >= 3) {
    showPhoneModal.value = true;
  }

  if (step == 4 && currentStep >= 4) {
    showHummerModal.value = true;
  }
  if (step == 5 && currentStep >= 5) {
    showQuiz.value = true;
  }
};

const compliteStep = (step) => {
  if (step == 1) {
    showFileModal.value = false;
    if (moduleStep.value < 2) {
      moduleStep.value = 2;
    }
  }

  if (step == 2) {
    showWiFiModal.value = false;
    if (moduleStep.value < 3) {
      moduleStep.value = 3;
    }
  }

  if (step == 3) {
    showPhoneModal.value = false;
    if (moduleStep.value < 4) {
      moduleStep.value = 4;
    }
  }

  if (step == 4) {
    showHummerModal.value = false;
    if (moduleStep.value < 5) {
      moduleStep.value = 5;
    }
  }
};

const compliteModule = () => {
  store.openNewStep(3);
  router.push("/");
};

onMounted(() => {
  setTimeout(() => {
    moduleStep.value = 1;
    stepLoad.value = true;
    isInteractive.value = true;
  }, 800);
});
</script>

<style lang="scss" scoped>
.step-wrapper__content {
  background-image: url(@/assets/img/modules/module-2/module-2-bg.svg);
}

.arrow-template {
  position: absolute;
  // background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='123' height='215' viewBox='0 0 123 215' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cmask id='mask0_2109_5305' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='123' height='215'%3e%3crect width='123' height='215' fill='%23D9D9D9'/%3e%3c/mask%3e%3cg mask='url(%23mask0_2109_5305)'%3e%3cg filter='url(%23filter0_d_2109_5305)'%3e%3cpath d='M87.9582 141.996L122.182 138.826L55.3048 213.776L16.3366 130.375L53.1999 139.875C53.1999 139.875 85.3189 64.9363 11.6033 1.59618C11.6033 1.59618 99.0172 34.3266 87.9582 141.996Z' fill='white'/%3e%3cpath d='M87.8383 142.117C98.0684 141.373 112.148 140.466 122.259 139.657L121.561 138.279C99.5735 162.253 75.7978 188.556 54.2251 212.814L56.6136 213.164C44.235 187.113 29.108 156.252 16.8057 130.168L16.2058 130.889C26.8613 133.666 42.2501 137.591 53.0473 140.477C56.69 135.535 57.3989 127.632 59.0239 121.477C68.5451 76.0544 47.7577 29.2216 12.7377 0.273624L10.9927 3.2362C65.8185 26.74 93.7931 83.9364 87.8383 142.117ZM88.0673 141.887C96.5742 87.8719 71.2062 30.3039 22.0843 4.69016C19.7286 3.55323 7.49174 -4.06639 10.4582 2.91917C50.0808 34.8516 70.7482 90.7033 52.6437 139.646L53.3417 139.296C42.37 137.055 26.3378 131.469 15.835 130.244C15.5951 130.649 25.4653 151.135 25.4762 151.507C33.9176 170.19 45.4347 195.76 53.9852 214.388C55.7847 218.772 70.181 197.957 73.0821 195.99C88.6017 178.487 107.491 157.072 122.804 139.384C125.967 135.721 90.8921 142.335 88.0782 141.887L88.0673 141.887Z' fill='black'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter id='filter0_d_2109_5305' x='-0.00244141' y='0' width='123.008' height='215' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset dx='-10'/%3e%3cfeComposite in2='hardAlpha' operator='out'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0.0392157 0 0 0 0 0.733333 0 0 0 0 0.937255 0 0 0 1 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_2109_5305'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_2109_5305' result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e ");
  // background-repeat: no-repeat;
  // background-size: contain;
  // background-position: center;
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
    right: 54%;
    width: 6%;
    height: 20%;
    top: 52%;
    z-index: 4;
    transform: rotate(190deg) scaleY(-1);
  }

  &[data-item="2"] {
    right: 37.6%;
    width: 7%;
    height: 20%;
    top: 27%;
    z-index: 4;
    transform: rotate(341deg);
  }

  &[data-item="3"] {
    right: 41%;
    width: 7%;
    height: 20%;
    top: 2%;
    z-index: 4;
    transform: rotate(317deg);
  }

  &[data-item="4"] {
    right: 4%;
    width: 7%;
    height: 20%;
    top: 12%;
    z-index: 4;
    transform: rotate(151deg) scaleX(-1);
  }

  &[data-item="5"] {
    right: 62%;
    width: 7%;
    height: 20%;
    top: 6%;
    z-index: 4;
    transform: rotate(-33deg);
  }
}

.interactive-item {
  cursor: pointer;
  transition: opacity 0.2s ease-in-out, filter 0.5s ease-in-out;
  filter: drop-shadow(0px 6px 0px rgba(0, 0, 0, 0));
  position: absolute;
  &.pulse {
    // filter: drop-shadow(0px 6px 10px #0078dc) drop-shadow(0px -6px 10px #0078dc);
    filter: drop-shadow(0px 6px 10px #00c5ff) drop-shadow(0px -6px 10px #00c5ff);
    animation: dropShadow 3s linear infinite 0.4s;
  }

  img {
    width: 100%;
    object-fit: contain;
    height: 100%;
  }

  &[data-item="1"] {
    right: 11.3%;
    width: 6%;
    height: 15%;
    top: 3.7%;
  }

  &[data-item="2"] {
    right: 33.7%;
    width: 7%;
    height: 15%;
    top: 19.7%;
  }

  &[data-item="3"] {
    right: 35.3%;
    width: 8%;
    height: 15%;
    top: 49.7%;
  }

  &[data-item="4"] {
    right: 50.5%;
    width: 13%;
    height: 24%;
    top: 72%;
  }

  &[data-item="5"] {
    right: 55%;
    width: 13%;
    height: 22%;
    top: 27%;
  }
}
</style>
