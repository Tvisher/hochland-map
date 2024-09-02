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
        <div class="variant__name">{{ option.name }}</div>
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
          {{ currentStepData.message }}
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
    message:
      "Всем привычная футболка и джинсы. Но для работы в офисе лучше подобрать что-то другое.",
    status: false,
  },
  {
    id: 1,
    name: "Деловой стиль",
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
    message: "Деловой стиль",
    status: true,
  },
  {
    id: 2,
    name: "Выходной стиль",
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
    message: "Выходной стиль",
    status: true,
  },
  {
    id: 3,
    name: "Офисный стиль",
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
    message: "Офисный стиль",
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
