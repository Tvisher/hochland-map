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
          data-item="1"
          :class="[moduleStep == 1 ? 'pulse' : '']"
          @click="openStep(1)"
        >
          <img src="@/assets/img/modules/module-3/object-1.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          data-item="2"
          :class="[moduleStep == 2 ? 'pulse' : '']"
          @click="openStep(2)"
        >
          <img src="@/assets/img/modules/module-3/object-2.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          data-item="3"
          :class="[moduleStep == 3 ? 'pulse' : '']"
          @click="openStep(3)"
        >
          <img src="@/assets/img/modules/module-3/object-3.svg" alt="" />
        </div>

        <div
          class="arrow-template"
          v-for="step in 3"
          :class="[moduleStep == step ? 'show' : '']"
          :data-item="step"
        >
          <div class="arrow-template_img"></div>
        </div>

        <transition name="fade" mode="in-out">
          <div class="modal-template slider-modal" v-show="showSliderModal">
            <div class="modal-content">
              <!-- <div class="man-modal__close" @click="compliteStep(1)"></div> -->
              <div class="tabs-modal__inner">
                <div class="tabs-content">
                  <swiper
                    class="slider-el"
                    :slides-per-view="1"
                    :space-between="50"
                    :autoHeight="true"
                    @slideChange="onSlideChange"
                    effect="fade"
                    :fadeEffect="{
                      crossFade: true,
                    }"
                    :navigation="{
                      prevEl: '.slider-prev-btn',
                      nextEl: '.slider-next-btn',
                    }"
                    :modules="[Navigation, Pagination, EffectFade]"
                    :pagination="{ clickable: false }"
                    :allowSlideNext="isShowVideoModalNextBtn"
                  >
                    <swiper-slide class="slide-item">
                      <span class="slide-item__title"
                        >Узнай о компании Hochland</span
                      >
                      <div class="slide-item__inner">
                        <div
                          class="video-block"
                          :class="{ showControls: isShowVideoModalNextBtn }"
                        >
                          <vue-plyr
                            @play="console.log('play')"
                            @ended="() => (isShowVideoModalNextBtn = true)"
                            ref="sliderPlayer"
                          >
                            <video
                              controls
                              crossorigin
                              playsinline
                              poster="@/assets/img/poster.jpg"
                            >
                              <source
                                src="@/assets/files/history-video.mp4"
                                type="video/mp4"
                              />
                            </video>
                          </vue-plyr>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide class="slide-item">
                      <span class="slide-item__title"
                        >Смотри, это один из заводов Hochland! Чуть позже мы
                        обязательно пойдем туда, а пока давай узнаем немного
                        истории</span
                      >
                      <div class="slide-item__inner">
                        <div class="factory__wrapper">
                          <div class="factory__image">
                            <img
                              src="@/assets/img/modules/module-3/factory-1.jpg"
                              alt=""
                            />
                          </div>
                          <div class="factory__info">
                            <div class="factory__title">
                              Завод в поселке РАОС
                            </div>
                            <div class="factory__descr">
                              Московская область,<br />
                              Раменский район, п. РАОС, 16
                            </div>
                            <div class="factory__text">
                              В ноябре 2003 года был введен в эксплуатацию в
                              пос. РАОС Московской области. Занимается
                              производством плавленого сыра.
                            </div>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide class="slide-item">
                      <span class="slide-item__title"
                        >Смотри, это один из заводов Hochland! Чуть позже мы
                        обязательно пойдем туда, а пока давай узнаем немного
                        истории</span
                      >
                      <div class="slide-item__inner">
                        <div class="factory__wrapper">
                          <div class="factory__image">
                            <img
                              src="@/assets/img/modules/module-3/factory-2.jpg"
                              alt=""
                            />
                          </div>
                          <div class="factory__info">
                            <div class="factory__title">Завод в Прохоровке</div>
                            <div class="factory__descr">
                              Белгородская область,<br />
                              п. Прохоровка, ул. Мичурина, 48
                            </div>
                            <div class="factory__text">
                              Входит в группу Hochland с 2011 года. Завод
                              занимается производством творожных сыров.
                            </div>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide class="slide-item">
                      <span class="slide-item__title"
                        >Смотри, это один из заводов Hochland! Чуть позже мы
                        обязательно пойдем туда, а пока давай узнаем немного
                        истории</span
                      >
                      <div class="slide-item__inner">
                        <div class="factory__wrapper">
                          <div class="factory__image">
                            <img
                              src="@/assets/img/modules/module-3/factory-3.jpg"
                              alt=""
                            />
                          </div>
                          <div class="factory__info">
                            <div class="factory__title">Завод в Белинском</div>
                            <div class="factory__descr">
                              Пензенская область,<br />
                              г. Белинский, ул. Ленина, 82А
                            </div>
                            <div class="factory__text">
                              Вошел в состав группы в ноябре 2017 года. Здесь
                              производят полутвердые сыры, а также сырье для
                              завода в РАОС
                            </div>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                    <div class="nav-buttons">
                      <div class="slider-prev-btn">Назад</div>
                      <div
                        class="slider-next-btn"
                        :class="{
                          'swiper-button-disabled-custom':
                            !isShowVideoModalNextBtn,
                        }"
                      >
                        Дальше
                      </div>
                    </div>
                  </swiper>
                  <div
                    class="modal-btn slider-modal-end"
                    :class="{
                      'swiper-button-disabled-custom': !sliderWithBtnWiewed,
                    }"
                    @click="compliteStep(1)"
                  >
                    Просмотрено
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade" mode="in-out">
          <div class="modal-template album-modal" v-if="showPhotoAlbumModal">
            <div class="modal-content" style="position: relative">
              <div class="tabs-modal__inner">
                <div class="tabs-content__title">
                  А это наши руководители. Давай познакомимся с ними поближе.
                </div>
                <div class="tabs-content">
                  <div class="album__wrapper">
                    <AlbumSlider
                      :albumImagesList="albumImagesList"
                      :filePath="pdfFilePath"
                      :albumName="'Фотоальбом компании Hochland'"
                      @reachEnd="albumViewed = true"
                    />
                  </div>
                  <button
                    :disabled="!albumViewed"
                    class="modal-btn"
                    @click="compliteStep(2)"
                  >
                    Просмотрено
                  </button>
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
            :step="3"
          >
            <div class="result__image">
              <img
                src="@/assets/img/modules/module-3/modal-result.png"
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
import AlbumSlider from "@/components/AlbumSlider.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, EffectFade } from "swiper/modules";

import { ref, onMounted } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

import { useGameStore } from "@/stores/GameStore.js";
const store = useGameStore();

const stepLoad = ref(false);
const moduleStep = ref(null);
const isInteractive = ref(false);
const isShowVideoModalNextBtn = ref(false);
const sliderWithBtnWiewed = ref(false);
const albumViewed = ref(false);

const showQuiz = ref(false);
const showSliderModal = ref(false);
const showPhotoAlbumModal = ref(false);

const sliderPlayer = ref(null);
const pdfFilePath = new URL("@/assets/files/welcome_book.pdf", import.meta.url);
const albumImagesList = [
  new URL("@/assets/img/modules/module-3/pdf/1.jpg", import.meta.url),
  new URL("@/assets/img/modules/module-3/pdf/2.jpg", import.meta.url),
  new URL("@/assets/img/modules/module-3/pdf/3.jpg", import.meta.url),
  new URL("@/assets/img/modules/module-3/pdf/4.jpg", import.meta.url),
  new URL("@/assets/img/modules/module-3/pdf/5.jpg", import.meta.url),
  new URL("@/assets/img/modules/module-3/pdf/6.jpg", import.meta.url),
  new URL("@/assets/img/modules/module-3/pdf/7.jpg", import.meta.url),
  new URL("@/assets/img/modules/module-3/pdf/8.jpg", import.meta.url),
  new URL("@/assets/img/modules/module-3/pdf/9.jpg", import.meta.url),
  new URL("@/assets/img/modules/module-3/pdf/10.jpg", import.meta.url),
];
const questionsList = [
  {
    id: 0,
    title: "На каком заводе производят творожный сыр?",
    options: [
      {
        id: 0,
        title: "Завод в поселке РАОС",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "Завод в Прохоровке",
        correctAnswer: true,
      },
      {
        id: 2,
        title: "Завод в Белинском",
        correctAnswer: false,
      },
      {
        id: 3,
        title: "Творожный сыр производят на всех трех заводах",
        correctAnswer: false,
      },
    ],
  },
  {
    id: 1,
    title: "Как зовут генерального директора компании?",
    options: [
      {
        id: 0,
        title: "Андрей Голицын",
        correctAnswer: false,
      },

      {
        id: 1,
        title: "Павел Кузьмин",
        correctAnswer: false,
      },
      {
        id: 2,
        title: "Олег Ферапонтов",
        correctAnswer: false,
      },
      {
        id: 3,
        title: "Алексей Прохоров",
        correctAnswer: true,
      },
    ],
  },
];

const pausePlayer = () => {
  sliderPlayer.value.player.pause();
};
const onSlideChange = (slider) => {
  pausePlayer();
  if (slider.isEnd) {
    sliderWithBtnWiewed.value = true;
  }
};

const openStep = (step) => {
  const currentStep = moduleStep.value;
  if (step == 1 && currentStep >= 1) {
    showSliderModal.value = true;
  }

  if (step == 2 && currentStep >= 2) {
    showPhotoAlbumModal.value = true;
  }
  if (step == 3 && currentStep >= 3) {
    showQuiz.value = true;
  }
};

const compliteStep = (step) => {
  if (step == 1) {
    if (!sliderWithBtnWiewed.value) return;
    showSliderModal.value = false;
    pausePlayer();
    if (moduleStep.value < 2) {
      moduleStep.value = 2;
    }
  }

  if (step == 2) {
    showPhotoAlbumModal.value = false;
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
    moduleStep.value = 1;
    stepLoad.value = true;
    isInteractive.value = true;
  }, 800);
});
</script>

<style lang="scss" scoped>
.video-block.showControls :deep(.plyr__controls) {
  display: flex;
}

.swiper-button-disabled-custom {
  opacity: 0.3;
}
.slider-modal-end {
  margin-top: fromWidth(30);
  margin-left: auto;
  margin-right: fromWidth(10);
  padding-top: fromWidth(25);
  padding-bottom: fromWidth(25);
}
.step-wrapper__content {
  background-image: url(@/assets/img/modules/module-3/module-3-bg.svg);
}

.content__part {
  z-index: 6;
  pointer-events: none;
  position: absolute;
  background-image: url(@/assets/img/modules/module-3/module-3-bg-segment.svg);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  width: 73.6%;
}

.arrow-template {
  pointer-events: none;
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
    right: 20.4%;
    width: 34.4%;
    height: 35%;
    top: 1.7%;
    &.pulse {
      animation: none;
    }
  }

  &[data-item="2"] {
    right: 44.7%;
    width: 21%;
    height: 30%;
    top: 22.7%;
    z-index: 5;
  }

  &[data-item="3"] {
    left: 0%;
    bottom: 0%;
    width: 17%;
    height: 22%;
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
.video-block {
  margin-left: 0;
}
</style>
