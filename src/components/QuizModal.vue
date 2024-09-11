<template>
  <div class="modal-template video-modal quiz-modal" :data-step="props.step">
    <div class="modal-content">
      <!-- <div class="man-modal__close" @click="emit('modalClose')"></div> -->
      <transition name="fade" mode="out-in">
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
                  {{ option.message }}
                </div>
              </div>
            </label>
          </div>
          <div class="submit-btn" @click="validateAnswer">{{ buttonText }}</div>
        </div>
        <div class="quiz-modal__result" v-else>
          <slot></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const emit = defineEmits(["modalClose"]);
const props = defineProps({
  questionsList: Array,
  step: Number,
});

const currentQuestionIndex = ref(0);
const hasCurrentAnswer = ref(false);
const checkedOption = ref(null);
const validateIsOn = ref(false);
const questionsList = props.questionsList;

const buttonText = ref("Ответить");
const showEndScreen = ref(false);
const currentQuestion = computed(
  () => questionsList[currentQuestionIndex.value]
);

const isCorrectAnswer = computed(() => {
  if (validateIsOn.value && checkedOption.value) {
    return questionsList[currentQuestionIndex.value].options[
      checkedOption.value
    ].correctAnswer;
  }
});

const validateAnswer = () => {
  if (
    questionsList.length - 1 == currentQuestionIndex.value &&
    buttonText.value == "Далее"
  ) {
    // console.log("Показать результат");
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
</script>

<style lang="scss"></style>
