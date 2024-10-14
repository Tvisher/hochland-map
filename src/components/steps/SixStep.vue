<template>
  <div
    class="step-wrapper"
    :class="{ 'no-interactive': !isInteractive, 'step-load': stepLoad }"
  >
    <div class="step-wrapper__block">
      <div class="step-wrapper__content">
        <div class="content__part"></div>

        <div
          class="interactive-item"
          :class="[moduleStep == 1 ? 'pulse' : '']"
          data-item="1"
          @click="openStep(1)"
        >
          <img src="@/assets/img/modules/module-6/object-1.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 5 ? 'pulse' : '']"
          data-item="2"
        >
          <img src="@/assets/img/modules/module-6/object-2.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 2 ? 'pulse' : '']"
          data-item="3"
          @click="openStep(2)"
        >
          <img src="@/assets/img/modules/module-6/object-3.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 4 ? 'pulse' : '']"
          data-item="4"
        >
          <img src="@/assets/img/modules/module-6/object-4.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 3 ? 'pulse' : '']"
          data-item="5"
          @click="openStep(3)"
        >
          <img src="@/assets/img/modules/module-6/object-5.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 4 ? 'pulse' : '']"
          data-item="6"
          @click="openStep(4)"
        >
          <img src="@/assets/img/modules/module-6/object-6.svg" alt="" />
        </div>

        <div
          class="arrow-template"
          v-for="step in 3"
          :class="[moduleStep == step ? 'show' : '']"
          :data-item="step"
        >
          <div class="arrow-template_img"></div>
        </div>
      </div>

      <transition name="fade" mode="in-out">
        <div
          class="modal-template album-modal menu-modal"
          v-if="showPhotoAlbumModal"
        >
          <div class="modal-content">
            <div class="tabs-modal__inner">
              <div class="tabs-content">
                <div class="album__wrapper">
                  <AlbumSlider
                    :albumImagesList="albumImagesList"
                    :filePath="pdfFilePath"
                    :albumName="'Кодекс поведения'"
                  />
                </div>
                <div class="modal-btn" @click="compliteStep(1)">
                  Просмотрено
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <transition name="fade" mode="out-in">
        <div class="modal-template file-modal tv-modal" v-show="showTestModal">
          <div class="modal-content">
            <div class="file-modal__inner">
              <div class="file-modal__title">
                Пока администратор проверяет анкету, у тебя есть время изучить
                семь принципов лидерства в компании и закрепить знания
                викториной. Эти правила помогут тебе вести за собой людей,
                никогда не сдаваться и быть уверенным в своих силах.
              </div>
              <a
                href="@/assets/img/modules/module-2/modal-card-image.png"
                download
                class="file-modal__btn"
              >
                <span>Скачать PDF</span>
                <div class="ico">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.2692 5.57143C25.2692 3.22009 23.2512 1.5 21 1.5C18.7488 1.5 16.7308 3.22009 16.7308 5.57143V11.3811C15.069 10.1215 12.6505 10.2124 11.0981 11.654C9.37756 13.2516 9.37755 15.8912 11.0981 17.4889L18.0212 23.9175C19.6782 25.4561 22.3218 25.4561 23.9788 23.9175L30.9019 17.4889C32.6224 15.8912 32.6224 13.2516 30.9019 11.654C29.3495 10.2124 26.931 10.1215 25.2692 11.3811V5.57143ZM10.0385 28.7143C10.0385 26.363 8.02044 24.6429 5.76923 24.6429C3.51802 24.6429 1.5 26.363 1.5 28.7143V33.8571C1.5 35.6563 2.27071 37.3571 3.6015 38.5929C4.92854 39.8251 6.70614 40.5 8.53846 40.5H33.4615C35.2939 40.5 37.0715 39.8251 38.3985 38.5929C39.7293 37.3571 40.5 35.6563 40.5 33.8571V28.7143C40.5 26.363 38.482 24.6429 36.2308 24.6429C33.9796 24.6429 31.9615 26.363 31.9615 28.7143V32.3571H10.0385V28.7143Z"
                      fill="#0ABBEF"
                      stroke="black"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </a>
              <div class="file-modal__title">
                Сохрани их и обязательно применяй в работе.
              </div>
              <SixModuleTest />
            </div>
          </div>
        </div>
      </transition>

      <transition name="fade" mode="in-out">
        <div
          class="modal-template slider-modal time-modal"
          v-show="showSixModuleTimeSlider"
        >
          <div class="modal-content">
            <div class="man-modal__close" @click="compliteStep(3)"></div>
            <div class="tabs-modal__inner">
              <div class="tabs-content">
                <SixModuleTimeSlider />
              </div>
            </div>
          </div>
        </div>
      </transition>

      <transition name="fade" mode="in-out">
        <div
          class="modal-template newspapper-modal"
          v-show="showNewspaperModal"
        >
          <div class="modal-content">
            <div class="tabs-content">
              <div class="file-modal__title">
                Любишь быть в курсе всех событий? Сохрани себе эти ссылки и
                узнавай новости компании первым
              </div>
              <div class="newspapper-modal__content">
                <div class="newspapper-modal__block">
                  <div class="modal__block_wrapper">
                    <div class="modal__block_ico"></div>
                    <div class="modal__block_info">
                      <div class="modal__block_text">
                        Корпоративная социальная сеть в Viva Engage — группа
                        «Новости Hochland в России»: добавиться туда может
                        каждый сотрудник
                      </div>
                      <a href="#" target="_blank" class="modal__block_link"
                        >Перейти</a
                      >
                    </div>
                  </div>
                </div>

                <div class="newspapper-modal__block">
                  <div class="modal__block_wrapper">
                    <div class="modal__block_ico"></div>
                    <div class="modal__block_info">
                      <div class="modal__block_text">
                        Если ты работаешь в Московском офисе, то присоединяйся к
                        этой группе в Viva
                      </div>
                      <a href="#" target="_blank" class="modal__block_link"
                        >Перейти</a
                      >
                    </div>
                  </div>

                  <div class="modal__block_wrapper">
                    <div class="modal__block_ico"></div>
                    <div class="modal__block_info" style="align-items: center">
                      <div class="modal__block_text">Онлайн-журнал:</div>
                      <a href="#" target="_blank" class="modal__block_link"
                        >Перейти</a
                      >
                    </div>
                  </div>

                  <div class="modal__block_wrapper">
                    <div class="modal__block_ico"></div>
                    <div class="modal__block_info" style="align-items: center">
                      <div class="modal__block_text">Корпоративный портал</div>
                      <a href="#" target="_blank" class="modal__block_link"
                        >Перейти</a
                      >
                    </div>
                  </div>

                  <div class="modal__block_wrapper">
                    <div class="modal__block_ico"></div>
                    <div class="modal__block_info">
                      <div class="modal__block_text">
                        Лента новостей по концерну в Viva Engage
                      </div>
                      <a href="#" target="_blank" class="modal__block_link"
                        >Перейти</a
                      >
                    </div>
                  </div>
                </div>

                <div class="newspapper-modal__block">
                  <div class="modal__block_wrapper">
                    <div class="modal__block_ico"></div>
                    <div class="modal__block_info">
                      <div class="modal__block_text">
                        Больше информации о самой компании можно узнать в
                        специальном одноименном разделе на портале
                      </div>
                      <a href="#" target="_blank" class="modal__block_link"
                        >Перейти</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <p class="newspaper-modal__footer">
                А ещё, каждую неделю выходит Дайджест новостей Hochland. Его ты
                найдешь на своей корпоративной почте от Команды внутренних
                коммуникаций (RU-CorpComm) с адресом
                <a href="mailto:ru-corpcomm@hochland.ru"
                  >ru-corpcomm@hochland.ru</a
                >. Не пропусти.
              </p>
              <div class="modal-btn" @click="compliteStep(4)">Прочитано</div>
            </div>
          </div>
        </div>
      </transition>

      <transition name="fade" mode="in-out">
        <div class="modal-template timeline-modal" v-show="showTimelineSlider">
          <div class="modal-content">
            <div class="timeline-modal__title">
              Смотри, скоро праздник! <br />
              Не забудь поздравить коллег и партнёров
            </div>
            <!-- <div class="tabs-content"> -->
            <TimelineSlider />
            <!-- </div> -->
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import QuizModal from "@/components/QuizModal.vue";
import SixModuleTest from "@/components/SixModuleTest.vue";
import AlbumSlider from "@/components/AlbumSlider.vue";
import SixModuleTimeSlider from "@/components/SixModuleTimeSlider.vue";
import TimelineSlider from "@/components/TimelineSlider.vue";
import { ref, onMounted } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

import { useGameStore } from "@/stores/GameStore.js";
const store = useGameStore();

const stepLoad = ref(false);
const moduleStep = ref(null);
const isInteractive = ref(false);

const showQuiz = ref(false);
const showSliderModal = ref(false);

const showSixModuleTimeSlider = ref(false);
const showPhotoAlbumModal = ref(false);
const showTestModal = ref(false);
const showNewspaperModal = ref(false);
const showTimelineSlider = ref(true);

const pdfFilePath = new URL(
  "@/assets/files/Kodeks_povedeniya_aprel_2022.pdf",
  import.meta.url
);
const albumImagesList = [
  new URL("@/assets/img/modules/module-5/pdf/1.jpg", import.meta.url),
  new URL("@/assets/img/modules/module-5/pdf/2.jpg", import.meta.url),
  new URL("@/assets/img/modules/module-5/pdf/3.jpg", import.meta.url),
  new URL("@/assets/img/modules/module-5/pdf/4.jpg", import.meta.url),
  new URL("@/assets/img/modules/module-5/pdf/5.jpg", import.meta.url),
  new URL("@/assets/img/modules/module-5/pdf/6.jpg", import.meta.url),
  new URL("@/assets/img/modules/module-5/pdf/7.jpg", import.meta.url),
  new URL("@/assets/img/modules/module-5/pdf/8.jpg", import.meta.url),
  new URL("@/assets/img/modules/module-5/pdf/9.jpg", import.meta.url),
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

const openStep = (step) => {
  const currentStep = moduleStep.value;
  if (step == 1 && currentStep >= 1) {
    showPhotoAlbumModal.value = true;
  }

  if (step == 2 && currentStep >= 2) {
    showTestModal.value = true;
  }

  if (step == 3 && currentStep >= 3) {
    showSixModuleTimeSlider.value = true;
  }

  if (step == 4 && currentStep >= 4) {
    showNewspaperModal.value = true;
  }
};

const compliteStep = (step) => {
  if (step == 1) {
    showPhotoAlbumModal.value = false;
    if (moduleStep.value < 2) {
      moduleStep.value = 2;
    }
  }

  if (step == 3) {
    showSixModuleTimeSlider.value = false;
    if (moduleStep.value < 4) {
      moduleStep.value = 4;
    }
  }

  if (step == 4) {
    showNewspaperModal.value = false;
    if (moduleStep.value < 5) {
      moduleStep.value = 5;
    }
  }
};

const compliteModule = () => {
  store.openNewStep(7);
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
.newspaper-modal__footer {
  font-size: fromWidth(24);
  font-weight: 600;
  line-height: 158%;
  margin-bottom: fromWidth(64);
  margin-top: fromWidth(32);
  a {
    color: #0abbef;
    text-decoration: none;
  }
}
.newspapper-modal__content {
  display: flex;
  flex-direction: column;
  gap: fromWidth(32);
}
.step-wrapper__content {
  background-image: url(@/assets/img/modules/module-6/module-6-bg.svg);
}

.modal__block_text {
  color: #000;
  font-size: fromWidth(24);
  font-weight: 600;
  line-height: 158%;
}

.modal__block_link {
  text-decoration: none;
  border-radius: fromWidth(12);
  border: fromWidth(3) solid #000;
  color: #000;
  text-align: center;
  font-size: fromWidth(24);
  font-weight: 700;
  line-height: 100%;
  height: fit-content;
  padding: fromWidth(13) fromWidth(56) fromWidth(13) fromWidth(24);

  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='16' height='22' viewBox='0 0 16 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.0226 9.30909C13.9839 10.243 13.9839 11.757 13.0226 12.6909L6.45852 19.0677C5.49723 20.0016 3.93867 20.0016 2.97738 19.0677C2.01609 18.1339 2.01609 16.6198 2.97738 15.6859L7.80091 11L2.97738 6.3141C2.01609 5.38023 2.01609 3.86614 2.97738 2.93228C3.93867 1.99842 5.49723 1.99842 6.45852 2.93228L13.0226 9.30909Z' fill='%230ABAEE'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.6037 7.71676C16.4654 9.52536 16.4654 12.4746 14.6037 14.2832L8.0396 20.6601C6.20054 22.4467 3.23537 22.4466 1.39629 20.6601C-0.46543 18.8514 -0.46543 15.9022 1.39629 14.0936L4.58072 11L1.39629 7.90643C-0.46543 6.09782 -0.46543 3.14855 1.39629 1.33995C3.23536 -0.446649 6.20054 -0.44665 8.03961 1.33995L14.6037 7.71676ZM2.97738 6.3141C2.01609 5.38023 2.01609 3.86614 2.97738 2.93228C3.93867 1.99842 5.49723 1.99842 6.45852 2.93228L13.0226 9.30909C13.9839 10.243 13.9839 11.757 13.0226 12.6909L6.45852 19.0677C5.49723 20.0016 3.93867 20.0016 2.97738 19.0677C2.01609 18.1339 2.01609 16.6198 2.97738 15.6859L7.80091 11L2.97738 6.3141Z' fill='black'/%3e%3c/svg%3e ");
  background-repeat: no-repeat;
  background-size: fromWidth(16) fromWidth(22);
  background-position: center right fromWidth(24);
}

.newspapper-modal__block {
  display: flex;
  flex-direction: column;
  gap: fromWidth(32);
  border-radius: fromWidth(24);
  border: fromWidth(4) solid #000;
  background: #fff;
  padding: fromWidth(24) fromWidth(40) fromWidth(36) fromWidth(24);
}

.modal__block_ico {
  width: fromWidth(40);
  height: fromWidth(40);
  background-image: url(@/assets/img/modules/module-6/viva-logo.svg);
  background-repeat: no-repeat;
  background-size: contain;
  flex-shrink: 0;
}

.modal__block_wrapper {
  display: flex;
  gap: fromWidth(24);
}
.modal__block_info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: fromWidth(40);
  border-left: 2px solid #ddd;
  gap: fromWidth(40);
}

.content__part {
  z-index: 3;
  pointer-events: none;
  position: absolute;
  background-image: url(@/assets/img/modules/module-6/module-6-bg-segment.svg);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  height: 80%;
  bottom: -1%;
  left: 2%;
  width: 86%;
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
    right: 54%;
    width: 6%;
    height: 20%;
    top: -3%;
    z-index: 4;
    transform: rotate(-60deg);
  }

  &[data-item="2"] {
    right: 55.6%;
    width: 7%;
    height: 20%;
    top: 5%;
    z-index: 4;
    transform: rotate(341deg);
  }

  &[data-item="3"] {
    left: 9%;
    width: 6%;
    height: 18%;
    top: 67%;
    z-index: 4;
    transform: rotate(210deg) scaleY(-1);
  }
}

.interactive-item {
  cursor: pointer;
  transition: opacity 0.2s ease-in-out, filter 0.5s ease-in-out;
  filter: drop-shadow(0px 6px 0px rgba(0, 0, 0, 0));
  position: absolute;
  &.pulse {
    filter: drop-shadow(0px 6px 10px #00c5ff) drop-shadow(0px -6px 10px #00c5ff);
    animation: dropShadowPulse 3s linear infinite 0.4s;
  }

  img {
    width: 100%;
    object-fit: contain;
    height: 100%;
  }

  &[data-item="1"] {
    left: 25.5%;
    width: 12.2%;
    height: 19%;
    bottom: 20%;
    z-index: 5;
  }

  &[data-item="2"] {
    right: 9.7%;
    width: 10%;
    height: 22%;
    top: 14.7%;
  }

  &[data-item="3"] {
    left: 9.5%;
    top: 17.5%;
    width: 20%;
    height: 22%;
  }

  &[data-item="4"] {
    right: 30%;
    width: 19%;
    height: 31%;
    top: 26.5%;
    z-index: 2 !important;
  }

  &[data-item="5"] {
    right: 29%;
    width: 34.5%;
    height: 19%;
    top: 1.5%;
    &.pulse {
      filter: drop-shadow(0px 6px 10px #00c5ff)
        drop-shadow(0px -6px 10px #00c5ff);
      animation: dropShadow 3s linear infinite 0.4s;
    }
  }

  &[data-item="6"] {
    left: 7.5%;
    width: 16%;
    height: 17%;
    top: 64%;
  }
}
.video-block {
  margin-left: 0;
}
</style>
