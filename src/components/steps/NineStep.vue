<template>
  <div
    class="step-wrapper"
    :class="{ 'no-interactive': !isInteractive, 'step-load': stepLoad }"
  >
    <div class="step-wrapper__block">
      <div class="step-wrapper__content">
        <div class="bg-segment">
          <img src="@/assets/img/modules/module-9/bg-segment.svg" alt="" />
        </div>
        <transition name="fade" mode="out-in">
          <div
            class="interactive-item"
            :class="[moduleStep == 1 ? 'pulse' : '']"
            data-item="1"
            @click="openStep(2)"
            v-if="moduleStep < 5"
          >
            <img src="@/assets/img/modules/module-9/object-1.svg" alt="" />
          </div>
        </transition>

        <div
          class="interactive-item"
          :class="[moduleStep == 5 ? 'pulse' : '']"
          data-item="2"
          @click="isShowVideoModal = true"
        >
          <img src="@/assets/img/modules/module-9/object-2.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 6 ? 'pulse' : '']"
          data-item="3"
          @click="openStep(6)"
        >
          <img src="@/assets/img/modules/module-9/object-3.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 7 ? 'pulse' : '']"
          data-item="4"
          @click="openStep(7)"
        >
          <img src="@/assets/img/modules/module-9/object-4.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 8 ? 'pulse' : '']"
          data-item="5"
          @click="openStep(8)"
        >
          <img src="@/assets/img/modules/module-9/object-5.svg" alt="" />
        </div>
        <div
          class="interactive-item"
          :class="[moduleStep == 9 ? 'pulse' : '']"
          data-item="6"
          @click="showQuiz = true"
        >
          <img src="@/assets/img/modules/module-9/object-6.svg" alt="" />
        </div>
        <div
          class="arrow-template"
          v-for="step in [1, 5, 6, 7, 8, 9]"
          :class="[moduleStep == step ? 'show' : '']"
          :data-item="step"
        >
          <div class="arrow-template_img"></div>
        </div>

        <!-- data-modal-dialog="1" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="1" v-if="moduleStep == 2">
            <img
              src="@/assets/img/modules/module-9/dialog-1.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span
                >Привет, дружище! Как твои дела? Надеюсь, ты не скучал по дороге
                сюда?</span
              >
              <div class="modal-btn dialog-btn" @click="moduleStep = 3">
                Дальше
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="2" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="2" v-if="moduleStep == 3">
            <img
              src="@/assets/img/modules/module-9/dialog-2.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span
                >Привет! Скучно мне точно не было! Я познакомился с интересными
                людьми и так много узнал о компании. Это была удивительная и
                такая приятная дорога</span
              >
              <div class="modal-btn dialog-btn" @click="moduleStep = 4">
                Дальше
              </div>
            </div>
          </div>
        </transition>

        <!-- data-modal-dialog="3" -->
        <transition name="fade-scale" mode="out-in">
          <div class="man-modal" data-modal-dialog="3" v-if="moduleStep == 4">
            <img
              src="@/assets/img/modules/module-9/dialog-3.svg"
              class="bgimage"
              alt=""
            />
            <div class="man-modal__content">
              <span
                >Рад это слышать. Ты, кстати, вовремя, мы сейчас как раз начнём
                обсуждать перспективы развития в компании. А пока ты можешь
                познакомиться с заводом и узнать, как готовят плавленый
                сыр.</span
              >
              <div class="modal-btn dialog-btn" @click="moduleStep = 5">
                Дальше
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade" mode="out-in">
          <div class="modal-template video-modal" v-show="isShowVideoModal">
            <div class="modal-content">
              <div class="tabs-content__title">Как мы делаем плавленый сыр</div>
              <div class="video-block">
                <vue-plyr @ended="() => (isShowVideoModalNextBtn = true)">
                  <video
                    crossorigin
                    playsinline
                    poster="@/assets/img/poster-1.jpg"
                  >
                    <source
                      src="@/assets/files/video-ex.mp4"
                      type="video/mp4"
                    />
                  </video>
                </vue-plyr>
              </div>
              <div
                class="modal-btn"
                v-if="isShowVideoModalNextBtn"
                @click="compliteStep(5)"
              >
                Просмотрено
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade" mode="out-in">
          <div
            class="modal-template video-modal desc-modal"
            v-show="isShowDescModal"
          >
            <div class="modal-content">
              <div class="desc-modal-block">
                <div class="desc-modal-block__ico">
                  <svg
                    width="55"
                    height="48"
                    viewBox="0 0 55 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.5"
                      y="1.5"
                      width="52"
                      height="45"
                      rx="6.5"
                      fill="#F4B923"
                    />
                    <rect
                      x="1.5"
                      y="1.5"
                      width="52"
                      height="45"
                      rx="6.5"
                      stroke="black"
                      stroke-width="3"
                    />
                    <path
                      d="M24.375 35.8421C24.375 36.6796 24.7042 37.4829 25.2903 38.0751C25.8763 38.6673 26.6712 39 27.5 39C28.3288 39 29.1237 38.6673 29.7097 38.0751C30.2958 37.4829 30.625 36.6796 30.625 35.8421C30.625 35.0046 30.2958 34.2014 29.7097 33.6091C29.1237 33.0169 28.3288 32.6842 27.5 32.6842C26.6712 32.6842 25.8763 33.0169 25.2903 33.6091C24.7042 34.2014 24.375 35.0046 24.375 35.8421Z"
                      fill="white"
                    />
                    <path d="M24.375 35.8421H15Z" fill="white" />
                    <path d="M30.625 35.8421H40Z" fill="white" />
                    <path
                      d="M27.5 27.9474L24.375 24.7895H16.6875C16.2731 24.7895 15.8757 24.6231 15.5826 24.327C15.2896 24.0309 15.125 23.6293 15.125 23.2105V10.5789C15.125 10.1602 15.2896 9.75857 15.5826 9.46246C15.8757 9.16635 16.2731 9 16.6875 9H38.3125C38.7269 9 39.1243 9.16635 39.4174 9.46246C39.7104 9.75857 39.875 10.1602 39.875 10.5789V23.2105C39.875 23.6293 39.7104 24.0309 39.4174 24.327C39.1243 24.6231 38.7269 24.7895 38.3125 24.7895H30.625L27.5 27.9474Z"
                      fill="white"
                    />
                    <path
                      d="M24.375 35.8421C24.375 36.6796 24.7042 37.4829 25.2903 38.0751C25.8763 38.6673 26.6712 39 27.5 39C28.3288 39 29.1237 38.6673 29.7097 38.0751C30.2958 37.4829 30.625 36.6796 30.625 35.8421M24.375 35.8421C24.375 35.0046 24.7042 34.2014 25.2903 33.6091C25.8763 33.0169 26.6712 32.6842 27.5 32.6842C28.3288 32.6842 29.1237 33.0169 29.7097 33.6091C30.2958 34.2014 30.625 35.0046 30.625 35.8421M24.375 35.8421H15M30.625 35.8421H40M27.5 27.9474L24.375 24.7895H16.6875C16.2731 24.7895 15.8757 24.6231 15.5826 24.327C15.2896 24.0309 15.125 23.6293 15.125 23.2105V10.5789C15.125 10.1602 15.2896 9.75857 15.5826 9.46246C15.8757 9.16635 16.2731 9 16.6875 9H38.3125C38.7269 9 39.1243 9.16635 39.4174 9.46246C39.7104 9.75857 39.875 10.1602 39.875 10.5789V23.2105C39.875 23.6293 39.7104 24.0309 39.4174 24.327C39.1243 24.6231 38.7269 24.7895 38.3125 24.7895H30.625L27.5 27.9474Z"
                      stroke="black"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="desc-modal-block__text">
                  В компании существуют два принципа, которые важно учитывать
                  при планировании дополнительного обучения
                </div>
              </div>
              <h5>1. Принцип целесообразности:</h5>
              <ul>
                <li>
                  Обучение должно коррелировать со стратегией и целями компании,
                  рабочими проектами
                </li>
                <li>
                  Обучение должно быть направлено на развитие компетенций,
                  необходимых для реализации стратегии, проектов, целей
                </li>
                <li>
                  Претендовать на платные тренинги могут сотрудники после
                  завершения испытательного срока
                </li>
                <li>
                  Лимит на покупку и бонусы рассчитываются автоматически в
                  зависимости от твоей группы сотрудников и срока использования
                  предыдущего телефона (если он был).
                </li>
              </ul>
              <h5>2. Принцип баланса учебной и рабочей нагрузки</h5>
              <div class="desc-modal-block">
                <div class="desc-modal-block__ico">
                  <svg
                    width="55"
                    height="48"
                    viewBox="0 0 55 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.5"
                      y="1.5"
                      width="52"
                      height="45"
                      rx="6.5"
                      fill="#F4B923"
                    />
                    <rect
                      x="1.5"
                      y="1.5"
                      width="52"
                      height="45"
                      rx="6.5"
                      stroke="black"
                      stroke-width="3"
                    />
                    <path
                      d="M23.4722 37.4211H16.2222C15.3676 37.4211 14.5481 37.0883 13.9438 36.4961C13.3395 35.9039 13 35.1007 13 34.2632V15.3158C13 14.4783 13.3395 13.675 13.9438 13.0828C14.5481 12.4906 15.3676 12.1579 16.2222 12.1579H35.5556C36.4101 12.1579 37.2297 12.4906 37.834 13.0828C38.4383 13.675 38.7778 14.4783 38.7778 15.3158V20.0526"
                      fill="white"
                    />
                    <path d="M32.3333 9V15.3158Z" fill="white" />
                    <path d="M19.4444 9V15.3158Z" fill="white" />
                    <path d="M13 21.6316H29.1111Z" fill="white" />
                    <path
                      d="M29.1111 32.6842C29.1111 34.3593 29.7901 35.9657 30.9986 37.1501C32.2072 38.3346 33.8464 39 35.5556 39C37.2647 39 38.9039 38.3346 40.1125 37.1501C41.321 35.9657 42 34.3593 42 32.6842C42 31.0092 41.321 29.4027 40.1125 28.2183C38.9039 27.0338 37.2647 26.3684 35.5556 26.3684C33.8464 26.3684 32.2072 27.0338 30.9986 28.2183C29.7901 29.4027 29.1111 31.0092 29.1111 32.6842Z"
                      fill="white"
                    />
                    <path
                      d="M35.5556 30.3158V32.6842L36.3611 33.4737"
                      fill="white"
                    />
                    <path
                      d="M23.4722 37.4211H16.2222C15.3676 37.4211 14.5481 37.0883 13.9438 36.4961C13.3395 35.9039 13 35.1007 13 34.2632V15.3158C13 14.4783 13.3395 13.675 13.9438 13.0828C14.5481 12.4906 15.3676 12.1579 16.2222 12.1579H35.5556C36.4101 12.1579 37.2297 12.4906 37.834 13.0828C38.4383 13.675 38.7778 14.4783 38.7778 15.3158V20.0526M32.3333 9V15.3158M19.4444 9V15.3158M13 21.6316H29.1111M35.5556 30.3158V32.6842L36.3611 33.4737M29.1111 32.6842C29.1111 34.3593 29.7901 35.9657 30.9986 37.1501C32.2072 38.3346 33.8464 39 35.5556 39C37.2647 39 38.9039 38.3346 40.1125 37.1501C41.321 35.9657 42 34.3593 42 32.6842C42 31.0092 41.321 29.4027 40.1125 28.2183C38.9039 27.0338 37.2647 26.3684 35.5556 26.3684C33.8464 26.3684 32.2072 27.0338 30.9986 28.2183C29.7901 29.4027 29.1111 31.0092 29.1111 32.6842Z"
                      stroke="black"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="desc-modal-block__text">
                  Рекомендуемая периодичность обучения:
                </div>
              </div>
              <ul>
                <li>
                  Краткосрочное обучение от 16 часов — не чаще 1 раза в квартал
                </li>
                <li>
                  Среднесрочное обучение от 72 до 100 часов — 1–2 раза в год
                </li>
                <li>
                  Долгосрочное обучение от 100 до 144 часов — не чаще 1 раза в
                  год
                </li>
                <li>
                  Профессиональная подготовка/MBA/новая специальность/первое,
                  второе высшее - по согласованию с HR-директором
                </li>
              </ul>

              <div class="desc-modal-block">
                <div class="desc-modal-block__ico">
                  <svg
                    width="55"
                    height="48"
                    viewBox="0 0 55 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.5"
                      y="1.5"
                      width="52"
                      height="45"
                      rx="6.5"
                      fill="#F4B923"
                    />
                    <rect
                      x="1.5"
                      y="1.5"
                      width="52"
                      height="45"
                      rx="6.5"
                      stroke="black"
                      stroke-width="3"
                    />
                    <path
                      d="M25.8915 24.0015C25.8915 24.4141 26.0612 24.8097 26.3633 25.1014C26.6654 25.3932 27.0751 25.5571 27.5024 25.5571C27.9296 25.5571 28.3393 25.3932 28.6414 25.1014C28.9435 24.8097 29.1132 24.4141 29.1132 24.0015C29.1132 23.5889 28.9435 23.1933 28.6414 22.9016C28.3393 22.6098 27.9296 22.446 27.5024 22.446C27.0751 22.446 26.6654 22.6098 26.3633 22.9016C26.0612 23.1933 25.8915 23.5889 25.8915 24.0015Z"
                      fill="white"
                    />
                    <path
                      d="M27.5024 16.2237C25.9094 16.2237 24.3522 16.6799 23.0277 17.5345C21.7032 18.3892 20.6708 19.6039 20.0612 21.0251C19.4516 22.4463 19.2921 24.0101 19.6029 25.5189C19.9137 27.0276 20.6807 28.4135 21.8072 29.5012C22.9336 30.589 24.3687 31.3297 25.9311 31.6298C27.4934 31.9299 29.1129 31.7759 30.5846 31.1872C32.0563 30.5985 33.3142 29.6017 34.1992 28.3226C35.0842 27.0436 35.5566 25.5398 35.5566 24.0015"
                      fill="white"
                    />
                    <path
                      d="M29.114 10.0873C26.1276 9.76376 23.1108 10.3444 20.4811 11.7489C17.8514 13.1534 15.7386 15.3123 14.435 17.9271C13.1314 20.5418 12.7015 23.4831 13.2047 26.3441C13.7079 29.2051 15.1193 31.8445 17.2437 33.897C19.3681 35.9495 22.1005 37.3138 25.063 37.8012C28.0255 38.2885 31.0715 37.8748 33.7799 36.6173C36.4882 35.3598 38.725 33.3206 40.1807 30.7819C41.6365 28.2431 42.2393 25.3302 41.9057 22.4462"
                      fill="white"
                    />
                    <path
                      d="M32.3349 14.6682V19.3348H37.1675L42 14.6682H37.1675V10.0015L32.3349 14.6682Z"
                      fill="white"
                    />
                    <path d="M32.3349 19.3348L27.5024 24.0015Z" fill="white" />
                    <path
                      d="M27.5024 16.2237C25.9094 16.2237 24.3522 16.6799 23.0277 17.5345C21.7032 18.3892 20.6708 19.6039 20.0612 21.0251C19.4516 22.4463 19.2921 24.0101 19.6029 25.5189C19.9137 27.0276 20.6807 28.4135 21.8072 29.5012C22.9336 30.589 24.3687 31.3297 25.9311 31.6298C27.4934 31.9299 29.1129 31.7759 30.5846 31.1872C32.0563 30.5985 33.3142 29.6017 34.1992 28.3226C35.0842 27.0436 35.5566 25.5398 35.5566 24.0015M29.114 10.0873C26.1276 9.76376 23.1108 10.3444 20.4811 11.7489C17.8514 13.1534 15.7386 15.3123 14.435 17.9271C13.1314 20.5418 12.7015 23.4831 13.2047 26.3441C13.7079 29.2051 15.1193 31.8445 17.2437 33.897C19.3681 35.9495 22.1005 37.3138 25.063 37.8012C28.0255 38.2885 31.0715 37.8748 33.7799 36.6173C36.4882 35.3598 38.725 33.3206 40.1807 30.7819C41.6365 28.2431 42.2393 25.3302 41.9057 22.4462M32.3349 19.3348V14.6682L37.1675 10.0015V14.6682H42L37.1675 19.3348H32.3349ZM32.3349 19.3348L27.5024 24.0015M25.8915 24.0015C25.8915 24.4141 26.0612 24.8097 26.3633 25.1014C26.6654 25.3932 27.0751 25.5571 27.5024 25.5571C27.9296 25.5571 28.3393 25.3932 28.6414 25.1014C28.9435 24.8097 29.1132 24.4141 29.1132 24.0015C29.1132 23.5889 28.9435 23.1933 28.6414 22.9016C28.3393 22.6098 27.9296 22.446 27.5024 22.446C27.0751 22.446 26.6654 22.6098 26.3633 22.9016C26.0612 23.1933 25.8915 23.5889 25.8915 24.0015Z"
                      stroke="black"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="desc-modal-block__text">
                  Процесс постановки целей по развитию на год состоит из
                  нескольких шагов:
                </div>
              </div>
              <ul>
                <li>
                  Постановка бизнес-целей: они должны быть релевантными
                  стратегии и задачам компании, быть конкретными, измеримыми,
                  достижимыми, иметь конкретный срок исполнения
                </li>
                <li>
                  Постановка планов развития: его формирование происходит по
                  модели 70:20:10
                </li>
              </ul>
              <div class="desc-modal__image-block">
                <div class="image-block__title">Модель развития 70:20:10 *</div>
                <div class="image-block__image">
                  <div class="image-block__image-container">
                    <img
                      src="@/assets/img/modules/module-9/block-image.svg"
                      alt=""
                    />
                  </div>
                </div>
                <ul>
                  <li>
                    70% — это эмпирическое обучение через реальные ситуации на
                    рабочем месте. Так человек реализует на практике все
                    полученные знания и анализирует собственный опыт
                  </li>
                  <li>
                    20% приходится на социальное обучение при общении с
                    руководством и коллегами. Сюда же относится внутреннее
                    обучение
                  </li>
                  <li>
                    10% знаний сотрудник получает из традиционных источников —
                    информации, полученной на специальных тренингах, из книг, в
                    обучающих центрах и т.д.
                  </li>
                </ul>
                <div class="image-block__descr">
                  * модель развития Ч. Дженнингса (70:20:10)
                </div>
              </div>
              <ul>
                <li>
                  Подведение итогов: оценка деятельности сотрудника за год
                  (складывается из самооценки и оценки руководителя)
                </li>
                <li>Отслеживать прогресс важно не реже 1 раза в 6 месяцев</li>
              </ul>
              <div class="modal-btn" @click="compliteStep(7)">Просмотрено</div>
            </div>
          </div>
        </transition>

        <transition name="fade" mode="in-out">
          <div
            class="modal-template slider-modal five_module_slider"
            v-show="showSliderModal"
          >
            <div class="modal-content">
              <div
                class="man-modal__close"
                v-if="sliderModalWiewed"
                @click="compliteStep(6)"
              ></div>
              <div class="tabs-modal__inner">
                <div class="tabs-content">
                  <swiper
                    class="slider-el"
                    :slides-per-view="1"
                    :space-between="50"
                    effect="fade"
                    :autoHeight="true"
                    :fadeEffect="{
                      crossFade: true,
                    }"
                    :navigation="{
                      prevEl: '.slider-prev-btn',
                      nextEl: '.slider-next-btn',
                    }"
                    @reachEnd="() => (sliderModalWiewed = true)"
                    :modules="[Navigation, Pagination, EffectFade]"
                    :pagination="{ clickable: true }"
                  >
                    <swiper-slide class="slide-item rules-slide">
                      <div class="slide-item__inner">
                        <div class="rules-slide__title">
                          Возможности развития и обучения в компании
                        </div>
                        <div class="rules-slide__content">
                          <div class="rules-slide__body">
                            <h5>В Hochland реализуются три вида обучения:</h5>
                            <ul>
                              <li>
                                Мы берем на себя ответственность, не боимся
                                рисковать и приветствуем ответственное мышление
                                и поведение
                              </li>
                              <li>
                                Мы допускаем, что при этом могут возникнуть
                                ошибки, и мы учимся на них.
                              </li>
                              <li>
                                Руководители поддерживают ответственные действия
                                своих сотрудников и предоставляют им
                                благоприятные условия для развития
                                инициативности.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>

                    <swiper-slide class="slide-item rules-slide">
                      <div class="slide-item__inner">
                        <div class="rules-slide__title">
                          Возможности развития и обучения в компании
                        </div>
                        <div class="rules-slide__content">
                          <div class="rules-slide__body">
                            <h5>
                              Обязательное обучение осуществляется для всех
                              новых сотрудников до того, как они приступят к
                              самостоятельной работе. Оно включает в себя
                              информацию по оказанию первой медицинской помощи и
                              охране труда, отраслевые нормы и правила органов
                              государственного надзора и других ведомств, знание
                              которых необходимо для выполнения должностных
                              обязанностей. Также в это обучение входит
                              получение допусков и разрешений для выполнения
                              работ на объектах, поднадзорных государственным
                              органам. пос. РАОС, д. 16 140126 Раменский район
                            </h5>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>

                    <swiper-slide class="slide-item rules-slide">
                      <div class="slide-item__inner">
                        <div class="rules-slide__title">
                          Возможности развития и обучения в компании
                        </div>
                        <div class="rules-slide__content">
                          <div class="rules-slide__body">
                            <h5>
                              Дополнительное обучение осуществляется на основе
                              согласованного плана на год. Оно помогает получить
                              знания и навыки для поддержания текущей
                              деятельности Hochland и реализации стратегических
                              целей и задач развития компании. пос. РАОС, д. 16
                              140126 Раменский район
                            </h5>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>

                    <swiper-slide class="slide-item rules-slide">
                      <div class="slide-item__inner">
                        <div class="rules-slide__title">
                          Возможности развития и обучения в компании
                        </div>
                        <div class="rules-slide__content">
                          <div class="rules-slide__body">
                            <h5>
                              Внутреннее обучение осуществляется по
                              образовательным программам, разработанным в
                              Hochland для сотрудников производства. пос. РАОС,
                              д. 16 140126 Раменский район
                            </h5>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>

                    <swiper-slide class="slide-item rules-slide">
                      <div class="slide-item__inner">
                        <div class="rules-slide__title">
                          Возможности развития и обучения в компании
                        </div>
                        <div class="rules-slide__content">
                          <div class="rules-slide__body">
                            <h5>
                              Кто может получить обучение за счет компании: пос.
                              РАОС, д. 16 140126 Раменский район
                            </h5>
                            <ul>
                              <li>
                                Сотрудник, занимающий должность на постоянной
                                основе со стажем не менее трех месяцев
                              </li>
                              <li>
                                Сотрудник, работающий по срочному трудовому
                                договору и имеющий стаж в Hochland не менее трех
                                месяцев
                              </li>
                              <li>
                                Все сотрудники вне зависимости их стажа,
                                должности и вида трудового договора - по
                                программам обязательного обучения
                              </li>
                              <li>
                                В отдельных случаях, по решению руководства
                                обучение может пройти сотрудник, имеющий стаж
                                менее трех месяцев
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                    <div class="nav-buttons">
                      <div class="slider-prev-btn">Назад</div>
                      <div class="slider-next-btn">Дальше</div>
                    </div>
                  </swiper>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade" mode="in-out">
          <div
            class="modal-template slider-modal phone-modal"
            v-show="showPhoneModal"
          >
            <div class="modal-content">
              <div class="tabs-modal__inner">
                <div class="tabs-content">
                  <h1>
                    А ты знаешь, что в компании действует система, позволяющая
                    сообщать о возможных нарушениях корпоративной этики? Для
                    этого есть специальная
                    <a
                      href="https://www.bkms-system.com/bkwebanon/report/clientInfo?cin=Zwr5Sx&c=-1&language=rus"
                      target="_blank"
                    >
                      система оповещения Tell Us</a
                    >
                  </h1>
                  <h3>Темы, по которым ты можешь обратиться туда:</h3>
                  <ul>
                    <li>
                      Случаи злоупотребления служебным положением и превышение
                      должностных полномочий
                    </li>
                    <li>Недобросовестное и неэтичное поведение</li>
                    <li>
                      Нарушения правил охраны труда и техники безопасности
                    </li>
                    <li>
                      Нарушения законодательства о защите персональных данных,
                      утечка конфиденциальной информации
                    </li>
                    <li>Нарушения прав человека на рабочем месте</li>
                    <li>Защита окружающей среды</li>
                    <li>
                      Дискриминация, сексуальные домогательства, групповая
                      травля
                    </li>
                    <li>
                      Иные действия или бездействия, которые нарушают нормы
                      действующего законодательства Российской Федерации,
                      внутренних стандартов и процедур
                    </li>
                  </ul>
                  <h3>Важно: Заявку можно подать анонимно.</h3>
                </div>
                <div class="modal-btn" @click="compliteStep(8)">
                  Просмотрено
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
            :step="9"
          >
            <div class="result__image">
              <img
                src="@/assets/img/modules/module-9/modal-result.png"
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

const showQuiz = ref(false);
const showSliderModal = ref(false);
const sliderModalWiewed = ref(false);
const isShowVideoModal = ref(false);
const isShowDescModal = ref(false);
const isShowVideoModalNextBtn = ref(false);
const showPhoneModal = ref(false);
const questionsList = [
  {
    id: 0,
    title: "Сколько лабораторий на заводе по производству плавленого сыра?",
    options: [
      {
        id: 0,
        title: "1",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "2",
        correctAnswer: true,
      },
      {
        id: 2,
        title: "3",
        correctAnswer: false,
      },
      {
        id: 3,
        title: "4",
        correctAnswer: false,
      },
    ],
  },
  {
    id: 1,
    title: "Какие виды обучения существуют в Hochland? ",
    options: [
      {
        id: 0,
        title: "Обязательное, дополнительное, внутреннее",
        correctAnswer: true,
      },
      {
        id: 1,
        title: "Принудительное, второстепенное, опциональное",
        correctAnswer: false,
      },

      {
        id: 2,
        title: "Обязательное и необязательное",
        correctAnswer: false,
      },

      {
        id: 3,
        title: "Внешнее и внутреннее",
        correctAnswer: false,
      },
    ],
  },
  {
    id: 2,
    title:
      "Что ты будешь делать, если заметил нарушения правил охраны труда и техники безопасности? ",
    options: [
      {
        id: 0,
        title: "Сделаю вид, что не заметил этого",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "Попробую самостоятельно решить вопрос",
        correctAnswer: false,
      },

      {
        id: 2,
        title: "Напишу в Tell Us",
        correctAnswer: true,
      },

      {
        id: 3,
        title: "Расскажу об этом всем коллегам",
        correctAnswer: false,
      },
    ],
  },
];

const openStep = (step) => {
  const currentStep = moduleStep.value;
  if (step == 2 && currentStep <= 2) {
    moduleStep.value = 2;
  }

  if (step == 6 && currentStep >= 6) {
    showSliderModal.value = true;
  }

  if (step == 7 && currentStep >= 7) {
    isShowDescModal.value = true;
  }

  if (step == 8 && currentStep >= 8) {
    showPhoneModal.value = true;
  }
};

const compliteStep = (step) => {
  if (step == 5) {
    isShowVideoModal.value = false;
  }

  if (step == 6) {
    showSliderModal.value = false;
  }

  if (step == 7) {
    isShowDescModal.value = false;
  }

  if (step == 8) {
    showPhoneModal.value = false;
  }
  if (moduleStep.value < step + 1) {
    moduleStep.value = step + 1;
  }
};

const compliteModule = () => {
  store.openNewStep(10);
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
.phone-modal {
  .modal-btn {
    margin-top: fromWidth(64);
  }
  .modal-content {
    background-image: url(@/assets/img/modules/module-9/modal-ico-4.svg) !important;
  }
  h1 {
    color: #000;
    font-family: "Open Sans";
    font-size: fromWidth(32);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
    margin-bottom: fromWidth(48);
    a {
      text-decoration: none;
      color: #0abbef;
    }
  }
  h3 {
    color: #000;
    font-family: "Open Sans";
    font-size: fromWidth(24);
    font-style: normal;
    font-weight: 700;
    line-height: 158.333%;
  }
  ul {
    padding-left: fromWidth(26);
  }

  li {
    color: #000;
    font-family: "Open Sans";
    font-size: fromWidth(24);
    font-style: normal;
    font-weight: 600;
    line-height: 158.333%;
    margin-bottom: fromWidth(32);
    &::marker {
      color: #0abbef;
    }
  }
}
.desc-modal {
  .modal-btn {
    margin-top: fromWidth(64) !important;
  }
}
.desc-modal__image-block {
  margin-bottom: fromWidth(32);
  border-radius: fromWidth(20);
  border: fromWidth(4) solid #000;
  background: linear-gradient(90deg, #f0e7f1 0%, #e2f2fa 100%);
  padding: fromWidth(32) 0;
  ul {
    margin: 0;
    padding-left: fromWidth(70) !important;
    padding-right: fromWidth(32);
    margin-top: fromWidth(32);
  }
  li {
    &:nth-child(1) {
      &::marker {
        color: #f4b923;
        font-size: fromWidth(34);
      }
    }

    &:nth-child(2) {
      &::marker {
        color: #945091;
        font-size: fromWidth(34);
      }
    }

    &:nth-child(3) {
      &::marker {
        color: #0abbef;
        font-size: fromWidth(34);
      }
    }
  }
}

.image-block__image {
  height: 0;
  padding-top: 60%;
  width: 100%;
  position: relative;
  margin-bottom: fromWidth(34);
}
.image-block__image-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.image-block__descr {
  padding: 0px fromWidth(32);
  margin-top: fromWidth(64);
  color: #000;
  font-family: "Open Sans";
  font-size: fromWidth(16);
  font-style: italic;
  font-weight: 600;
}

.image-block__title {
  color: #000;
  font-family: "Open Sans";
  font-size: fromWidth(32);
  padding-left: fromWidth(32);
  margin-bottom: fromWidth(32);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.desc-modal {
  .modal-content {
    background-image: url(@/assets/img/modules/module-9/modal-ico-3.svg) !important;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: fromWidth(32);
    padding-left: fromWidth(25);
    margin: 0;
    margin-bottom: fromWidth(40);
  }
  h5 {
    color: #000;
    font-family: "Open Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 158.333%; /* 158.333% */
    margin-bottom: fromWidth(40);
  }
  li {
    color: #000;
    font-family: "Open Sans";
    font-size: fromWidth(24);
    font-style: normal;
    font-weight: 600;
    line-height: 158.333%;
    &::marker {
      color: #00c5ff;
    }
  }
}
.desc-modal-block__ico {
  flex-shrink: 0;
  width: fromWidth(55);
  height: fromWidth(48);
  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
}
.desc-modal-block {
  display: flex;
  border-radius: fromWidth(20);
  border: fromWidth(4) solid #000;
  background: #fff;
  padding: fromWidth(20) fromWidth(24);
  gap: fromWidth(24);
  margin-bottom: fromWidth(48);
}
.desc-modal-block__text {
  color: #000;
  font-family: "Open Sans";
  font-size: fromWidth(32);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: fromWidth(24);
  border-left: fromWidth(3) solid #ddd;
}
.slider-modal .modal-content {
  background-image: url(@/assets/img/modules/module-9/modal-ico-2.svg);
  background-position: top fromWidth(40) left fromWidth(40);
}
.rules-slide__body {
  display: flex;
  flex-direction: column;
  gap: fromWidth(40);
  h5 {
    color: #000;
    font-family: "Open Sans";
    font-size: fromWidth(24);
    margin: 0;
    font-weight: 700;
    line-height: normal;
  }
  ul {
    padding-left: fromWidth(24);
    margin: 0;
  }
  li {
    color: #000;
    font-family: "Open Sans";
    font-size: fromWidth(24);
    font-style: normal;
    font-weight: 600;
    line-height: 158.333%;
    margin-bottom: fromWidth(24);
    &::marker {
      color: #00c5ff;
    }
  }
}
.video-modal .modal-content {
  background-image: url(@/assets/img/modules/module-9/modal-ico-1.svg);
  background-position: top fromWidth(40) left fromWidth(40);
}
.man-modal {
  box-sizing: border-box;
  padding-top: fromWidth(125);

  &[data-modal-dialog="1"] {
    right: 45%;
    top: 39%;
    width: fromWidth(660);
    height: fromWidth(457);
  }

  &[data-modal-dialog="2"] {
    left: 3%;
    top: 39%;
    width: fromWidth(660);
    height: fromWidth(581);
  }

  &[data-modal-dialog="3"] {
    right: 45%;
    top: 39%;
    width: fromWidth(660);
    height: fromWidth(629);
  }
}
.bg-segment {
  position: absolute;
  right: 14.8%;
  top: 30.3%;
  width: 10%;
  height: 47%;
  z-index: 5;
  pointer-events: none;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.step-wrapper__content {
  background-image: url(@/assets/img/modules/module-9/module-9-bg.svg);
  background-size: contain;
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

  &[data-item="1"] {
    right: 36%;
    width: 6%;
    height: 20%;
    bottom: 76%;
    z-index: 4;
    transform: rotate(21deg) scaleX(-1);
  }

  &[data-item="5"] {
    right: 69%;
    width: 6%;
    height: 20%;
    bottom: 63%;
    z-index: 4;
    transform: rotate(48deg) scaleX(-1);
  }

  &[data-item="6"] {
    right: 90%;
    width: 6%;
    height: 20%;
    bottom: 54%;
    z-index: 4;
    transform: rotate(341deg);
  }

  &[data-item="7"] {
    right: 25%;
    width: 6%;
    height: 20%;
    top: 10%;
    z-index: 4;
    transform: rotate(10deg) scaleX(-1);
  }

  &[data-item="8"] {
    right: 63%;
    width: 6%;
    height: 20%;
    bottom: 36%;
    z-index: 4;
    transform: rotate(267deg);
  }

  &[data-item="9"] {
    right: 20%;
    width: 6%;
    height: 20%;
    bottom: 71%;
    z-index: 4;
    transform: rotate(283deg);
  }
}

.slide-item__inner {
  min-height: inherit !important;
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
    left: 41%;
    width: 29%;
    height: 77.5%;
    bottom: -4%;
    z-index: 4;
  }

  &[data-item="2"] {
    left: 17%;
    width: 11.5%;
    height: 14%;
    top: 34.5%;
  }

  &[data-item="3"] {
    left: 1%;
    width: 15.5%;
    height: 11%;
    top: 47.5%;
  }

  &[data-item="4"] {
    right: 20.4%;
    width: 15.5%;
    height: 41%;
    top: 31.5%;
  }

  &[data-item="5"] {
    right: 52%;
    width: 8%;
    height: 10%;
    top: 49.2%;
  }

  &[data-item="6"] {
    right: -0.3%;
    width: 15.3%;
    height: 101%;
    top: 0;
  }
}
</style>
