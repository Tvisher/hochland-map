<template>
  <div
    class="step-wrapper"
    :class="{ 'no-interactive': !isInteractive, 'step-load': stepLoad }"
  >
    <div class="step-wrapper__block">
      <div class="step-wrapper__content">
        <div
          class="step-wrapper__content_bg"
          :class="{ show: moduleStep == 5, hideWoman: moduleStep >= 4 }"
        ></div>
        <div
          class="bg-element"
          :class="{ show: moduleStep > 5 && moduleStep < 20 }"
        ></div>

        <div
          class="interactive-item"
          :class="[moduleStep == 4 ? 'pulse' : '']"
          data-item="1"
          @click="showPhotoAlbumModal = true"
        >
          <img src="@/assets/img/modules/module-5/object-1.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 5 ? 'pulse' : '']"
          data-item="2"
          @click="showSliderModal = true"
        >
          <img src="@/assets/img/modules/module-5/object-2.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 20 ? 'pulse show' : '']"
          data-item="3"
          @click="showQuiz = true"
        >
          <img src="@/assets/img/modules/module-5/object-3.svg" alt="" />
        </div>

        <div
          class="arrow-template"
          v-for="step in [4, 5, 20]"
          :class="[moduleStep == step ? 'show' : '']"
          :data-item="step"
        >
          <div class="arrow-template_img"></div>
        </div>

        <!-- data-modal-dialog="4" -->
        <!-- <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="4" v-if="moduleStep == 1">
            <img
              src="@/assets/img/modules/module-5/dialog-1.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span> Как вам кофе? </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 2">
                Прочитано
              </div>
            </div>
          </div>
        </transition> -->

        <!-- data-modal-dialog="5" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="5" v-if="moduleStep == 1">
            <img
              src="@/assets/img/modules/module-5/dialog-2-1.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span>
                <!-- Спасибо, очень вкусно. Я весь день в дороге до сыроварни и
                мечтал о нем. -->
                Спасибо за кофе. Я весь день в дороге до сыроварни и мечтал о
                нем
              </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 2">
                Прочитано
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="6" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="6" v-if="moduleStep == 2">
            <img
              src="@/assets/img/modules/module-5/dialog-3.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span> Могу ли я еще что-то принести для вас? </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 3">
                Прочитано
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="7" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="7" v-if="moduleStep == 3">
            <img
              src="@/assets/img/modules/module-5/dialog-2.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span> Давайте я изучу меню и позову вас. </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 4">
                Прочитано
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="8" -->
        <!-- <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="8" v-if="moduleStep == 5">
            <img
              src="@/assets/img/modules/module-5/dialog-1.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span>Да, конечно. </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 6">
                Прочитано
              </div>
            </div>
          </div>
        </transition> -->

        <!-- data-modal-dialog="9" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="9" v-if="moduleStep == 6">
            <img
              src="@/assets/img/modules/module-5/dialog-5.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span
                >Привет! Меня зовут Борис. Я журналист из местной газеты. Я
                услышал, что вы едете на сыроварню в Hochland, а я как раз пишу
                статью об этой компании. Можно я задам вам несколько вопросов?
              </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 7">
                Прочитано
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="10" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="10" v-if="moduleStep == 7">
            <img
              src="@/assets/img/modules/module-5/dialog-6.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span>
                SOS! Я никогда не общался с прессой,что <br />
                мне делать… Наверное, пара минут общения <br />
                никак не навредит компании, а мое имя<br />
                опубликуют в газете и коллеги узнают обо<br />
                мне. Страшно, конечно, но попробовать же<br />
                можно.
              </span>
            </div>
            <div class="modal-btn__ball" @click="moduleStep = 8"></div>
          </div>
        </transition>

        <!-- data-modal-dialog="11" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="11" v-if="moduleStep == 8">
            <img
              src="@/assets/img/modules/module-5/dialog-7.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span> Привет. Конечно, чем я могу помочь? </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 9">
                Прочитано
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="12" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="12" v-if="moduleStep == 9">
            <img
              src="@/assets/img/modules/module-5/dialog-8.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span
                >Я слышал, что компания хочет запустить новый продукт. Вы можете
                мне рассказать о нем?
              </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 10">
                Прочитано
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="13" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="13" v-if="moduleStep == 10">
            <img
              src="@/assets/img/modules/module-5/dialog-6.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span
                >Ох! Я думал, что вопросы будут легче. <br />
                Сотрудникам же запрещено делать <br />
                заявления от лица компании без<br />
                письменного согласования с генеральным <br />
                директором. Да и любой материал потом <br />
                журналист тоже должен будет согласовать <br />
                с ним до публикации.
              </span>
            </div>
            <div class="modal-btn__ball" @click="moduleStep = 11"></div>
          </div>
        </transition>

        <!-- data-modal-dialog="14" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="14" v-if="moduleStep == 11">
            <img
              src="@/assets/img/modules/module-5/dialog-7.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span
                >Нет, к сожалению, на этот вопрос я не могу вам ответить.
              </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 12">
                Прочитано
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="15" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="15" v-if="moduleStep == 12">
            <img
              src="@/assets/img/modules/module-5/dialog-9.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span>Ну намекните хотя бы на состав нового продукта. </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 13">
                Прочитано
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="16" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="16" v-if="moduleStep == 13">
            <img
              src="@/assets/img/modules/module-5/dialog-10.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span
                >Я не вправе делать заявления от лица компании, но вы можете
                оставить запрос через специальную форму на сайте компании.
              </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 14">
                Прочитано
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="17" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="17" v-if="moduleStep == 14">
            <img
              src="@/assets/img/modules/module-5/dialog-11.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span
                >Это займет время. А у меня <br />
                горят сроки, я должен сдать статью уже завтра. Помогите мне,
                пожалуйста. Иначе меня уволят.
              </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 15">
                Прочитано
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="18" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="18" v-if="moduleStep == 15">
            <img
              src="@/assets/img/modules/module-5/dialog-6.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span
                >Жалко его, конечно, но даже если бы я знал <br />
                официальную позицию компании по <br />
                анонсированию нового продукта, я не могу вот так делиться ей со
                всеми, еще и в устной форме
              </span>
            </div>
            <div class="modal-btn__ball" @click="moduleStep = 16"></div>
          </div>
        </transition>

        <!-- data-modal-dialog="19" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="19" v-if="moduleStep == 16">
            <img
              src="@/assets/img/modules/module-5/dialog-7.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span
                >К сожалению, я ничем не могу вам помочь. Мне очень жаль.
              </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 17">
                Прочитано
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="20" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="20" v-if="moduleStep == 17">
            <img
              src="@/assets/img/modules/module-5/dialog-9.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span
                >Неужели вам жалко? Я был уверен, что вы поможете мне…
              </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 18">
                Прочитано
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="21" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="21" v-if="moduleStep == 18">
            <img
              src="@/assets/img/modules/module-5/dialog-12.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span
                >Когда новый продукт выйдет, информацию о нем вы сможете
                прочитать на официальных ресурсах:
                <a href="https://www.hochland-group.com/ru" target="_blank"
                  >корпоративном сайте группы</a
                >
                и нашего главного бренда
                <a href="https://www.hochland.ru/" target="_blank"
                  >www.hochland.ru</a
                >, а также в официальной
                <a href="https://vk.com/hochland" target="_blank">
                  группе Hochland во «ВКонтакте»</a
                >
                и на канале
                <a href="https://t.me/hochland_russia" target="_blank"
                  >Hochland Russia в «Телеграме»</a
                >
                и
                <a href="https://dzen.ru/hochlandrussia" target="_blank"
                  >«Дзене»</a
                >.
              </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 19">
                Прочитано
              </div>
            </div>
          </div>
        </transition>
        <!-- data-modal-dialog="22" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="22" v-if="moduleStep == 19">
            <img
              src="@/assets/img/modules/module-5/dialog-9.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span>
                Хорошо, я все понял, оставляю вас пить кофе в одиночестве.
              </span>
              <div class="modal-btn dialog-btn" @click="moduleStep = 20">
                Прочитано
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade" mode="in-out">
          <div
            class="modal-template album-modal menu-modal"
            v-if="showPhotoAlbumModal"
          >
            <div class="modal-content">
              <!-- <div class="man-modal__close" @click="compliteStep(2)"></div> -->
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

        <transition name="fade" mode="in-out">
          <div
            class="modal-template slider-modal mobile-modal five_module_slider"
            v-show="showSliderModal"
          >
            <div class="modal-content">
              <div class="man-modal__close" @click="compliteStep(5)"></div>
              <div class="tabs-modal__inner">
                <div class="tabs-content">
                  <FiveModuleSlider />
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
import FiveModuleSlider from "@/components/FiveModuleSlider.vue";
import AlbumSlider from "@/components/AlbumSlider.vue";
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
const showPhotoAlbumModal = ref(false);

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

.bg-element {
  pointer-events: none;
  left: 24%;
  top: 17%;
  width: 27.5%;
  height: 72%;
  z-index: 3;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(@/assets/img/modules/module-5/module-5-bg-man.svg);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;

  &.show {
    opacity: 1;
    visibility: visible;
  }
}

.step-wrapper__content {
  background-image: url(@/assets/img/modules/module-5/module-5-bg-0.svg);
}

.step-wrapper__content_bg {
  background-image: url(@/assets/img/modules/module-5/module-5-bg-2.svg);
  background-size: contain;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  &.show {
    opacity: 1;
    visibility: visible;
  }
  &::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-image: url(@/assets/img/modules/module-5/module-5-bg-1.svg);
    background-size: contain;
    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }
  &.hideWoman {
    opacity: 1;
    visibility: visible;
  }
  &.show {
    &::before {
      opacity: 1;
      visibility: visible;
    }
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
    left: 47.2%;
    width: 16%;
    height: 21%;
    bottom: 7.4%;
  }

  &[data-item="2"] {
    right: 31%;
    width: 7%;
    height: 8%;
    top: 72%;
  }

  &[data-item="3"] {
    right: -4px;
    top: 0px;
    width: 17.5%;
    height: 91.36%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
    &.show {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
