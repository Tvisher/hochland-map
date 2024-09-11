<template>
  <div class="wardrobe__content">
    <div class="wardrobe__nav">
      <!-- <div
        class="wardrobe__nav_btn wardrobe__close"
        @click="emit('closeWardrobe', false)"
      ></div> -->
      <div
        class="wardrobe__nav_btn man-select"
        :class="[gender == 'man' ? 'selected' : '']"
        @click="gender = 'man'"
      ></div>
      <div
        class="wardrobe__nav_btn woman-select"
        :class="[gender == 'woman' ? 'selected' : '']"
        @click="gender = 'woman'"
      ></div>
    </div>

    <transition name="fast-fade" mode="out-in">
      <div class="wardrobe__model" :key="currentStepData.personImagePath">
        <img
          :src="currentStepData.personImagePath"
          :alt="currentStepData.name"
        />
      </div>
    </transition>

    <div class="wardrobe__variants">
      <div
        class="wardrobe__variant"
        :class="[selectedStyleId == option.id ? 'active' : '']"
        v-for="option in styleList"
        v-show="option.id != 0"
        @click="selectedStyleId = option.id"
      >
        <div class="variant__name" v-html="option.name"></div>
        <transition name="fast-fade" mode="out-in">
          <div
            class="variant__ico"
            :style="{ backgroundImage: `url(${option.btnIcoPath[gender]})` }"
            :key="option.btnIcoPath[gender]"
          ></div>
        </transition>
      </div>
    </div>
    <transition name="fast-fade" mode="out-in">
      <div class="wardrobe__message" :key="currentStepData.message">
        <div
          class="message__ico"
          :class="[currentStepData.status ? 'correct' : 'incorrect']"
        ></div>
        <div class="message__text">
          {{ currentStepData.message[gender] }}
        </div>
      </div>
    </transition>
    <div
      class="complite-btn"
      :class="[currentStepData.status ? 'active' : '']"
      @click="emit('closeWardrobe', true)"
    >
      Пора выходить!
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
const emit = defineEmits(["closeWardrobe", "selectNewVisual"]);
const gender = ref("man");
const selectedStyleId = ref(0);

const styleList = [
  {
    id: 0,
    name: "Свободный стиль",
    btnIcoPath: {
      man: new URL(
        `../assets/img/modules/module-1/man-ico-0.svg`,
        import.meta.url
      ).href,
      woman: new URL(
        `../assets/img/modules/module-1/woman-ico-0.svg`,
        import.meta.url
      ).href,
    },
    personImagePath: {
      man: new URL(`../assets/img/modules/module-1/man-0.svg`, import.meta.url)
        .href,
      woman: new URL(
        `../assets/img/modules/module-1/woman-0.svg`,
        import.meta.url
      ).href,
    },
    message: {
      man: "Привычная футболка и джинсы не подойдут для работы в офисе. Лучше подобрать что-то другое.",
      woman:
        "Привычная футболка и джинсы не подойдут для работы в офисе. Лучше подобрать что-то другое.",
    },
    status: false,
  },
  {
    id: 1,
    name: "Бизнес-строгий",
    btnIcoPath: {
      man: new URL(
        `../assets/img/modules/module-1/man-ico-1.svg`,
        import.meta.url
      ).href,
      woman: new URL(
        `../assets/img/modules/module-1/woman-ico-1.svg`,
        import.meta.url
      ).href,
    },
    personImagePath: {
      man: new URL(`../assets/img/modules/module-1/man-1.svg`, import.meta.url)
        .href,
      woman: new URL(
        `../assets/img/modules/module-1/woman-1.svg`,
        import.meta.url
      ).href,
    },
    message: {
      man: "Если ты собираешься на деловую встречу, аудит или собрание, стоит надеть деловой костюм классического кроя, нейтрального оттенка, без агрессивных принтов. Под костюм выбери однотонную рубашку с длинным рукавом и однотонный галстук. Обувь тоже лучше выбрать классическую.",
      woman:
        "Если ты собираешься на деловую встречу, аудит или собрание, стоит надеть брючный костюм или юбку (допустимая длина юбок – чуть выше колена, рекомендованная длина – миди) с пиджаком. Обязательно выбери блузу спокойных тонов. Из обуви выбери туфли на небольшом каблуке или лодочки. Можно надеть минималистичные украшения, которые не привлекают внимание.",
    },
    status: true,
  },
  {
    id: 2,
    name: "Бизнес-<br/>повседневный",
    btnIcoPath: {
      man: new URL(
        `../assets/img/modules/module-1/man-ico-2.svg`,
        import.meta.url
      ).href,
      woman: new URL(
        `../assets/img/modules/module-1/woman-ico-2.svg`,
        import.meta.url
      ).href,
    },
    personImagePath: {
      man: new URL(`../assets/img/modules/module-1/man-2.svg`, import.meta.url)
        .href,
      woman: new URL(
        `../assets/img/modules/module-1/woman-2.svg`,
        import.meta.url
      ).href,
    },
    message: {
      man: "Если в течение дня нет деловых встреч, то можно не надевать галстук, а вместо рубашки - поло или водолазку. Костюм может быть из любой ткани, например, из трикотажа. Цвета тоже можно выбрать не строгие. Допускаются детали неклассического вида (накладные карманы, двойная строчка).",
      woman:
        "Если в течение дня нет деловых встреч, то можно выбрать классическую юбку, брюки или платье-карандаш. Низ можно сочетать с кардиганом, жакетом или элегантным джемпером. Большая часть гардероба должна быть базовых оттенков, яркими расцветками допустимо лишь разбавлять образы. Из обуви допустимы лодочки, лоферы, балетки и туфли с открытым носом.",
    },
    status: true,
  },
  {
    id: 3,
    name: "Повседневный-<br/>офисный",
    btnIcoPath: {
      man: new URL(
        `../assets/img/modules/module-1/man-ico-3.svg`,
        import.meta.url
      ).href,
      woman: new URL(
        `../assets/img/modules/module-1/woman-ico-3.svg`,
        import.meta.url
      ).href,
    },
    personImagePath: {
      man: new URL(`../assets/img/modules/module-1/man-3.svg`, import.meta.url)
        .href,
      woman: new URL(
        `../assets/img/modules/module-1/woman-3.svg`,
        import.meta.url
      ).href,
    },
    message: {
      man: "Ура, пятница! Тут можно надеть джинсы с пиджаком, кардиганом или водолазкой. Можно носить рубашку без пиджака. Из обуви лучше надеть туфли или полуботинки, но они могут быть из мягкой кожи или замши.",
      woman:
        "По пятницам выбирай разные фасоны, цвета и материалы, но оставайся в бизнес-офисном стиле. Классические джинсы можно! Допускается больше аксессуаров,чем в других стилях – например, лаконичные браслеты, кольца, моносерьги, подвески, кожаный ремень, разнообразие в цветах, материалах и фасонах.",
    },
    status: true,
  },
];

const currentStepData = computed(() => {
  const currentItem = JSON.parse(
    JSON.stringify(styleList.find((el) => el.id == selectedStyleId.value))
  );
  currentItem.personImagePath = currentItem.personImagePath[gender.value];
  currentItem.btnIcoPath = currentItem.btnIcoPath[gender.value];
  return currentItem;
});

watch(currentStepData, () => {
  emit("selectNewVisual", {
    path: currentStepData.value.personImagePath,
    isSelected: true,
  });
});
</script>

<style lang="scss">
.wardrobe__content {
  user-select: none;
  background-image: url(@/assets/img/modules/module-1/wardrobe.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
}
</style>
