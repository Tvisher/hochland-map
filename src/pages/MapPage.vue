<template>
  <div
    class="interactive-map"
    v-if="mapPageLoad"
    :style="{ backgroundImage: `url(${mapBgImagePath})` }"
  >
    <div class="app-logo">
      <img src="@/assets/img/logo.svg" alt="" />
    </div>
    <div class="user-btn">
      <span>Дарья Т.</span>
      <a href="#" class="user-btn__exit"></a>
    </div>
    <div class="menu-btns">
      <a href="javascript:void(0)" class="menu-btn">
        <div class="menu-btn__ball">
          <div class="menu-btn__image">
            <img src="@/assets/img/database.svg" alt="" />
          </div>
        </div>
        <div class="menu-btn__text">Узнать больше</div>
      </a>

      <a
        href="javascript:void(0)"
        class="menu-btn"
        @click="showFormModal = true"
      >
        <div class="menu-btn__ball">
          <div class="menu-btn__image">
            <img src="@/assets/img/message.svg" alt="" />
          </div>
        </div>
        <div class="menu-btn__text">Задать вопрос</div>
      </a>
    </div>
    <div
      class="interactive-step"
      v-for="(image, index) in images"
      :key="index"
      @click="showGameStepModal(index + 1)"
      :class="[
        gameData.openSteps.includes(index + 1) ? 'open' : '',
        `step-${index + 1}`,
        modalData.selectedStep == index + 1 ? 'modal-open' : '',
        index == gameData.openSteps.length - 1 && !showHelloModal
          ? 'last-bounce'
          : '',
      ]"
    >
      <img
        :src="gameData.openSteps.includes(index + 1) ? image.base : image.close"
        class="base-image"
        alt=""
      />
      <img preload :src="image.replace" class="replace-image" alt="" />
    </div>
    <div
      class="modal-template map-step-modal"
      :class="{ show: modalData.showModal }"
      @click="closeModal"
    >
      <div class="modal-template__content">
        <div class="modal-step">{{ modalData.selectedStep }}</div>
        <div class="modal-img">
          <div class="modal-img__man"></div>
        </div>
        <div class="modal-template__title">
          {{ modalInfo ? modalInfo.title : "" }}
        </div>
        <div class="modal-template__text">
          {{ modalInfo ? modalInfo.descr : "" }}
        </div>
        <router-link
          v-if="modalData.selectedStep"
          :to="{
            name: 'StepPage',
            params: { id: modalData.selectedStep },
          }"
          class="modal-template__btn"
        >
          <span>Поехали!</span>
        </router-link>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div class="hello-modal" v-if="showHelloModal">
        <div class="hello-modal-content">
          <div class="hello-modal__images"></div>
          <div class="hello-modal__inner">
            <div class="hello-modal__title">Путешествие к сыроварне</div>
            <div class="hello-modal__text">
              <span class="hello-modal__subtitle">Приветствую, коллега!</span
              ><br />
              Меня зовут Виктор. Недавно я устроился работать в компанию
              Hochland, и мне предстоит впервые отправиться на сыроварню.
              <br /><br />
              Путешествие неблизкое — нужно поехать в другой город. По дороге я
              планирую несколько остановок — хочу успеть не только познакомиться
              с заводом и коллегами, но и изучить окрестности. А ещё я люблю
              общаться с новыми людьми и надеюсь на новые знакомства в пути.
              <br /><br />
              Составишь мне компанию?
            </div>
            <div class="hello-modal__btn" @click="startGame">Поехали</div>
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade" mode="out-in">
      <div class="hello-modal end-modal" v-if="showEndModal">
        <div class="hello-modal-content">
          <div class="man-modal__close" @click="showEndModal = false"></div>
          <div class="hello-modal__images"></div>
          <div class="hello-modal__inner">
            <div class="hello-modal__title">Дорогой друг!</div>
            <div class="hello-modal__text">
              Твое путешествие подошло к концу. Все знания, полученные в
              процессе, тебе пригодятся в работе. При необходимости ты можешь
              вернуться к любому модулю и пересмотреть его. <br /><br />
              А если у тебя остались вопросы, — загляни в
              <a href="#">«Базу знаний»</a> — там собрана дополнительная
              информация, которая может тебе пригодится.<br /><br />
              И не бойся задавать вопросы коллегам — они всегда подскажут и
              поддержат тебя. <br /><br />
              Добро пожаловать в Hochland!
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div class="form-modal" v-if="showFormModal">
        <div class="form-modal__content">
          <div class="form-modal__close" @click="closeMessageModal"></div>
          <div class="form-modal__image"></div>
          <form class="form-modal__form" @submit="submitMessage">
            <div class="form-modal__title">Задайте свой вопрос</div>
            <textarea
              class="form-modal__field"
              placeholder="Текст сообщения"
              v-model.trim="formMessage"
            ></textarea>
            <button class="form-modal__btn" type="submit">Отправить</button>
            <div class="form-modal__result" v-if="messageSent">
              <div class="form-modal__title">Ваш вопрос отправлен!</div>
              <div class="form-modal__btn" @click="closeMessageModal">
                Закрыть
              </div>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { storeToRefs } from "pinia";
import { useGameStore } from "@/stores/GameStore.js";
const store = useGameStore();
const { gameData, userIsFirstVisit } = storeToRefs(store);
const showHelloModal = ref(false);
const showEndModal = ref(false);
const showFormModal = ref(false);
const formMessage = ref("");
const messageSent = ref(false);
const images = ref([]);
const modalData = ref({
  showModal: false,
  selectedStep: "",
});
const mapPageLoad = ref(false);

const mapStepsText = [
  {
    title: "Подготовка ",
    descr:
      "Путешествие начинается! А чтобы оно прошло безупречно, нужно подготовиться. В этом модуле ты узнаешь, как настроить оргтехнику, установить рабочие программы, какую одежду можно носить в офисе и какие правила гигиены важно соблюдать на производстве.",
  },
  {
    title: "Поездка начинается",
    descr:
      "Автобус уже ждет тебя. А чтобы было не скучно ехать, по дороге ты узнаешь, как найти контакт любого сотрудника, у кого получить корпоративный мобильный и что делать, если возникли технические сложности.",
  },

  {
    title: "В дороге",
    descr:
      "Самое время познакомиться с соседями в автобусе. Ведь некоторые из них тоже едут к сыроварне и могут рассказать много интересного. Например, о заводах и руководстве компании. ",
  },
  {
    title: "Успешное бронирование",
    descr:
      "Пора сделать остановку и осмотреть окрестности. Бери велосипед и прокатись по городу до ближайшего кафе. А заодно узнай, как забронировать парковочное или рабочее место в офисе.",
  },

  {
    title: "А не выпить ли нам кофе?",
    descr:
      "Автобус приехал в город, и у тебя есть время изучить его. А заодно и подкрепиться. Продолжай путешествие, и ты узнаешь о правилах поведения в компании, что можно и нельзя делать в приложении MS Teams, а еще — как общаться со СМИ.",
  },

  {
    title: "Ночь в отеле",
    descr:
      "Дорога была долгой, и пора восстановить силы. Остановившись в отеле, ты узнаешь, как заполнять авансовый отчет, какие принципы есть у лидера и как управлять персоналом. А ещё ты найдёшь информацию о праздниках и о том, где читать свежие новости.",
  },

  {
    title: "Полезное знакомство",
    descr:
      "Тебе понадобились наличные деньги, и ты решил зайти в ближайший банк. Очередь оказалась больше, чем ты ожидал. Но зато ты познакомился с опытным коллегой и узнал о больничном, ДМС и пенсионной программе. А ещё об отпуске и о начислении зарплаты.",
  },

  {
    title: "Сувенир на память ",
    descr:
      "Тебе так понравился этот город, что ты захотел купить себе на память сувенир. Выбирай самый красивый и узнавай о компенсации и льготах в компании и премии «Лидер года».",
  },

  {
    title: "Добро пожаловать на сыроварню",
    descr:
      "Ура! Ты наконец-то добрался до сыроварни. Твое путешествие подходит к концу, но все интересное только начинается. Проходи скорее внутрь, знакомься с коллегами и узнавай, как готовят плавленый сыр и какие возможности развития есть в компании. ",
  },
  {
    title: "Поделитесь впечатлениями",
    descr:
      "Путешествие закончилось, но память о нем осталась в виде почтовых открыток. Давайте отправим их родным и друзьям? Загляните на почту и узнайте о правилах чистого стола и как не стать жертвой интернет-мошенников.",
  },
];
const mapBgImagePath = new URL(`../assets/img/map-bg.svg`, import.meta.url)
  .href;

const modalInfo = computed(() => {
  return mapStepsText[modalData.value.selectedStep - 1];
});

const loadImages = () => {
  const imageCount = 10;
  for (let i = 1; i <= imageCount; i++) {
    images.value.push({
      base: new URL(`../assets/img/steps/${i}.svg`, import.meta.url).href,
      replace: new URL(`../assets/img/steps-hover/${i}.svg`, import.meta.url)
        .href,
      close: new URL(`../assets/img/steps-close/${i}.svg`, import.meta.url)
        .href,
    });
  }
};

const showGameStepModal = (ind) => {
  if (!gameData.value.openSteps.includes(ind)) return;
  modalData.value.selectedStep = ind;
  setTimeout(() => (modalData.value.showModal = true), 200);
};

const closeModal = (e) => {
  const target = e.target;
  if (
    target.closest(".modal-template") &&
    !target.closest(".modal-template__content")
  ) {
    modalData.value.showModal = false;
    setTimeout(() => (modalData.value.selectedStep = ""), 200);
  }
};
const startGame = () => {
  userIsFirstVisit.value = false;
  showHelloModal.value = false;
};

const submitMessage = (e) => {
  e.preventDefault();
  if (formMessage.value.length > 0) {
    messageSent.value = true;
  }
};
const closeMessageModal = () => {
  showFormModal.value = false;
  setTimeout(() => {
    messageSent.value = false;
  }, 400);
};
onMounted(() => {
  loadImages();
  const bgImage = new Image();
  bgImage.src = mapBgImagePath;
  bgImage.onload = () => {
    setTimeout(() => {
      mapPageLoad.value = true;
      if (store.userCompliteGame) {
        showEndModal.value = true;
      }
      if (userIsFirstVisit.value) {
        showHelloModal.value = true;
      }
    }, 800);
  };
});
</script>

<style lang="scss">
.hello-modal,
.form-modal {
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(34, 34, 34, 0.5);
  backdrop-filter: blur(7.5px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hello-modal__images {
  background-image: url(../assets/img/map-hello-modal-bg.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: fromWidth(280);
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  flex-shrink: 0;
  position: relative;
  border-radius: fromWidth(20) 0 0 fromWidth(20);
  &::before {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 120%;
    height: 90%;
    content: "";
    background-image: url(../assets/img/map-hello-modal-man.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom right;
  }
}
.hello-modal__btn {
  width: 100%;
  color: #000;
  text-align: center;
  font-family: "Open Sans";
  font-size: fromWidth(16);
  font-weight: 700;
  padding: fromWidth(19);
  border-radius: fromWidth(6);
  border: fromWidth(2) solid #000;
  background: #fff;
  margin-top: fromWidth(32);
  cursor: pointer;
  box-sizing: border-box;
}
.hello-modal-content {
  display: flex;
  align-items: stretch;
  max-width: fromWidth(800);
  width: 100%;
  border-radius: fromWidth(20);
  border: fromWidth(3) solid #000;
  background-color: #fff;
  box-sizing: border-box;
}
.hello-modal__inner {
  padding: fromWidth(48);
  padding-top: fromWidth(32);
}
.hello-modal__title {
  font-family: "Coralwaves";
  color: #000;
  font-size: fromWidth(56);
  font-weight: 400;
  line-height: normal;
  margin-bottom: fromWidth(32);
}
.hello-modal__text {
  color: #000;
  font-family: "Open Sans";
  font-size: fromWidth(16);
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  a {
    color: #00c5ff;
    text-decoration: none;
  }
}
.hello-modal__subtitle {
  display: block;
  font-size: fromWidth(18);
  font-weight: 600;
}
.map-step-modal {
  opacity: 0;
  visibility: hidden;
  &.show {
    opacity: 1;
    visibility: visible;
  }
}
.interactive-map {
  // background-image: url("@/assets/img/map-bg.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  width: 100%;
  height: 52vw;
  position: relative;
}

.interactive-step {
  will-change: transform;
  position: absolute;
  display: none;
  width: 200px;
  height: 200px;
  cursor: no-drop;

  img {
    will-change: transform;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0px);
    width: 100%;
    height: 100%;
    filter: grayscale(100);
    transition: filter 0.3s ease-in-out;
  }

  &.open {
    cursor: pointer;

    img {
      filter: grayscale(0);
    }
    &.last-bounce {
      animation: bounce 1.6s ease forwards;
    }
  }

  .base-image,
  .replace-image {
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out,
      filter 1s ease-in-out;
  }

  .replace-image {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }

  &.open:hover,
  &.modal-open {
    .base-image {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
    }

    .replace-image {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  &.step-1 {
    display: block;
    left: 11.2vw;
    top: 9vw;
    width: 9vw;
    height: 10.5vw;
    .replace-image {
      width: 110%;
      height: 110%;
    }
  }

  &.step-2 {
    display: block;
    left: 2.2vw;
    top: 20.4vw;
    width: 13.3vw;
    height: 8.2vw;

    .replace-image {
      width: 110%;
      height: 110%;
    }
  }

  &.step-3 {
    display: block;
    left: 4.8vw;
    top: 33.2vw;
    width: 10vw;
    height: 11vw;
  }

  &.step-4 {
    display: block;
    left: 29.7vw;
    top: 31vw;
    width: 8vw;
    height: 13vw;

    .replace-image {
      width: 130%;
      height: 130%;
    }
  }

  &.step-5 {
    display: block;
    left: 23.2vw;
    top: 16.2vw;
    width: 9vw;
    height: 10vw;
  }

  &.step-6 {
    display: block;
    left: 35.2vw;
    top: 5.6vw;
    width: 9.5vw;
    height: 11.2vw;
  }

  &.step-7 {
    display: block;
    left: 45vw;
    top: 17.8vw;
    width: 12.5vw;
    height: 9vw;

    .replace-image {
      width: 120%;
      height: 120%;
    }
  }

  &.step-8 {
    display: block;
    left: 64.5vw;
    top: 5.8vw;
    width: 10vw;
    height: 10.4vw;
  }

  &.step-9 {
    display: block;
    left: 61.4vw;
    top: 20.5vw;
    width: 16.4vw;
    height: 9.4vw;
  }

  &.step-10 {
    display: block;
    left: 55vw;
    top: 33vw;
    width: 11vw;
    height: 12vw;
  }
}

.end-modal {
  .hello-modal-content {
    position: relative;
  }
  .man-modal__close {
    width: fromWidth(50);
    height: fromWidth(50);
  }
  .hello-modal__images {
    background-image: url("@/assets/img/map-end-modal-bg.svg");
    &::before {
      background-image: url("@/assets/img/map-end-modal-man.svg");
      left: -20%;
      bottom: 0;
      width: 88%;
      height: 79%;
      right: inherit;
    }
  }
}
.form-modal__close {
  position: absolute;
  width: fromWidth(24);
  height: fromWidth(24);
  top: fromWidth(10);
  right: fromWidth(10);
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.1006 6.5498L6.10059 18.5498M6.10059 6.5498L18.1006 18.5498' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e ");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  cursor: pointer;
  z-index: 2;
}
.form-modal__content {
  max-width: fromWidth(560);
  width: 100%;
  border-radius: fromWidth(10);
  border: fromWidth(2) solid #000;
  display: flex;
  background-color: #fff;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}
.form-modal__image {
  width: fromWidth(200);
  flex-shrink: 0;
}
.form-modal__form {
  display: flex;
  flex-direction: column;
  padding: fromWidth(30);
  width: 100%;
  box-sizing: border-box;
  position: relative;
}
.form-modal__result {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: fromWidth(30);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.form-modal__title {
  margin-bottom: fromWidth(20);
  color: #000;
  font-family: "Open Sans";
  font-size: fromWidth(20);
  font-weight: 700;
}
.form-modal__field {
  border-radius: fromWidth(6);
  border: fromWidth(2) solid #000;
  background: #fff;
  resize: vertical;
  width: 100%;
  min-height: fromWidth(200);
  box-sizing: border-box;
  margin-bottom: fromWidth(20);
  padding: fromWidth(10) fromWidth(15);
  font-family: "Open Sans";
  font-size: fromWidth(16);
}
.form-modal__btn {
  cursor: pointer;
  color: #000;
  text-align: center;
  font-family: "Open Sans";
  font-size: fromWidth(16);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 100%;
  padding: fromWidth(10);
  border-radius: fromWidth(6);
  border: fromWidth(2) solid #000;
  background: #fff;
}
.form-modal__image {
  background-image: url(../assets/img/message-modal-bg.svg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
