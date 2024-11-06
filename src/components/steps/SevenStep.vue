<template>
  <div
    class="step-wrapper"
    :class="{ 'no-interactive': !isInteractive, 'step-load': stepLoad }"
  >
    <div class="step-wrapper__block">
      <div
        class="step-wrapper__content"
        :class="{ hideBg: moduleStep >= 10 }"
        :data-step="typeOfBg"
      >
        <div
          class="interactive-item"
          :class="[moduleStep == 1 ? 'pulse' : '']"
          v-if="moduleStep < 9"
          data-item="1"
          @click="openStep(2)"
        >
          <img src="@/assets/img/modules/module-7/object-1.svg" alt="" />
        </div>

        <div
          class="arrow-template"
          v-for="step in [4, 5, 20]"
          :class="[moduleStep == step ? 'show' : '']"
          :data-item="step"
        >
          <div class="arrow-template_img"></div>
        </div>

        <!-- data-modal-dialog="23" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="23" v-if="moduleStep == 2">
            <img
              src="@/assets/img/modules/module-7/dialog-1.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span>
                Молодой человек, здравствуй. Я услышал, как ты только что
                говорил с кем-то по телефону о том, что впервые приехал в
                командировку на завод и переживаешь по этому поводу. Ты
                работаешь в Hochland?
              </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 3">
                Дальше
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="24" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="24" v-if="moduleStep == 3">
            <img
              src="@/assets/img/modules/module-7/dialog-2.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span> Да, а что? </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 4">
                Дальше
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="25" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="25" v-if="moduleStep == 4">
            <img
              src="@/assets/img/modules/module-7/dialog-1.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span>
                Прости, что случайно подслушал твой разговор. Просто я работаю
                там много лет и рад познакомиться с коллегой. Думаю, что я мог
                бы быть тебе полезным. Меня зовут Владимир, а тебя?
              </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 5">
                Дальше
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="26" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="26" v-if="moduleStep == 5">
            <img
              src="@/assets/img/modules/module-7/dialog-3.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span>
                Меня зовут Виктор. Я очень рад, что мы познакомились! А что у
                тебя с рукой?
              </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 6">
                Дальше
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="27" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="27" v-if="moduleStep == 6">
            <img
              src="@/assets/img/modules/module-7/dialog-4.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span>
                Перелом. На прошлой неделе я был в отпуске и катался на лыжах.
                Меня немного занесло, и я упал на руку. И вот пришлось уйти на
                больничный.
              </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 7">
                Дальше
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="28" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="28" v-if="moduleStep == 7">
            <img
              src="@/assets/img/modules/module-7/dialog-5.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span> А в компании оплачивают больничный? </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 8">
                Дальше
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="29" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="29" v-if="moduleStep == 8">
            <img
              src="@/assets/img/modules/module-7/dialog-6.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span>
                Конечно! Стоимость каждого больничного дня рассчитывается по
                специальной схеме: один день больничного = доходу за предыдущие
                2 года / 730 х % за трудовой стаж (60% — менее 5 лет, 80% — от 5
                до 8 лет, 100% — более 8 лет). Дополнительно компания
                доплачивает еще до 50% оклада (при стаже работы в компании от 3
                месяцев до 1 года) или 75% оклада (при стаже больше 1 года) за
                период болезни. В исключительных случаях по решению руководства
                может быть доплата до 100%.
              </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 9">
                Дальше
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="30" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="30" v-if="moduleStep == 9">
            <img
              src="@/assets/img/modules/module-7/dialog-2.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span>А когда происходит выплата?</span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 10">
                Дальше
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="31" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="31" v-if="moduleStep == 10">
            <img
              src="@/assets/img/modules/module-7/dialog-7.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span
                >Первые три дня и доплату по больничному работодатель оплачивает
                в ближайшую пятницу после закрытия больничного. Остальную сумму
                выплачивает Социальный фонд России в течение 10 рабочих дней с
                даты получения больничного от работодателя.</span
              >
              <div class="modal-btn dialog-btn" @click="moduleStep = 11">
                Дальше
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="32" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="32" v-if="moduleStep == 11">
            <img
              src="@/assets/img/modules/module-7/dialog-2.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span>Звучит сложно… А ДМС в компании есть?</span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 12">
                Дальше
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="33" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="33" v-if="moduleStep == 12">
            <img
              src="@/assets/img/modules/module-7/dialog-9.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span
                >Обязательно! После прохождения испытательного срока тебе
                подробнее расскажут об этой программе. Причем ДМС можно получить
                не только на себя, но и на родственников первой линии: родители,
                супруги, дети. Меня очень это выручило неделю назад. Во-первых,
                у меня была оформлена страховка на путешествие, а во-вторых, я
                смог получить быстро и качественно все медицинские услуги. У ДМС
                в целом очень много плюсов!</span
              >
              <div class="modal-btn dialog-btn" @click="moduleStep = 13">
                Дальше
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="34" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="34" v-if="moduleStep == 13">
            <img
              src="@/assets/img/modules/module-7/dialog-10.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span
                >Ух ты! Мне нравится, что компания так заботится о своих
                сотрудниках. А какие ещё есть бонусы?</span
              >
              <div class="modal-btn dialog-btn" @click="moduleStep = 14">
                Дальше
              </div>
            </div>
          </div>
        </transition>
        <!-- data-modal-dialog="35" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="35" v-if="moduleStep == 14">
            <img
              src="@/assets/img/modules/module-7/dialog-11.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span
                >Их много. Например, есть программа дополнительного пенсионного
                страхования для сотрудников. Её суть состоит в том, что компания
                открывает в негосударственном пенсионном фонде корпоративный
                именной счет и ежемесячно делает туда перевод в размере 3% от
                твоей зарплаты. Но не менее чем 1 000 и не более чем 10 000
                рублей.</span
              >
              <div class="modal-btn dialog-btn" @click="moduleStep = 15">
                Дальше
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="36" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="36" v-if="moduleStep == 15">
            <img
              src="@/assets/img/modules/module-7/dialog-2.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span>А я смогу в ней участвовать?</span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 16">
                Дальше
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="37" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="37" v-if="moduleStep == 16">
            <img
              src="@/assets/img/modules/module-7/dialog-12.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span
                >Участвовать в программе может каждый сотрудник после
                прохождения испытательного срока. А ещё ты сам можешь
                дополнительно делать ежемесячные переводы на этот счет и
                увеличивать свою будущую пенсию.</span
              >
              <div class="modal-btn dialog-btn" @click="moduleStep = 17">
                Дальше
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="38" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="38" v-if="moduleStep == 17">
            <img
              src="@/assets/img/modules/module-7/dialog-10.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span
                >Ого! Я даже не знал, что такое бывает! Как хорошо, что я
                встретил вас и вы так много мне рассказали. Спасибо!</span
              >
              <div class="modal-btn dialog-btn" @click="moduleStep = 18">
                Дальше
              </div>
            </div>
          </div>
        </transition>

        <!-- AlbumSlider -->
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
                  <div class="modal-btn" @click="compliteStep(4)">
                    Просмотрено
                  </div>
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
            :step="5"
          >
            <div class="result__image">
              <img
                src="@/assets/img/modules/module-5/modal-result.png"
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
import AlbumSlider from "@/components/AlbumSlider.vue";
import { ref, onMounted, computed } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

import { useGameStore } from "@/stores/GameStore.js";
const store = useGameStore();

const stepLoad = ref(false);
const moduleStep = ref(null);
const isInteractive = ref(false);

const showQuiz = ref(false);
const showSliderModal = ref(false);
const showPhotoAlbumModal = ref(false);
const typeOfBg = computed(() => {
  if (moduleStep.value >= 9 && moduleStep.value < 17) {
    return "first";
  }
  if (moduleStep.value >= 17) {
    return "second";
  }
});

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
    title:
      "Как называется сборник правил поведения для сотрудников и деловых партнеров Hochland?",
    options: [
      {
        id: 0,
        title: "Сборник поведенческих принципов",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "Кодекс поведения",
        correctAnswer: true,
      },
      {
        id: 2,
        title: "Корпоративный глоссарий",
        correctAnswer: false,
      },
      {
        id: 3,
        title: "Домовой устав",
        correctAnswer: false,
      },
    ],
  },
  {
    id: 1,
    title: "Что означает в MS Teams иконка белого «кирпича» на красном фоне?",
    options: [
      {
        id: 0,
        title: "Сотрудник ушел на обед",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "Сотрудник в отпуске",
        correctAnswer: false,
      },

      {
        id: 2,
        title: "Сотрудник больше не работает в компании",
        correctAnswer: false,
      },

      {
        id: 3,
        title:
          "Сотрудник в данный момент демонстрирует свой экран на онлайн-встрече",
        correctAnswer: true,
      },
    ],
  },
  {
    id: 2,
    title:
      "Может ли сотрудник делать заявление от лица компании без согласования генерального директора",
    options: [
      {
        id: 0,
        title:
          "Да, сотрудник может делиться любой информацией о компании и делать заявления",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "Да, только если журналист обещает анонимность",
        correctAnswer: false,
      },

      {
        id: 2,
        title:
          "Нет, только после согласования с непосредственным руководителем",
        correctAnswer: false,
      },

      {
        id: 3,
        title:
          "Нет. Без письменного согласования генерального директора запрещено делать любые заявления от лица компании",
        correctAnswer: true,
      },
    ],
  },
];

const openStep = (step) => {
  const currentStep = moduleStep.value;
  if (step == 2 && currentStep <= 2) {
    moduleStep.value = 2;
  }
};

const compliteStep = (step) => {
  if (step == 4) {
    showPhotoAlbumModal.value = false;
    if (moduleStep.value < 5) {
      moduleStep.value = 5;
    }
  }

  if (step == 5) {
    showSliderModal.value = false;
    if (moduleStep.value < 6) {
      moduleStep.value = 6;
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
  background-image: url(@/assets/img/modules/module-7/module-7-bg-0.svg);
  &.hideBg {
    background-image: none;
  }
  &::before,
  &::after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: "";
    pointer-events: none;
    background-image: url(@/assets/img/modules/module-7/module-7-bg-1.svg);
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
  }
  &::after {
    background-image: url(@/assets/img/modules/module-7/module-7-bg-2.svg);
  }
  &[data-step="first"] {
    &::before {
      opacity: 1;
    }
  }

  &[data-step="second"] {
    &::after {
      opacity: 1;
    }
  }
}
.man-modal {
  top: initial;
  bottom: 8%;
  right: 25%;
  &::before {
    display: none;
  }
  .modal-btn {
    width: 100%;
    box-sizing: border-box;
    margin-top: clamp(10px, 2vw, 30px);
  }
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

  &[data-item="4"] {
    right: 59%;
    width: 6%;
    height: 20%;
    bottom: 7%;
    z-index: 4;
    transform: rotate(259deg);
  }

  &[data-item="5"] {
    left: 73.6%;
    width: 6%;
    height: 18%;
    top: 67%;
    z-index: 4;
    transform: rotate(277deg) scaleY(-1);
  }

  &[data-item="20"] {
    left: 72.6%;
    width: 6%;
    height: 18%;
    top: 13%;
    z-index: 4;
    transform: rotate(266deg);
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
    left: 15%;
    width: 22%;
    height: 80%;
    bottom: -1%;
  }

  // &[data-item="2"] {
  //   right: 31%;
  //   width: 7%;
  //   height: 8%;
  //   top: 72%;
  // }

  // &[data-item="3"] {
  //   right: -4px;
  //   top: 0px;
  //   width: 17.5%;
  //   height: 91.36%;
  //   opacity: 0;
  //   visibility: hidden;
  //   transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  //   &.show {
  //     opacity: 1;
  //     visibility: visible;
  //   }
  // }
}
</style>
