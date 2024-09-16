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
                  Представь, что тебе нужно позвонить или написать коллеге, с
                  которым ты раньше не пересекался и у тебя нет его контакта.
                  Что делать? Заходи в Outlook и Teams и находи контакт в
                  глобальном списке адресов. Ниже инструкция, как это сделать.
                  Скачивай и обращайся к ней в любой момент.
                </div>
                <a
                  href="../assets/img/modules/module-2/modal-card-image.png"
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
                  Доступ к корпоративному Wi-Fi и общему диску настроены
                  автоматически. Если у тебя возникли проблемы — обратись в
                  Service Desk.
                </div>
                <div class="modal-btn" @click="compliteStep(2)">Прочитано</div>
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade" mode="out-in">
          <div class="modal-template phone-modal" v-show="showPhoneModal">
            <div class="modal-content">
              <!-- <div class="man-modal__close" @click="compliteStep(3)"></div> -->
              <div class="tabs-modal__inner">
                <div class="tabs-content__inner">
                  <div class="tabs-content__title">
                    Если у тебя еще не настроена корпоративная мобильная связь,
                    нет рабочего мобильного или ты не знаешь, как заполнять
                    заявления, приказы, акты, создать заявку для списания
                    неликвидных телефонных аппаратов, — обратись в Service Desk.
                  </div>

                  <div class="tabs-content__title _small">
                    Как оформить заявку на покупку корпоративного смартфона?
                  </div>

                  <ul class="phone-modal__list">
                    <li class="list-item">
                      Перейди на портал ServiceDesk
                      <a
                        href="https://ru-it.hochland.com/ESM.do?type=portal"
                        target="_blank"
                        >https://ru-it.hochland.com/ESM.do?type=portal</a
                      >
                      и авторизуйся в системе.
                    </li>
                    <li class="list-item">
                      В меню в разделе HLRU Purchasing выбери опцию «Закупки
                      РАОС (Лефорт)» и далее — «Закупка смартфона».
                    </li>
                    <li class="list-item">
                      <span>Тебе нужно будет заполнить несколько полей:</span>
                      <p>
                        <b>Группа сотрудника.</b> В выпадающем списке выбери
                        свою категорию (директор, сотрудники, кому нужен доступ
                        к корпоративной почте, руководители F3 и региональные
                        менеджеры и т. д.).
                      </p>
                      <p>
                        <b>Модель телефона.</b> Ознакомься с доступными моделями
                        в каталогах смартфонов «Комус» или МТС, который найдешь
                        справа.
                      </p>
                    </li>
                    <li class="list-item">
                      Лимит на покупку и бонусы рассчитываются автоматически в
                      зависимости от твоей группы сотрудников и срока
                      использования предыдущего телефона (если он был).
                    </li>
                    <li class="list-item">
                      Не забудь ознакомиться с документом «О мобильных
                      устройствах и мобильной связи».
                    </li>
                    <li class="list-item">
                      Когда все поля будут корректно заполнены, нажми кнопку
                      «Добавить заявку». Заявки на закупку смартфонов
                      принимаются до 1 числа каждого месяца, а закупки
                      производятся раз в месяц.
                    </li>
                    <li class="list-item">
                      После отправки заявки на твой почтовый ящик придет
                      сообщение о том, что заявка на закупку получена и
                      обрабатывается.
                    </li>
                  </ul>
                  <div class="modal-btn" @click="compliteStep(3)">
                    Прочитано
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
                <div class="tabs-content__inner">
                  <div class="tabs-content__title">
                    Если у тебя возникли сложности с программами, установками,
                    ИТ-системами — обратись в Service Desk.
                  </div>

                  <div class="tabs-content__title _small">
                    <b>Важно:</b> для подачи стандартных заявок есть три
                    отдельных окошка, тебе просто нужно найти необходимое. Если
                    твоя проблема более индивидуальная, оставь заявку в
                    свободной форме.
                  </div>
                  <div class="tabs-content__title _small">
                    <b>Какие вопросы можно решить через Service Desk:</b>
                  </div>

                  <ul class="phone-modal__list">
                    <li class="list-item">Не работает программа</li>
                    <li class="list-item">Завис 1С</li>
                    <li class="list-item">Нужно заказать оборудование</li>
                    <li class="list-item">Ошибка с программным обеспечением</li>
                    <li class="list-item">Запрос на оборудования</li>
                    <li class="list-item">Предоставление доступа</li>
                    <li class="list-item">
                      Прием, увольнение, перевод сотрудника
                    </li>
                    <li class="list-item">Прочие ошибки и услуги</li>
                  </ul>

                  <div class="tabs-content__title _small">
                    <p>
                      Остались вопросы? Все ответы можно найти на
                      интранет-портале. Если вопрос все же не решен,
                    </p>
                    <p>
                      пиши в поддержку:
                      <a
                        target="_blank"
                        href="mailto:RU-helpdeskIT@hochland.com"
                        >RU-helpdeskIT@hochland.com</a
                      >,
                    </p>
                    <p>
                      или звони по телефону:
                      <a href="tel:+74957770207" target="_blank"
                        >+7 (495) 777-02-07, доб. 1310.</a
                      >
                    </p>
                  </div>
                  <div class="modal-btn" @click="compliteStep(4)">
                    Прочитано
                  </div>
                </div>
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
                rel="preload"
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
    title:
      "Что ты будешь делать, если нужно связаться с коллегой, но у тебя нет его контакта? ",
    options: [
      {
        id: 0,
        title: "Будешь ходить по офису и искать его",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "Подождешь его на проходной (однажды он точно пойдет домой)",
        correctAnswer: false,
      },
      {
        id: 2,
        title: "Найдешь контакт в глобальном списке адресов Outlook и Teams",
        correctAnswer: true,
      },
      {
        id: 3,
        title: "Пойдешь просить о помощи руководителя",
        correctAnswer: false,
      },
    ],
  },
  {
    id: 1,
    title:
      "Куда нужно обращаться при сложностях с программами, установками и ИТ-системами?",
    options: [
      {
        id: 0,
        title: "В Service Desk",
        correctAnswer: true,
      },
      {
        id: 1,
        title: "К своему руководителю",
        correctAnswer: false,
      },

      {
        id: 2,
        title: "В HR-отдел",
        correctAnswer: false,
      },

      {
        id: 3,
        title: "К любому из коллег",
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
