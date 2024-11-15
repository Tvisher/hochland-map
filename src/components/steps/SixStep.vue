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
          @click="openStep(5)"
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
          :class="[moduleStep == 6 ? 'pulse' : '']"
          data-item="4"
          @click="openStep(6)"
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
          v-for="step in [1, 2, 3, 4, 5]"
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
                    @reachEnd="albumViewed = true"
                  />
                </div>
                <button
                  class="modal-btn"
                  :disabled="!albumViewed"
                  @click="compliteStep(1)"
                >
                  Просмотрено
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <transition name="fade" mode="out-in">
        <div class="modal-template file-modal tv-modal" v-show="showTestModal">
          <div class="modal-content">
            <div class="file-modal__inner" v-if="!showTestView">
              <div class="tv-modal__preview">
                <div class="tv-modal__image">
                  <img
                    src="@/assets/img/modules/module-6/tv-modal-preview.svg"
                    alt=""
                  />
                </div>
                <div class="file-modal__title small-marg">
                  Пока администратор проверяет анкету, у тебя есть время изучить
                  семь принципов лидерства в компании и закрепить знания
                  викториной. Эти правила помогут тебе вести за собой людей,
                  никогда не сдаваться и быть уверенным в своих силах.
                </div>
                <div class="file-modal__title">
                  Сохрани их и обязательно применяй в работе.
                </div>
                <div class="file-modal-btn-wrapper">
                  <a
                    href="@/assets/files/7_принципов_лидерства.pdf"
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
                  <div class="test-load-btn" @click="showTestView = true">
                    <span>Перейти к викторине</span>
                    <div class="ico">
                      <svg
                        width="22"
                        height="30"
                        viewBox="0 0 22 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.9061 12.6942C19.2279 13.9677 19.2279 16.0323 17.9061 17.3058L8.88046 26.0014C7.55869 27.2749 5.41567 27.2749 4.09389 26.0014C2.77212 24.728 2.77212 22.6633 4.09389 21.3899L10.7262 15L4.09389 8.61013C2.77212 7.33668 2.77212 5.27201 4.09389 3.99856C5.41567 2.72512 7.55869 2.72512 8.88046 3.99857L17.9061 12.6942Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M20.0801 10.5229C22.64 12.9891 22.64 17.0109 20.0801 19.4771L11.0545 28.1728C8.52573 30.6091 4.44863 30.6091 1.9199 28.1728C-0.639968 25.7065 -0.639968 21.6848 1.9199 19.2185L6.29849 15L1.9199 10.7815C-0.639968 8.31522 -0.639968 4.29348 1.9199 1.8272C4.44862 -0.609066 8.52574 -0.609068 11.0545 1.8272L20.0801 10.5229ZM4.09389 8.61013C2.77212 7.33668 2.77212 5.27201 4.09389 3.99856C5.41567 2.72512 7.55869 2.72512 8.88046 3.99857L17.9061 12.6942C19.2279 13.9677 19.2279 16.0323 17.9061 17.3058L8.88046 26.0014C7.55869 27.2749 5.41567 27.2749 4.09389 26.0014C2.77212 24.728 2.77212 22.6633 4.09389 21.3899L10.7262 15L4.09389 8.61013Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="file-modal__inner" v-else>
              <SixModuleTest @testComplite="testComplite" />
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
            <div
              class="man-modal__close"
              @click="compliteStep(3)"
              v-if="timesliderViewed"
            ></div>
            <div class="tabs-modal__inner">
              <div class="tabs-content">
                <SixModuleTimeSlider @reachEnd="timesliderViewed = true" />
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
                        Если ты работаешь в Московском офисе, то присоединяйся к
                        этой группе в Viva
                      </div>
                      <a
                        href="https://engage.cloud.microsoft/main/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiI4MTI4NjA1Mzg4OCJ9/all"
                        target="_blank"
                        class="modal__block_link"
                        >Перейти</a
                      >
                    </div>
                  </div>
                  <div class="modal__block_wrapper">
                    <div class="modal__block_ico _empty"></div>
                    <div class="modal__block_info">
                      <div class="modal__block_text">
                        Корпоративная социальная сеть в Viva Engage — группа
                        «Новости Hochland в России»: добавиться туда может
                        каждый сотрудник
                      </div>
                      <a
                        href="https://engage.cloud.microsoft/main/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiI2NzQ0MTQxODI0MCJ9/all"
                        target="_blank"
                        class="modal__block_link"
                        >Перейти</a
                      >
                    </div>
                  </div>

                  <div class="modal__block_wrapper">
                    <div class="modal__block_ico _empty"></div>
                    <div class="modal__block_info">
                      <div class="modal__block_text">
                        Международные новости компании в Viva Engage
                      </div>
                      <a
                        href="https://engage.cloud.microsoft/main/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiIyNDgzNzY1MjQ4MCJ9/all"
                        target="_blank"
                        class="modal__block_link"
                        >Перейти</a
                      >
                    </div>
                  </div>
                </div>

                <div class="newspapper-modal__block">
                  <div class="modal__block_wrapper">
                    <div class="modal__block_ico pc-ico"></div>
                    <div class="modal__block_info" style="align-items: center">
                      <div class="modal__block_text">Онлайн-журнал:</div>
                      <a
                        href="https://hochland.sharepoint.com/sites/companynewsru1"
                        target="_blank"
                        class="modal__block_link"
                        >Перейти</a
                      >
                    </div>
                  </div>
                  <div class="modal__block_wrapper">
                    <div class="modal__block_ico _empty"></div>
                    <div class="modal__block_info" style="align-items: center">
                      <div class="modal__block_text">Корпоративный портал</div>
                      <a
                        href="https://hochland.sharepoint.com/sites/portal-ru "
                        target="_blank"
                        class="modal__block_link"
                        >Перейти</a
                      >
                    </div>
                  </div>
                  <div class="modal__block_wrapper">
                    <div class="modal__block_ico _empty"></div>
                    <div class="modal__block_info">
                      <div class="modal__block_text">
                        Больше информации о самой компании можно узнать в
                        специальном одноименном разделе на портале
                      </div>
                      <a
                        href="https://hochland.sharepoint.com/sites/companyinfo/SitePages/Employee-onboarding-team-home.aspx "
                        target="_blank"
                        class="modal__block_link"
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
                >. <br />Не пропусти.
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
            <div class="tabs-content">
              <TimelineSlider @reachEnd="() => (timelineSliderViewed = true)" />
            </div>
            <button
              class="modal-btn"
              :disabled="!timelineSliderViewed"
              @click="compliteStep(5)"
            >
              Прочитано
            </button>
          </div>
        </div>
      </transition>

      <transition name="fade" mode="out-in">
        <QuizModal
          v-if="showQuiz"
          @modalClose="showQuiz = false"
          :questionsList="questionsList"
          :step="6"
        >
          <div class="result__image">
            <img
              src="@/assets/img/modules/module-6/modal-result.png"
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
const showSixModuleTimeSlider = ref(false);
const showPhotoAlbumModal = ref(false);
const showTestModal = ref(false);
const showNewspaperModal = ref(false);
const showTimelineSlider = ref(false);
const albumViewed = ref(false);
const timesliderViewed = ref(false);
const showTestView = ref(false);
const timelineSliderViewed = ref(false);
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
    title: "Сколько дней дается на заполнение отчета после командировки?",
    options: [
      {
        id: 0,
        title: "2",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "5",
        correctAnswer: false,
      },
      {
        id: 2,
        title: "7",
        correctAnswer: true,
      },
      {
        id: 3,
        title: "10",
        correctAnswer: false,
      },
    ],
  },
  {
    id: 1,
    title: "Какая основа для работы в коллективе? ",
    options: [
      {
        id: 0,
        title: "Быть в курсе всех новостей.",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "Знать каждого члена команды.",
        correctAnswer: false,
      },

      {
        id: 2,
        title: "Доверие и взаимное уважение.",
        correctAnswer: true,
      },

      {
        id: 3,
        title: "Желание быть первым.",
        correctAnswer: false,
      },
    ],
  },
  {
    id: 2,
    title:
      "Какое из этих высказываний противоречит основным принципам управления персоналом и работы в коллективе?",
    options: [
      {
        id: 0,
        title: "«Мы призываем к постоянному совершенствованию и поощряем его».",
        correctAnswer: false,
      },
      {
        id: 1,
        title:
          "«Мы призываем к полной ясности в речи и поощряем обмен информацией».",
        correctAnswer: false,
      },

      {
        id: 2,
        title:
          "«Мы призываем к инициативности и поощряем установку: «Я сделаю это! Я возьму это в свои руки!»",
        correctAnswer: false,
      },

      {
        id: 3,
        title:
          "«Мы призываем избегать любых конфликтных ситуаций, так как они мешают развитию»",
        correctAnswer: true,
      },
    ],
  },

  {
    id: 3,
    title: "Где можно узнать все свежие новости о жизни компании? ",
    options: [
      {
        id: 0,
        title: "В столовой за обедом.",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "На корпоративном интранет-портале.",
        correctAnswer: true,
      },

      {
        id: 2,
        title: "В курилке.",
        correctAnswer: false,
      },

      {
        id: 3,
        title: "В автобусе по дороге на работу.",
        correctAnswer: false,
      },
    ],
  },
];

const testComplite = () => {
  if (moduleStep.value < 3) {
    moduleStep.value = 3;
    showTestModal.value = false;
    setTimeout(() => {
      showTestView.value = false;
    }, 1000);
  }
};

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

  if (step == 5 && currentStep >= 5) {
    showTimelineSlider.value = true;
  }

  if (step == 6 && currentStep >= 6) {
    showQuiz.value = true;
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

  if (step == 5) {
    showTimelineSlider.value = false;
    if (moduleStep.value < 6) {
      moduleStep.value = 6;
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
.test-load-btn {
  text-decoration: none;
  cursor: pointer;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: fromWidth(24);
  color: #fff;
  text-align: center;
  font-family: "Open Sans";
  font-size: fromWidth(32);
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  display: flex;
  padding: fromWidth(28) fromWidth(20);
  border-radius: fromWidth(20);
  border: fromWidth(4) solid #000;
  background: #0abbef;
  box-shadow: fromWidth(8) fromWidth(8) 0px 0px rgba(0, 0, 0, 0.25);

  .ico {
    width: fromWidth(22);
    height: fromWidth(30);

    svg {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

.file-modal-btn-wrapper {
  display: flex;
  margin-bottom: fromWidth(48);
  gap: fromWidth(24);
}
.tv-modal__image {
  width: 100%;
  margin-bottom: fromWidth(48);
  img {
    width: 100%;
  }
}

.tv-modal__preview {
  .file-modal__title {
    margin-bottom: fromWidth(48);
    &.small-marg {
      margin-bottom: fromWidth(20);
    }
  }
}
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
  &.pc-ico {
    background-image: url(@/assets/img/modules/module-6/pc-logo.svg);
  }
  &._empty {
    background-image: none;
  }
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
    left: 17%;
    width: 6%;
    height: 20%;
    top: 41%;
    z-index: 4;
    transform: rotate(-60deg);
  }

  &[data-item="2"] {
    right: 61.6%;
    width: 7%;
    height: 20%;
    top: 41%;
    z-index: 4;
    transform: rotate(138deg) scale(-1, 1);
  }

  &[data-item="3"] {
    left: 26%;
    width: 6%;
    height: 18%;
    top: 1%;
    z-index: 4;
    transform: rotate(267deg);
  }

  &[data-item="4"] {
    left: 6%;
    width: 6%;
    height: 18%;
    top: 40%;
    z-index: 4;
    transform: rotate(325deg);
  }

  &[data-item="5"] {
    left: 87%;
    width: 6%;
    height: 18%;
    top: 43%;
    z-index: 4;
    transform: rotate(167deg) scale(-1, 1);
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
