<template>
  <div class="modal-template video-modal quiz-modal">
    <div class="modal-content">
      <div class="man-modal__close"></div>
      <div class="quiz-modal__inner" v-if="!showEndScreen">
        <div class="quiz-modal__counter">
          Вопрос {{ currentQuestionIndex + 1 }} из {{ questionsList.length }}
        </div>
        <div class="quiz-modal__title">
          {{ currentQuestion.title }}
        </div>
        <div
          class="quiz-modal__options"
          :class="[hasCurrentAnswer ? 'pointer-none-small' : '']"
        >
          <label
            class="quiz-modal__option"
            v-for="option in currentQuestion.options"
            :class="[
              checkedOption == option.id ? 'checked' : '',
              checkedOption == option.id && isCorrectAnswer && validateIsOn
                ? 'current'
                : '',
              checkedOption == option.id && !isCorrectAnswer && validateIsOn
                ? 'error'
                : '',
            ]"
          >
            <input
              type="radio"
              class="quiz-option"
              name="quiz-option"
              :value="option.id"
              v-model="checkedOption"
              @input="validateIsOn = false"
            />
            <div class="option__ico"></div>
            <div class="option__content">
              <div class="option__title">
                {{ option.title }}
              </div>
              <div
                class="option__message"
                v-if="checkedOption == option.id && validateIsOn"
              >
                {{ isCorrectAnswer ? "Вы ответили правильно!" : option.error }}
              </div>
            </div>
          </label>
        </div>
        <div class="submit-btn" @click="validateAnswer">{{ buttonText }}</div>
      </div>
      <div class="quiz-modal__result" v-else>
        <div class="result__image">
          <img src="@/assets/img/modules/module-1/modal-result.png" alt="" />
        </div>
        <div class="result__text">Вы ответили правильно на все вопросы!</div>
        <div class="result__btn" @click="compliteModule">
          Перейти на следующий этап
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import { useGameStore } from "@/stores/GameStore.js";
const store = useGameStore();
import { ref, computed } from "vue";
const currentQuestionIndex = ref(0);
const hasCurrentAnswer = ref(false);
const checkedOption = ref(null);
const validateIsOn = ref(false);

const buttonText = ref("Ответить");
const showEndScreen = ref(false);
const currentQuestion = computed(
  () => questionsList[currentQuestionIndex.value]
);

const isCorrectAnswer = computed(() => {
  if (validateIsOn.value) {
    return questionsList[currentQuestionIndex.value].options[
      checkedOption.value
    ].correctAnswer;
  }
});

const compliteModule = () => {
  store.compliteStep(2);
  router.push("/");
};

const validateAnswer = () => {
  if (
    questionsList.length - 1 == currentQuestionIndex.value &&
    buttonText.value == "Далее"
  ) {
    console.log("Показать результат");
    showEndScreen.value = true;
    return;
  }
  if (buttonText.value == "Далее") {
    validateIsOn.value = false;
    checkedOption.value = null;
    hasCurrentAnswer.value = false;
    currentQuestionIndex.value++;
    buttonText.value = "Ответить";
    return;
  }

  if (isNaN(checkedOption.value)) return;
  validateIsOn.value = true;

  if (isCorrectAnswer.value) {
    hasCurrentAnswer.value = true;
    buttonText.value = "Далее";
  }
};

const questionsList = [
  {
    id: 0,
    title: "В чем заключается ключевая роль корпоративной этики?",
    options: [
      {
        id: 0,
        title: "Это неотъемлемая часть любого бизнеса",
        error: "Вы ответили не правильно! Описание  администратором",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "Это эффективный инструмент менеджмента",
        error:
          "Вы ответили не правильно! Описание ответа создается администратором",
        correctAnswer: false,
      },

      {
        id: 2,
        title: "Это ключевой элемент, объединяющий людей",
        error: "Вы ответили не правильно! Описание ответа ",
        correctAnswer: true,
      },

      {
        id: 3,
        title: "Это способ повысить эффективность команды",
        error: "Вы ответили не правильно!",
        correctAnswer: false,
      },
    ],
  },
  {
    id: 1,
    title: "Второй вопрос",
    options: [
      {
        id: 0,
        title: "Это неотъемлемая часть любого бизнеса",
        error: "Вы ответили не правильно! Описание  администратором",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "Это эффективный инструмент менеджмента",
        error:
          "Вы ответили не правильно! Описание ответа создается администратором",
        correctAnswer: false,
      },

      {
        id: 2,
        title: "Это ключевой элемент, объединяющий людей",
        error: "Вы ответили не правильно! Описание ответа ",
        correctAnswer: true,
      },

      {
        id: 3,
        title: "Это способ повысить эффективность команды",
        error: "Вы ответили не правильно!",
        correctAnswer: false,
      },
    ],
  },
];
</script>

<style lang="scss"></style>
