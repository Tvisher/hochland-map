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

      <a href="javascript:void(0)" class="menu-btn">
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
        index == gameData.openSteps.length - 1 ? 'last-bounce' : '',
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
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { storeToRefs } from "pinia";
import { useGameStore } from "@/stores/GameStore.js";
const store = useGameStore();
const { gameData } = storeToRefs(store);

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

onMounted(() => {
  loadImages();
  const bgImage = new Image();
  bgImage.src = mapBgImagePath;
  bgImage.onload = () => {
    setTimeout(() => {
      mapPageLoad.value = true;
    }, 800);
  };
});
</script>

<style lang="scss">
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
</style>
