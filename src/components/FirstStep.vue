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
            @click="setNextStep(2)"
            v-if="moduleStep < 7"
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
          :class="[moduleStep == 10 ? 'pulse' : '']"
          @click="setShowQuiz"
        >
          <img src="@/assets/img/modules/module-1/object-2.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          data-item="4"
          :class="[moduleStep == 7 ? 'pulse' : '']"
          @click="isShowTabsModal = moduleStep >= 7 ? true : false"
        >
          <img src="@/assets/img/modules/module-1/object-3.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          data-item="5"
          :class="[moduleStep == 8 ? 'pulse' : '']"
          @click="isShowVideoModal = moduleStep >= 8 ? true : false"
        >
          <img src="@/assets/img/modules/module-1/object-4.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 9 ? 'pulse' : '']"
          data-item="6"
          @click="showWardrobe = moduleStep >= 9 ? true : false"
        >
          <img src="@/assets/img/modules/module-1/object-5.svg" alt="" />
        </div>

        <div
          class="arrow-template"
          v-for="step in [1, 7, 8, 9, 10]"
          :class="[moduleStep == step ? 'show' : '']"
          :data-item="step"
        >
          <div class="arrow-template_img"></div>
        </div>

        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="1" v-if="moduleStep == 2">
            <img
              src="@/assets/img/modules/module-1/dialog-1.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span>
                Привет, мой дорогой друг! Я так рад, что мы теперь будем
                работать вместе. Ты уже собрал вещи? Тебя ждет увлекательное
                путешествие к сыроварне Hochland.
              </span>
              <div class="modal-btn" @click="moduleStep = 3">Дальше</div>
            </div>
          </div>
        </transition>

        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="2" v-if="moduleStep == 3">
            <img
              src="@/assets/img/modules/module-1/dialog-2.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span> Привет! Нет, еще не успел. А что нужно делать? </span>
              <div class="modal-btn" @click="moduleStep = 4">Дальше</div>
            </div>
          </div>
        </transition>

        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="3" v-if="moduleStep == 4">
            <img
              src="@/assets/img/modules/module-1/dialog-3.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span>
                Следуй инструкции — выбирай светящиеся предметы, и они
                подскажут, что нужно делать.
              </span>
              <div class="modal-btn" @click="moduleStep = 5">Дальше</div>
            </div>
          </div>
        </transition>

        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="2" v-if="moduleStep == 5">
            <img
              src="@/assets/img/modules/module-1/dialog-2.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span> Хорошо, спасибо. А ты поедешь со мной? </span>
              <div class="modal-btn" @click="moduleStep = 6">Дальше</div>
            </div>
          </div>
        </transition>

        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="1" v-if="moduleStep == 6">
            <img
              src="@/assets/img/modules/module-1/dialog-1.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span>
                Нет, я буду ждать тебя там, мой рейс отправляется раньше. Но не
                переживай, ты не останешься один. Тебе всегда помогут. Мне нужно
                бежать. До встречи на сыроварне!
              </span>
              <div class="modal-btn" @click="moduleStep = 7">Дальше</div>
            </div>
          </div>
        </transition>

        <transition name="fade" mode="out-in">
          <div
            class="modal-template tabs-modal"
            v-if="isShowTabsModal"
            ref="tabsModal"
          >
            <div class="modal-content">
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
                  <div class="tabs-content__inner" v-if="activeTab === 0">
                    <div class="tabs-content__title">
                      Настройка оргтехники проходит в первый рабочий день на
                      встрече с инженером по информационным технологиям. Если
                      техника еще не готова, то:
                    </div>
                    <ul class="tabs-content__list">
                      <li class="list-item">
                        <div class="list-item__title">Вариант 1:</div>
                        <div class="list-item__content">
                          <p>
                            Создай запрос в
                            <a
                              href="https://ru-it.hochland.com/ESM.do?type=portal"
                              target="_blank"
                              >ServiceDesk</a
                            >
                            — это основной канал обращения. Приложение можно
                            найти на домашней странице Портала России —<a
                              href="https://hochland.sharepoint.com/sites/portal-ru"
                              target="_blank"
                              >https://hochland.sharepoint.com/sites/portal-ru</a
                            >.
                          </p>
                        </div>
                      </li>

                      <li class="list-item">
                        <div class="list-item__title">Вариант 2:</div>
                        <div class="list-item__content">
                          <p>
                            Напиши письмо на электронный адрес
                            <a
                              href="mailto:ru-helpdeskit@hochland.com"
                              target="_blank"
                              >ru-helpdeskit@hochland.com</a
                            >. Для удобства адрес электронной почты Service Desk
                            выведен на рабочий стол твоего компьютера.
                          </p>
                        </div>
                      </li>

                      <li class="list-item">
                        <div class="list-item__title">Вариант 3:</div>
                        <div class="list-item__content">
                          <p>Позвони по круглосуточному номеру телефона:</p>
                          <div class="list-item__border-block">
                            <div class="border-block__row">
                              <div class="border-block__name">
                                С внутренних телефонов компании: &nbsp;
                              </div>
                              <a
                                href="tel:1310"
                                target="_blank"
                                class="border-block__value"
                                >1310</a
                              >
                            </div>
                            <div class="border-block__row">
                              <div class="border-block__name">
                                C мобильного телефона: &nbsp;
                              </div>
                              <a
                                href="tel:+74957770905"
                                target="_blank"
                                class="border-block__value"
                                >+7 (495) 777-09 05, доб. 1310</a
                              >
                            </div>
                          </div>
                          <p>
                            Для удобства номер телефона Service Desk выведен на
                            твой рабочий стол компьютера. Там же расположена
                            информация по номеру твоего компьютера и логину для
                            предоставления дополнительной информации при
                            обращении в поддержку.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div class="tabs-content__inner" v-if="activeTab === 1">
                    <div class="tabs-content__title">Настройка принтера</div>
                    <div class="tabs-content__title">Lefort, Москва</div>
                    <div class="tabs-content__title _small">
                      Чтобы установить принтер, тебе нужно быть подключенным к
                      Wi-Fi офиса.
                    </div>
                    <ol class="ol-list">
                      <li><span>1. Открой проводник (любую папку).</span></li>
                      <li>
                        <span>
                          2. В адресной строке введи IP-адрес принт-сервера
                          \\10.10.4.30.
                        </span>
                        <img
                          src="@/assets/img/modules/module-1/tabs-image-1.jpg"
                          alt=""
                        />
                      </li>
                      <li>
                        <span
                          >3. Введи логин и пароль, поставь галочку «Запомнить
                          учётные данные».
                        </span>
                        <div class="pass-content">
                          <p>Логин: SPACE1\Print_hochland</p>
                          <p>Пароль: YYrVrSuS22</p>
                        </div>
                        <img
                          src="@/assets/img/modules/module-1/tabs-image-2.jpg"
                          alt=""
                        />
                      </li>
                      <li>
                        <span
                          >4. Выбери необходимый принтер и установи на свой
                          компьютер:</span
                        >
                        <div class="pass-content">
                          <p>⦁ HLRUMOP007 — у переговорной Grunlander;</p>
                          <p>⦁ HLRUMOP008 — у переговорной Almette.</p>
                        </div>
                        <img
                          src="@/assets/img/modules/module-1/tabs-image-3.jpg"
                          alt=""
                        />
                      </li>
                    </ol>
                    <div class="tabs-content__title _no-margin">
                      Остальные локации
                    </div>
                    <div class="list-item__content">
                      <p>
                        Тебя сориентирует ИТ-специалист при приеме на работу и
                        выдаче ноутбука. Принтер подключается автоматически.
                      </p>
                    </div>
                  </div>

                  <div class="tabs-content__inner" v-if="activeTab === 2">
                    <div class="tabs-content__title">
                      Чтобы получить канцтовары обратись к секретарю:
                    </div>
                    <div class="list-item__border-block _three-tab">
                      <div class="border-block__line">
                        <div class="border-block__coll">Lefort:</div>
                        <div class="border-block__coll">
                          Эллина Ковальская
                          <a
                            href="mailto:reception.lefort@hochland.com"
                            target="_blank"
                            >reception.lefort@hochland.com</a
                          ><br />
                          <a href="tel: +7 (985) 428-63-74" target="_blank">
                            +7 (985) 428-63-74</a
                          >
                          (с 9:00 до 18:00)
                        </div>
                      </div>
                      <div class="border-block__line">
                        <div class="border-block__coll">РАОС:</div>
                        <div class="border-block__coll">
                          Ольга Глубокова
                          <a
                            href="mailto:reception.raos@hochland.com"
                            target="_blank"
                            >reception.raos@hochland.com</a
                          ><br />
                          <a href="tel:+7 (495) 777-09-05-1100" target="_blank"
                            >+7 (495) 777-09-05-1100</a
                          >
                        </div>
                      </div>
                      <div class="border-block__line">
                        <div class="border-block__coll">Прохоровка:</div>
                        <div class="border-block__coll">
                          Екатерина Фесенко
                          <a
                            href="mailto:ekaterina.fesenko@hochland.com"
                            target="_blank"
                            >ekaterina.fesenko@hochland.com</a
                          ><br />
                          <a
                            href="tel:+
                          (47242) 23570-2102-2256"
                            target="_blank"
                            >+ (47242) 23570-2102-2256</a
                          >
                        </div>
                      </div>
                      <div class="border-block__line">
                        <div class="border-block__coll">Белинский:</div>
                        <div class="border-block__coll">
                          Анна Андрюшкина
                          <a
                            href="mailto:anna.andryushkina@hochland.ru"
                            target="_blank"
                            >anna.andryushkina@hochland.ru</a
                          >
                          <a href="tel:+7(841)532-08-00" target="_blank"
                            >+7 (841) 532-08-00, доб. 3100</a
                          >
                        </div>
                      </div>
                    </div>
                    <div class="list-item__content">
                      <p>
                        Всю актуальную информацию о площадке и контакты
                        секретаря можно найти на портале в разделе “О компании”:
                        <a
                          href="https://hochland.sharepoint.com/sites/companyinfo/SitePages/Employee-onboarding-team-home.aspx?OR=Teams-HL&CT=1708436758204"
                          target="_blank"
                          >https://hochland.sharepoint.com/sites/companyinfo/SitePages/Employee-onboarding-team-home.aspx?OR=Teams-HL&CT=1708436758204</a
                        >
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="modal-btn"
                  v-if="!isShowAlTabs"
                  @click="compliteTab"
                >
                  Прочитано
                </div>
                <div
                  v-else
                  class="modal-btn"
                  :class="[!isShowAlTabs ? 'pointer-none' : '']"
                  @click="setNextStep(8)"
                >
                  Далее
                </div>
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade" mode="out-in">
          <div class="modal-template video-modal" v-if="isShowVideoModal">
            <div class="modal-content">
              <div class="video-block">
                <vue-plyr @play="() => (isShowVideoModalNextBtn = true)">
                  <video
                    crossorigin
                    playsinline
                    poster="@/assets/img/poster.jpg"
                  >
                    <source
                      src="@/assets/files/video-ex.mp4"
                      type="video/mp4"
                    />
                  </video>
                </vue-plyr>
              </div>
              <div
                class="modal-btn"
                v-if="isShowVideoModalNextBtn"
                @click="setNextStep(9)"
              >
                Просмотрено
              </div>
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
const isShowTabsModal = ref(false);
const tabsModal = ref(null);

const isShowVideoModal = ref(false);
const isShowVideoModalNextBtn = ref(false);
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
  return featuredTabs.value.length == tabsList.length + 1;
});

const tabsList = [
  {
    tabName: "Лист 1",
  },
  {
    tabName: "Лист 2",
  },
  {
    tabName: "Лист 1",
  },
];

const questionsList = [
  {
    id: 0,
    title: "К кому нужно обратиться, чтобы получить канцтовары?",
    options: [
      {
        id: 0,
        title: "К директору компании",
        message: "Ты ошибся. Подумай еще и повтори попытку.",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "К охраннику",
        message: "Ты ошибся. Подумай еще и повтори попытку.",
        correctAnswer: false,
      },

      {
        id: 2,
        title: "К секретарю",
        message: "Молодец! Ты ответил правильно",
        correctAnswer: true,
      },

      {
        id: 3,
        title: "К любому из коллег",
        message: "Ты ошибся. Подумай еще и повтори попытку.",
        correctAnswer: false,
      },
    ],
  },
  {
    id: 1,
    title: "Что нужно сделать перед посещением завода? ",
    options: [
      {
        id: 0,
        title: "Надеть очень яркие вещи, чтобы привлекать внимание",
        message: "Ты ошибся. Подумай еще и повтори попытку.",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "Снять все ювелирные украшения, часы, пирсинг",
        message: "Ты ошибся. Подумай еще и повтори попытку.",
        correctAnswer: false,
      },

      {
        id: 2,
        title: "Сделать короткую стрижку",
        message: "Молодец! Ты ответил правильно",
        correctAnswer: true,
      },

      {
        id: 3,
        title: "Трижды постирать одежду",
        message: "Ты ошибся. Подумай еще и повтори попытку.",
        correctAnswer: false,
      },
    ],
  },
];

const setShowQuiz = () => {
  if (moduleStep.value == 10) {
    showQuiz.value = true;
  }
};

const setNextStep = (step) => {
  console.log(step);
  if (step == 2) {
    showMessageModal.value = true;
  }

  if (step == 8) {
    isShowTabsModal.value = false;
  }

  if (step == 9) {
    isShowVideoModal.value = false;
  }

  moduleStep.value = moduleStep.value < step ? step : moduleStep.value;
};

const showCurrentTab = (ind) => {
  if (featuredTabs.value.includes(ind)) {
    // featuredTabs.value.push(ind);
    activeTab.value = ind;
  }
  tabsModal.value.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
const compliteTab = () => {
  if (!featuredTabs.value.includes(activeTab.value + 1)) {
    featuredTabs.value.push(activeTab.value + 1);
  }
  if (activeTab.value == 2) {
    return;
  }
  activeTab.value += 1;
  tabsModal.value.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const closeWardrobe = (isComplite) => {
  if (isComplite) {
    moduleStep.value = 10;
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
  z-index: 4;
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
    transform: rotate(313deg);
  }

  &[data-item="7"] {
    right: 31.6%;
    width: 7%;
    height: 20%;
    top: 11%;
    transform: rotate(270deg);
  }

  &[data-item="8"] {
    right: 33%;
    width: 7%;
    height: 20%;
    top: 19%;
    transform: rotate(359deg);
  }

  &[data-item="9"] {
    left: 28%;
    width: 8%;
    height: 25%;
    top: 28%;
    z-index: 6;
    transform: rotate(268deg) scaleY(-1);
  }

  &[data-item="10"] {
    right: 16%;
    width: 8%;
    height: 25%;
    top: 37%;
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
