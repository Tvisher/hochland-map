<template>
  <div class="test-content">
    <div class="test-content__wrapper">
      <div class="test-content__head">
        <div class="test-content__ico"></div>
        <div class="test-content__title">
          {{ currentQuestion.title }}
        </div>
      </div>
      <div class="test-content__body">
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
                :class="{ show: checkedOption == option.id && validateIsOn }"
              >
                {{
                  isCorrectAnswer ? "Правильный ответ!" : "Неправильный ответ!"
                }}
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
    <div class="test-content__footer">
      <div>
        Принцип {{ currentQuestionIndex + 1 }} из {{ questionsList.length }}
      </div>
      <div class="submit-btn" @click="validateAnswer">{{ buttonText }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const emit = defineEmits(["testComplite"]);
const questionsList = [
  {
    id: 0,
    title:
      "Какое поведение противоречит принципу «Я предлагаю решения, а не ищу почему нельзя»?",
    options: [
      {
        id: 0,
        title: "Я готов идти на взвешенный риск",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "Я вкладываю массу усилий в «копеечный» результат",
        correctAnswer: true,
      },

      {
        id: 2,
        title: "Это неотъемлемая часть любого бизнеса",
        correctAnswer: false,
      },

      {
        id: 3,
        title: "Это неотъемлемая часть любого бизнеса",
        correctAnswer: false,
      },
    ],
  },
  {
    id: 1,
    title:
      "Что нужно делать в рамках принципа «Я принимаю самостоятельные решения и доверяю решению коллег»?",
    options: [
      {
        id: 0,
        title: "Брать ответственность на себя",
        correctAnswer: true,
      },
      {
        id: 1,
        title: "Мыслить в рамках своей функции",
        correctAnswer: false,
      },

      {
        id: 2,
        title: "Перепроверять решения коллег",
        correctAnswer: false,
      },

      {
        id: 3,
        title: "Не менять решения несмотря ни на что",
        correctAnswer: false,
      },
    ],
  },
  {
    id: 2,
    title:
      "«Я развиваю команду» — так звучит третий принцип лидерства. Как именно нужно это делать?",
    options: [
      {
        id: 0,
        title: "Искать виноватых",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "Поддерживать каждого члена команды",
        correctAnswer: true,
      },

      {
        id: 2,
        title: "Выделять «фаворитов»",
        correctAnswer: false,
      },

      {
        id: 3,
        title: "Не готовить себе преемника",
        correctAnswer: false,
      },
    ],
  },
  {
    id: 3,
    title:
      "Какое предложение по реализации принципа «Уверенность в себе и своем профессионализме составляет основу лидерства» предлагается в документе?",
    options: [
      {
        id: 0,
        title: "Доказывать другим свою правоту",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "Давать только негативную обратную связь",
        correctAnswer: false,
      },

      {
        id: 2,
        title: "Быть самоуверенным",
        correctAnswer: false,
      },

      {
        id: 3,
        title: "Проводить тренинги для сотрудников",
        correctAnswer: true,
      },
    ],
  },
  {
    id: 4,
    title:
      "Что нужно делать, опираясь на принцип «Я создаю среду для проявления инициативы и создания нового, вовлекаю»?",
    options: [
      {
        id: 0,
        title: "Быть умнее других и показывать это",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "Поддерживать и хвалить коллег",
        correctAnswer: true,
      },

      {
        id: 2,
        title: "Быть авторитетом и поощрять «дедовщину»",
        correctAnswer: false,
      },

      {
        id: 3,
        title: "Имитировать бурную деятельность",
        correctAnswer: false,
      },
    ],
  },
  {
    id: 5,
    title:
      "Что нужно делать в рамках принципа «Лидер в Hochland постоянно развивается»?",
    options: [
      {
        id: 0,
        title: "Мечтать о глобальном",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "Сплетничать с коллегами",
        correctAnswer: false,
      },

      {
        id: 2,
        title: "Повышать квалификацию в своей области",
        correctAnswer: true,
      },

      {
        id: 3,
        title: "Ориентироваться на карьеру",
        correctAnswer: false,
      },
    ],
  },
  {
    id: 5,
    title:
      "Что нельзя делать в рамках принципа «Ставлю амбициозные цели, лидирую и несу ответственность за их достижение»?",
    options: [
      {
        id: 0,
        title: "«Ориентироваться на процесс, а не на результат»",
        correctAnswer: true,
      },
      {
        id: 1,
        title:
          "Контролировать выполнение своих целей и целей своих подчинённых",
        correctAnswer: false,
      },

      {
        id: 2,
        title: "Делать больше, чем положено",
        correctAnswer: false,
      },

      {
        id: 3,
        title: "Обсуждать результаты с командой",
        correctAnswer: false,
      },
    ],
  },
];

const currentQuestionIndex = ref(0);
const hasCurrentAnswer = ref(false);
const checkedOption = ref(null);
const validateIsOn = ref(false);

const buttonText = ref("Ответить");
const showEndScreen = ref(false);
const complitedAnswers = ref(0);

const currentQuestion = computed(
  () => questionsList[currentQuestionIndex.value]
);

const isCorrectAnswer = computed(() => {
  if (validateIsOn.value && checkedOption.value !== null) {
    return questionsList[currentQuestionIndex.value].options[
      checkedOption.value
    ].correctAnswer;
  }
});

const validateAnswer = () => {
  if (complitedAnswers.value == questionsList.length) {
    emit("testComplite");
    return;
  }
  if (
    questionsList.length - 1 == currentQuestionIndex.value &&
    buttonText.value == "Далее"
  ) {
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
    complitedAnswers.value++;
    if (complitedAnswers.value == questionsList.length) {
      buttonText.value = "Завершить";
    } else {
      buttonText.value = "Далее";
    }
  }
};
</script>

<style lang="scss">
.test-content {
  border-radius: fromWidth(24);
  border: fromWidth(4) solid #000;
  overflow: hidden;

  .option__ico {
    width: fromWidth(16);
    height: fromWidth(16);
    border: fromWidth(2) solid #000;
    margin-right: fromWidth(16);
    border-radius: 50%;
    background-image: none !important;
  }
  .quiz-modal__option {
    align-items: center;
  }

  .option__content {
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: space-between;
    width: 100%;
  }

  .option__title {
    font-size: fromWidth(22);
    font-weight: 600;
  }

  .option__message {
    flex-shrink: 0;
    font-size: fromWidth(16);
    font-style: normal;
    font-weight: 600;
    margin-top: 0;
    opacity: 0;
    &.show {
      opacity: 1;
    }
  }

  .quiz-modal__option {
    padding: fromWidth(20) fromWidth(16);
    border-radius: fromWidth(12);
    border: fromWidth(3) solid #000;
    box-shadow: fromWidth(6) fromWidth(6) 0px 0px rgba(6, 73, 83, 0.25);
    &.checked {
      box-shadow: fromWidth(6) fromWidth(6) 0px 0px #23c2f1;
      .option__ico {
        background-color: #23c2f1;
      }
    }
    &.current {
      box-shadow: fromWidth(6) fromWidth(6) 0px 0px #76b82a;
      .option__ico {
        background-color: #76b82a;
      }
    }
    &.error {
      box-shadow: fromWidth(6) fromWidth(6) 0px 0px #df5763;
      .option__ico {
        background-color: #df5763;
      }
    }
  }
  .submit-btn {
    box-shadow: none;
    padding: fromWidth(15) fromWidth(63);
    padding-left: fromWidth(24);
    font-size: fromWidth(22);
    border-radius: fromWidth(12);
    line-height: 100%;
    background-position: center right fromWidth(20);
  }
}
.test-content__ico {
  width: fromWidth(100);
  height: fromWidth(100);
  background-repeat: no-repeat;
  background-image: url(../assets/img/test-ico.svg);
  background-size: contain;
  margin-right: fromWidth(40);
  flex-shrink: 0;
}

.test-content__head {
  display: flex;
  margin-bottom: fromWidth(40);
}

.test-content__title {
  font-size: fromWidth(24);
  font-weight: 700;
}

.test-content__wrapper {
  padding: fromWidth(32) fromWidth(40);
  background-image: url(../assets/img/test-bg.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
}

.test-content__footer {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  padding-left: 32px;
  font-size: fromWidth(22);
  font-weight: 700;
  border-top: fromWidth(4) solid #000;
}
</style>
