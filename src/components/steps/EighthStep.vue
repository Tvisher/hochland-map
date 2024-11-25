<template>
  <div
    class="step-wrapper"
    :class="{ 'no-interactive': !isInteractive, 'step-load': stepLoad }"
  >
    <div class="step-wrapper__block">
      <div class="step-wrapper__content">
        <transition name="fade" mode="out-in">
          <div class="step-bg-segment" v-if="moduleStep >= 18">
            <img src="@/assets/img/modules/module-7/bg-element.svg" alt="" />
          </div>
        </transition>
        <div
          class="interactive-item"
          :class="[moduleStep == 1 ? 'pulse' : '']"
          data-item="1"
          @click="openStep(1)"
        >
          <img src="@/assets/img/modules/module-8/object-1.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 2 ? 'pulse' : '']"
          data-item="2"
          @click="openStep(2)"
        >
          <img src="@/assets/img/modules/module-8/object-2.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 3 ? 'pulse' : '']"
          data-item="3"
          @click="openStep(3)"
        >
          <img src="@/assets/img/modules/module-8/object-3.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 4 ? 'pulse' : '']"
          data-item="4"
          @click="openStep(4)"
        >
          <img src="@/assets/img/modules/module-8/object-4.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 5 ? 'pulse' : '']"
          data-item="5"
          @click="openStep(5)"
        >
          <img src="@/assets/img/modules/module-8/object-5.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 6 ? 'pulse' : '']"
          data-item="6"
          @click="openStep(6)"
        >
          <img src="@/assets/img/modules/module-8/object-6.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 7 ? 'pulse' : '']"
          data-item="7"
          @click="openStep(7)"
        >
          <img src="@/assets/img/modules/module-8/object-7.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 8 ? 'pulse' : '']"
          data-item="8"
          @click="openStep(8)"
        >
          <img src="@/assets/img/modules/module-8/object-8.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 9 ? 'pulse' : '']"
          data-item="9"
          @click="openStep(9)"
        >
          <img src="@/assets/img/modules/module-8/object-9.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 10 ? 'pulse' : '']"
          data-item="10"
          @click="openStep(10)"
        >
          <img src="@/assets/img/modules/module-8/object-10.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 11 ? 'pulse' : '']"
          data-item="11"
          @click="openStep(11)"
        >
          <img src="@/assets/img/modules/module-8/object-11.svg" alt="" />
        </div>

        <div
          class="interactive-item"
          :class="[moduleStep == 12 ? 'pulse' : '']"
          data-item="12"
          @click="showQuiz = true"
        >
          <img src="@/assets/img/modules/module-8/object-12.svg" alt="" />
        </div>
        <div
          class="arrow-template"
          v-for="step in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
          :class="[
            moduleStep == step ? 'show' : '',
            !showArrow && moduleStep == step ? 'easy-hide' : '',
          ]"
          :data-item="step"
        >
          <div class="arrow-template_img"></div>
        </div>

        <transition name="fade" mode="out-in">
          <div class="modal-template glasses-modal" v-show="showGlassesModal">
            <div class="modal-content">
              <div class="tabs-modal__inner">
                <div class="tabs-content__inner">
                  <div class="tabs-content__title">
                    Каждый новый сотрудник компании получает в подарок
                    приветственный пакет. Ты уже забрал свой?
                    <br /><br />
                    А бонусом к этому пакету есть
                    <a
                      href="https://t.me/addstickers/Hochland_rus"
                      target="_blank"
                      >стикеры в Телеграме</a
                    >
                    — забирай их себе и отправляй коллегам.
                  </div>

                  <div class="modal-btn" @click="compliteStep(1)">Далее</div>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade" mode="out-in">
          <div class="modal-template reward-modal" v-show="showRewardModal">
            <div class="modal-content">
              <div class="tabs-modal__inner">
                <div class="tabs-content__inner">
                  <div class="tabs-content__title">
                    Ты знаком с премией «Лидеры года»? Она проходит ежегодно.
                    Участвовать может каждый, независимо от стажа и должности.
                  </div>
                  <div class="tabs-content__title _small">
                    Всего пять номинаций:
                  </div>

                  <div class="phone-modal__list">
                    <ul>
                      <li class="list-item">
                        «Быстрый старт» — для новых сотрудников
                      </li>
                      <li>
                        «Лидер с большой буквы» — для руководителей команд
                      </li>
                      <li>
                        «Инноватор года» — для сотрудников, которые предложили
                        прорывное решение для компании
                      </li>
                      <li>
                        «Лидер в профессии» — для высокоэффективных сотрудников
                      </li>
                      <li>
                        «Проект года» — специальная командная номинация для тех,
                        кто готов вывести кросс-функциональное взаимодействие в
                        компании на новый уровень
                      </li>
                    </ul>
                    <p
                      class="tabs-content__title _small"
                      style="font-weight: 600"
                    >
                      Больше информации ты можешь найти на
                      <a
                        href="https://hochland.sharepoint.com/sites/thebestemployeeoftheyear/SitePages/EventPlanHome.aspx"
                        target="_blank"
                        >сайте премии</a
                      >:
                    </p>
                  </div>
                  <div class="modal-btn" @click="compliteStep(2)">
                    Прочитано
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <!-- sticker-modal - 1  -->
        <transition name="fade" mode="out-in">
          <div
            class="sticker-modal"
            data-modal="1"
            v-show="showStickerModalOne"
          >
            <div class="sticker-modal__content">
              <div class="sticker-modal__ico">
                <img
                  src="@/assets/img/modules/module-8/sticker-modal-ico-1.svg"
                  alt=""
                />
              </div>
              <div class="sticker-modal__inner">
                <div class="sticker-modal__text">
                  А ты знаешь, что сотрудник компании получает частичная
                  компенсация питания?
                </div>
                <div class="modal-btn" @click="compliteStep(3)">Дальше</div>
              </div>
            </div>
          </div>
        </transition>
        <!-- sticker-modal - 2  -->
        <transition name="fade" mode="out-in">
          <div
            class="sticker-modal"
            data-modal="2"
            v-show="showStickerModalTwo"
          >
            <div class="sticker-modal__content">
              <div class="sticker-modal__ico">
                <img
                  src="@/assets/img/modules/module-8/sticker-modal-ico-2.svg"
                  alt=""
                />
              </div>
              <div class="sticker-modal__inner">
                <swiper
                  class="sticker-modal__slider"
                  :modules="[Navigation, EffectFade, Pagination]"
                  :slides-per-view="1"
                  effect="fade"
                  :fadeEffect="{
                    crossFade: true,
                  }"
                  :navigation="{
                    prevEl: '.sticker-prev-btn',
                    nextEl: '.sticker-next-btn',
                  }"
                  :pagination="{
                    el: '.sticker-pagination',
                    type: 'bullets',
                  }"
                  @reachEnd="() => (busSliderWiewed = true)"
                >
                  <swiper-slide class="sticker-slide">
                    <div class="sticker-slide__head">
                      <div class="sticker-slide__ico">
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
                            fill="#0ABBEF"
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
                          <path d="M32.3333 13V16.1429Z" fill="white" />
                          <path d="M32.3333 22.4286V25.5714Z" fill="white" />
                          <path d="M32.3333 31.8571V35Z" fill="white" />
                          <path
                            d="M16.2222 13H38.7778C39.6324 13 40.4519 13.3311 41.0562 13.9205C41.6605 14.5099 42 15.3093 42 16.1429V20.8571C41.1454 20.8571 40.3258 21.1883 39.7215 21.7777C39.1173 22.3671 38.7778 23.1665 38.7778 24C38.7778 24.8335 39.1173 25.6329 39.7215 26.2223C40.3258 26.8117 41.1454 27.1429 42 27.1429V31.8571C42 32.6907 41.6605 33.4901 41.0562 34.0795C40.4519 34.6689 39.6324 35 38.7778 35H16.2222C15.3676 35 14.5481 34.6689 13.9438 34.0795C13.3395 33.4901 13 32.6907 13 31.8571V27.1429C13.8546 27.1429 14.6742 26.8117 15.2785 26.2223C15.8827 25.6329 16.2222 24.8335 16.2222 24C16.2222 23.1665 15.8827 22.3671 15.2785 21.7777C14.6742 21.1883 13.8546 20.8571 13 20.8571V16.1429C13 15.3093 13.3395 14.5099 13.9438 13.9205C14.5481 13.3311 15.3676 13 16.2222 13Z"
                            fill="white"
                          />
                          <path
                            d="M32.3333 13V16.1429M32.3333 22.4286V25.5714M32.3333 31.8571V35M16.2222 13H38.7778C39.6324 13 40.4519 13.3311 41.0562 13.9205C41.6605 14.5099 42 15.3093 42 16.1429V20.8571C41.1454 20.8571 40.3258 21.1883 39.7215 21.7777C39.1173 22.3671 38.7778 23.1665 38.7778 24C38.7778 24.8335 39.1173 25.6329 39.7215 26.2223C40.3258 26.8117 41.1454 27.1429 42 27.1429V31.8571C42 32.6907 41.6605 33.4901 41.0562 34.0795C40.4519 34.6689 39.6324 35 38.7778 35H16.2222C15.3676 35 14.5481 34.6689 13.9438 34.0795C13.3395 33.4901 13 32.6907 13 31.8571V27.1429C13.8546 27.1429 14.6742 26.8117 15.2785 26.2223C15.8827 25.6329 16.2222 24.8335 16.2222 24C16.2222 23.1665 15.8827 22.3671 15.2785 21.7777C14.6742 21.1883 13.8546 20.8571 13 20.8571V16.1429C13 15.3093 13.3395 14.5099 13.9438 13.9205C14.5481 13.3311 15.3676 13 16.2222 13Z"
                            stroke="black"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div class="sticker-slide__title">Оплата проезда</div>
                    </div>
                    <div class="sticker-slide__body">
                      Компания оплачивает единый проездной билет на 30 дней или
                      билет на количество поездок от 10 и более сотрудникам,
                      имеющим постоянное рабочее место в московском офисе и
                      отработавшим в ЛеФорте не менее 10 рабочих дней в течение
                      месяца.
                    </div>
                    <div class="sticker-slide__footer"></div>
                  </swiper-slide>

                  <swiper-slide class="sticker-slide">
                    <div class="sticker-slide__head">
                      <div class="sticker-slide__ico">
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
                            fill="#76B82A"
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
                            d="M14.3 31.8571C14.3 32.6907 14.6477 33.4901 15.2665 34.0795C15.8854 34.6689 16.7248 35 17.6 35C18.4752 35 19.3146 34.6689 19.9335 34.0795C20.5523 33.4901 20.9 32.6907 20.9 31.8571C20.9 31.0236 20.5523 30.2242 19.9335 29.6348C19.3146 29.0454 18.4752 28.7143 17.6 28.7143C16.7248 28.7143 15.8854 29.0454 15.2665 29.6348C14.6477 30.2242 14.3 31.0236 14.3 31.8571Z"
                            fill="white"
                          />
                          <path
                            d="M34.1 31.8571C34.1 32.6907 34.4477 33.4901 35.0665 34.0795C35.6854 34.6689 36.5248 35 37.4 35C38.2752 35 39.1146 34.6689 39.7335 34.0795C40.3523 33.4901 40.7 32.6907 40.7 31.8571C40.7 31.0236 40.3523 30.2242 39.7335 29.6348C39.1146 29.0454 38.2752 28.7143 37.4 28.7143C36.5248 28.7143 35.6854 29.0454 35.0665 29.6348C34.4477 30.2242 34.1 31.0236 34.1 31.8571Z"
                            fill="white"
                          />
                          <path
                            d="M14.3 31.8571H11V14.5714C11 14.1547 11.1738 13.755 11.4833 13.4603C11.7927 13.1656 12.2124 13 12.65 13H35.75C37.938 13 40.0365 14.1589 41.5836 16.2218C43.1308 18.2847 44 21.0826 44 24V31.8571H40.7M34.1 31.8571H20.9Z"
                            fill="white"
                          />
                          <path d="M34.1 13L36.575 24H44" fill="white" />
                          <path d="M11 20.8571H35.75Z" fill="white" />
                          <path d="M19.25 13V20.8571Z" fill="white" />
                          <path d="M27.5 13V20.8571Z" fill="white" />
                          <path
                            d="M14.3 31.8571C14.3 32.6907 14.6477 33.4901 15.2665 34.0795C15.8854 34.6689 16.7248 35 17.6 35C18.4752 35 19.3146 34.6689 19.9335 34.0795C20.5523 33.4901 20.9 32.6907 20.9 31.8571M14.3 31.8571C14.3 31.0236 14.6477 30.2242 15.2665 29.6348C15.8854 29.0454 16.7248 28.7143 17.6 28.7143C18.4752 28.7143 19.3146 29.0454 19.9335 29.6348C20.5523 30.2242 20.9 31.0236 20.9 31.8571M14.3 31.8571H11V14.5714C11 14.1547 11.1738 13.755 11.4833 13.4603C11.7927 13.1656 12.2124 13 12.65 13H35.75C37.938 13 40.0365 14.1589 41.5836 16.2218C43.1308 18.2847 44 21.0826 44 24M20.9 31.8571H34.1M34.1 31.8571C34.1 32.6907 34.4477 33.4901 35.0665 34.0795C35.6854 34.6689 36.5248 35 37.4 35C38.2752 35 39.1146 34.6689 39.7335 34.0795C40.3523 33.4901 40.7 32.6907 40.7 31.8571M34.1 31.8571C34.1 31.0236 34.4477 30.2242 35.0665 29.6348C35.6854 29.0454 36.5248 28.7143 37.4 28.7143C38.2752 28.7143 39.1146 29.0454 39.7335 29.6348C40.3523 30.2242 40.7 31.0236 40.7 31.8571M40.7 31.8571H44V24M44 24H36.575L34.1 13M11 20.8571H35.75M19.25 13V20.8571M27.5 13V20.8571"
                            stroke="black"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div class="sticker-slide__title">Автобус</div>
                    </div>
                    <div class="sticker-slide__body">
                      Если ты работаешь в РАОС, то на завод тебя отвезет
                      корпоративный автобус.
                      <a
                        target="_blank"
                        href="https://hochland.sharepoint.com/sites/portal-ru/SiteAssets/Forms/AllItems.aspx?id=%2Fsites%2Fportal-ru%2FSiteAssets%2FSitePages%2Fportal-ru%2F%D0%9C%D0%B0%D1%80%D1%88%D1%80%D1%83%D1%82%D1%8B%20%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B8%20%D0%B8%20%D0%BF%D1%80%D0%BE%D1%82%D1%8F%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8C.pdf&parent=%2Fsites%2Fportal-ru%2FSiteAssets%2FSitePages%2Fportal-ru"
                      >
                        Просто выбери удобный для себя маршрут и изучи
                        расписание. корпоративный автобус.
                      </a>
                    </div>
                    <div class="sticker-slide__footer"></div>
                  </swiper-slide>

                  <swiper-slide class="sticker-slide">
                    <div class="sticker-slide__head">
                      <div class="sticker-slide__ico">
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
                            d="M15.4444 31.6154C15.4444 32.513 15.8073 33.3739 16.4533 34.0087C17.0993 34.6434 17.9754 35 18.8889 35C19.8024 35 20.6785 34.6434 21.3245 34.0087C21.9704 33.3739 22.3333 32.513 22.3333 31.6154C22.3333 30.7177 21.9704 29.8568 21.3245 29.2221C20.6785 28.5874 19.8024 28.2308 18.8889 28.2308C17.9754 28.2308 17.0993 28.5874 16.4533 29.2221C15.8073 29.8568 15.4444 30.7177 15.4444 31.6154Z"
                            fill="white"
                          />
                          <path
                            d="M32.6667 31.6154C32.6667 32.513 33.0296 33.3739 33.6755 34.0087C34.3215 34.6434 35.1976 35 36.1111 35C37.0246 35 37.9007 34.6434 38.5467 34.0087C39.1927 33.3739 39.5556 32.513 39.5556 31.6154C39.5556 30.7177 39.1927 29.8568 38.5467 29.2221C37.9007 28.5874 37.0246 28.2308 36.1111 28.2308C35.1976 28.2308 34.3215 28.5874 33.6755 29.2221C33.0296 29.8568 32.6667 30.7177 32.6667 31.6154Z"
                            fill="white"
                          />
                          <path
                            d="M15.4444 31.6154H12V21.4615L15.4444 13H30.9444L37.8333 21.4615H39.5556C40.4691 21.4615 41.3452 21.8181 41.9911 22.4529C42.6371 23.0876 43 23.9485 43 24.8462V31.6154H39.5556M32.6667 31.6154H22.3333ZM12 21.4615H37.8333ZM27.5 21.4615V13Z"
                            fill="white"
                          />
                          <path
                            d="M15.4444 31.6154C15.4444 32.513 15.8073 33.3739 16.4533 34.0087C17.0993 34.6434 17.9754 35 18.8889 35C19.8024 35 20.6785 34.6434 21.3245 34.0087C21.9704 33.3739 22.3333 32.513 22.3333 31.6154M15.4444 31.6154C15.4444 30.7177 15.8073 29.8568 16.4533 29.2221C17.0993 28.5874 17.9754 28.2308 18.8889 28.2308C19.8024 28.2308 20.6785 28.5874 21.3245 29.2221C21.9704 29.8568 22.3333 30.7177 22.3333 31.6154M15.4444 31.6154H12V21.4615M22.3333 31.6154H32.6667M32.6667 31.6154C32.6667 32.513 33.0296 33.3739 33.6755 34.0087C34.3215 34.6434 35.1976 35 36.1111 35C37.0246 35 37.9007 34.6434 38.5467 34.0087C39.1927 33.3739 39.5556 32.513 39.5556 31.6154M32.6667 31.6154C32.6667 30.7177 33.0296 29.8568 33.6755 29.2221C34.3215 28.5874 35.1976 28.2308 36.1111 28.2308C37.0246 28.2308 37.9007 28.5874 38.5467 29.2221C39.1927 29.8568 39.5556 30.7177 39.5556 31.6154M39.5556 31.6154H43V24.8462C43 23.9485 42.6371 23.0876 41.9911 22.4529C41.3452 21.8181 40.4691 21.4615 39.5556 21.4615H37.8333M12 21.4615L15.4444 13H30.9444L37.8333 21.4615M12 21.4615H37.8333M27.5 21.4615V13"
                            stroke="black"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div class="sticker-slide__title">Оплата проезда</div>
                    </div>
                    <div class="sticker-slide__body">
                      У тебя есть корпоративный автомобиль, но ты не знаешь, к
                      кому обратиться с вопросами по его использованию? Свяжись
                      с менеджером по транспорту.
                    </div>
                    <div class="sticker-slide__footer"></div>
                  </swiper-slide>

                  <template v-slot:container-end>
                    <div class="sticker-end">
                      <div class="sticker-pagination"></div>
                      <div class="nav-buttons">
                        <div class="sticker-prev-btn">
                          <svg
                            width="60"
                            height="60"
                            viewBox="0 0 60 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30.3725 59.0779C46.0703 59.0779 58.7958 46.1716 58.7958 30.2509C58.7958 14.3301 46.0703 1.42383 30.3725 1.42383C14.6748 1.42383 1.94922 14.3301 1.94922 30.2509C1.94922 46.1716 14.6748 59.0779 30.3725 59.0779Z"
                              fill="#23C2F1"
                            />
                            <path
                              d="M51.5694 10.8692C54.0584 13.7193 56.146 16.9766 57.5912 20.4782C59.0365 24.0612 59.9197 27.8885 60 31.8787C60 35.8689 59.2774 39.8591 57.6715 43.5235C56.0657 47.188 53.5767 50.4453 50.6059 53.0511C47.5548 55.6569 44.0219 57.5299 40.3285 58.6699C36.6351 59.81 32.7811 60.2172 28.9271 59.8914C21.2993 59.4028 13.9125 56.1455 8.45266 50.5267C5.72274 47.758 3.47457 44.4193 2.02932 40.6734C0.584063 36.9275 -0.138564 32.9373 0.0220199 28.8657C0.182604 20.8039 3.79574 12.7421 9.73733 7.3676C12.7081 4.68034 16.241 2.5631 20.0147 1.34162C23.7884 0.120131 27.803 -0.287031 31.7373 0.201562C35.5913 0.690156 39.365 1.99307 42.657 3.78458C46.0292 5.65753 49 8.01906 51.4891 10.8692H51.5694ZM51.2482 11.1949C48.7591 8.42622 45.6278 6.22755 42.2555 4.8432C38.8833 3.45885 35.1898 2.88883 31.657 2.97026C28.1241 3.05169 24.5913 3.86602 21.3796 5.16893C18.168 6.47185 15.1972 8.34479 12.6278 10.7063C10.0585 13.0679 8.0512 15.918 6.44536 19.0124C4.91982 22.1883 4.03661 25.6084 3.71544 29.11C3.23369 36.1132 5.48186 43.4421 9.9782 49.0609C12.2264 51.8296 15.1169 54.2726 18.4088 55.9012C21.6205 57.5299 25.3139 58.5071 28.9271 58.5885C32.5402 58.6699 36.2336 57.9371 39.5256 56.5527C42.8176 55.0869 45.7884 53.0511 48.2774 50.5267C53.2555 45.5593 56.5474 38.9633 57.4307 31.7159C57.8321 28.1328 57.6715 24.387 56.5474 20.8039C55.5037 17.2209 53.6569 13.8822 51.1679 11.1135L51.2482 11.1949Z"
                              fill="black"
                            />
                            <path
                              d="M37.0902 39.9163L35.8887 38.5553L37.0902 39.9163C35.2175 41.5696 32.2723 41.5696 30.3996 39.9163L22.7754 33.1853C20.7571 31.4034 20.7571 28.3989 22.7754 26.617L30.3996 19.886C32.2723 18.2327 35.2175 18.2327 37.0902 19.886L35.7666 21.3853L37.0902 19.886C39.1085 21.6679 39.1085 24.6724 37.0902 26.4543L33.186 29.9011L37.0902 33.348C39.1085 35.1299 39.1085 38.1344 37.0902 39.9163Z"
                              fill="white"
                              stroke="black"
                              stroke-width="4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div class="sticker-next-btn">
                          <svg
                            width="60"
                            height="60"
                            viewBox="0 0 60 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30.3725 59.0779C46.0703 59.0779 58.7958 46.1716 58.7958 30.2509C58.7958 14.3301 46.0703 1.42383 30.3725 1.42383C14.6748 1.42383 1.94922 14.3301 1.94922 30.2509C1.94922 46.1716 14.6748 59.0779 30.3725 59.0779Z"
                              fill="#23C2F1"
                            />
                            <path
                              d="M51.5694 10.8692C54.0584 13.7193 56.146 16.9766 57.5912 20.4782C59.0365 24.0612 59.9197 27.8885 60 31.8787C60 35.8689 59.2774 39.8591 57.6715 43.5235C56.0657 47.188 53.5767 50.4453 50.6059 53.0511C47.5548 55.6569 44.0219 57.5299 40.3285 58.6699C36.6351 59.81 32.7811 60.2172 28.9271 59.8914C21.2993 59.4028 13.9125 56.1455 8.45266 50.5267C5.72274 47.758 3.47457 44.4193 2.02932 40.6734C0.584063 36.9275 -0.138564 32.9373 0.0220199 28.8657C0.182604 20.8039 3.79574 12.7421 9.73733 7.3676C12.7081 4.68034 16.241 2.5631 20.0147 1.34162C23.7884 0.120131 27.803 -0.287031 31.7373 0.201562C35.5913 0.690156 39.365 1.99307 42.657 3.78458C46.0292 5.65753 49 8.01906 51.4891 10.8692H51.5694ZM51.2482 11.1949C48.7591 8.42622 45.6278 6.22755 42.2555 4.8432C38.8833 3.45885 35.1898 2.88883 31.657 2.97026C28.1241 3.05169 24.5913 3.86602 21.3796 5.16893C18.168 6.47185 15.1972 8.34479 12.6278 10.7063C10.0585 13.0679 8.0512 15.918 6.44536 19.0124C4.91982 22.1883 4.03661 25.6084 3.71544 29.11C3.23369 36.1132 5.48186 43.4421 9.9782 49.0609C12.2264 51.8296 15.1169 54.2726 18.4088 55.9012C21.6205 57.5299 25.3139 58.5071 28.9271 58.5885C32.5402 58.6699 36.2336 57.9371 39.5256 56.5527C42.8176 55.0869 45.7884 53.0511 48.2774 50.5267C53.2555 45.5593 56.5474 38.9633 57.4307 31.7159C57.8321 28.1328 57.6715 24.387 56.5474 20.8039C55.5037 17.2209 53.6569 13.8822 51.1679 11.1135L51.2482 11.1949Z"
                              fill="black"
                            />
                            <path
                              d="M22.775 39.9163L23.9765 38.5553L22.775 39.9163C24.6477 41.5696 27.5929 41.5696 29.4657 39.9163L37.0898 33.1853C39.1081 31.4034 39.1081 28.3989 37.0898 26.617L29.4657 19.886C27.5929 18.2327 24.6477 18.2327 22.775 19.886L24.0987 21.3853L22.775 19.886C20.7567 21.6679 20.7567 24.6724 22.775 26.4543L26.6793 29.9011L22.775 33.348C20.7567 35.1299 20.7567 38.1344 22.775 39.9163Z"
                              fill="white"
                              stroke="black"
                              stroke-width="4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </template>
                </swiper>
                <div class="sticker-modal__right">
                  <div class="sticker-modal__card">
                    <div class="sticker-modal__card-inner">
                      <div class="card-inner__name">Андрей Гонтарь</div>
                      <div class="card-inner__descr">
                        старший бренд менеджер
                      </div>
                      <div class="card-inner__line"></div>
                      <a href="tel:+79161011461" class="card-inner__link"
                        >+7 (916) 1011461</a
                      >
                      <a href="tel:+749577702061151" class="card-inner__link"
                        >+7 (495) 7770206-1151</a
                      >
                      <a
                        href="mailto:andrey.gontar@hochland.ru"
                        class="card-inner__link"
                        >andrey.gontar@hochland.ru</a
                      >
                    </div>
                  </div>
                  <button
                    class="modal-btn"
                    :disabled="!busSliderWiewed"
                    @click="compliteStep(4)"
                  >
                    Дальше
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <!-- sticker-modal - 3  -->
        <transition name="fade" mode="out-in">
          <div
            class="sticker-modal"
            data-modal="3"
            v-show="showStickerModalThree"
          >
            <div class="sticker-modal__content">
              <div class="sticker-modal__ico">
                <img
                  src="@/assets/img/modules/module-8/sticker-modal-ico-3.svg"
                  alt=""
                />
              </div>
              <div class="sticker-modal__inner">
                <div class="sticker-modal__text">
                  Чем дольше ты работаешь в компании, тем ближе возможность
                  получить премию. Все, у кого стаж кратен пяти годам, получают
                  единовременную премию. Поздравления юбиляров проходят на
                  традиционных летних корпоративных праздниках.
                </div>
                <div class="modal-btn" @click="compliteStep(5)">Дальше</div>
              </div>
            </div>
          </div>
        </transition>
        <!-- sticker-modal - 4  -->
        <transition name="fade" mode="out-in">
          <div
            class="sticker-modal"
            data-modal="4"
            v-show="showStickerModalFour"
          >
            <div class="sticker-modal__content">
              <div class="sticker-modal__ico">
                <img
                  src="@/assets/img/modules/module-8/sticker-modal-ico-4.svg"
                  alt=""
                />
              </div>
              <div class="sticker-modal__inner">
                <div class="sticker-modal__text">
                  А ещё за каждые пять лет стажа ты получаешь один
                  дополнительный день отпуска. Планирование отпусков проходит в
                  декабре.
                </div>
                <div class="modal-btn" @click="compliteStep(6)">Дальше</div>
              </div>
            </div>
          </div>
        </transition>
        <!-- sticker-modal - 5  -->
        <transition name="fade" mode="out-in">
          <div
            class="sticker-modal"
            data-modal="5"
            v-show="showStickerModalFive"
          >
            <div class="sticker-modal__content">
              <div class="sticker-modal__ico">
                <img
                  src="@/assets/img/modules/module-8/sticker-modal-ico-5.svg"
                  alt=""
                />
              </div>
              <div class="sticker-modal__inner">
                <div class="sticker-modal__text">
                  Если ты заболел и ушёл на больничный, компания готова помочь.
                  <br />
                  Доплата осуществляется в зависимости от стажа:
                  <ul>
                    <li>от 3 месяцев до 1 года — 50% от оклада</li>
                    <li>от 1 года — 75% оклада</li>
                  </ul>
                </div>
                <div class="modal-btn" @click="compliteStep(7)">Дальше</div>
              </div>
            </div>
          </div>
        </transition>
        <!-- sticker-modal - 6  -->
        <transition name="fade" mode="out-in">
          <div
            class="sticker-modal"
            data-modal="6"
            v-show="showStickerModalSix"
          >
            <div class="sticker-modal__content">
              <div class="sticker-modal__ico">
                <img
                  src="@/assets/img/modules/module-8/sticker-modal-ico-6.svg"
                  alt=""
                />
              </div>
              <div class="sticker-modal__inner">
                <div class="sticker-modal__text">
                  Если вдруг ты оказался в сложной жизненной ситуации, компания
                  готова оказать тебе материальную поддержку. Для этого обратись
                  к специалисту по компенсациям и льготам Юлии Гонтаренко.
                </div>
                <div class="person-block">
                  <div class="person-block__left">
                    <div class="person-block__name">Юлия Гонтаренко</div>
                    <div class="person-block__descr">
                      старший бренд менеджер
                    </div>
                  </div>
                  <div class="person-block__right">
                    <a href="tel:+7 (916) 1011461" class="person-block__link"
                      >+7 (916) 1011461</a
                    >
                    <a
                      href="tel:+7 (495) 7770206-1151"
                      class="person-block__link"
                      >+7 (495) 7770206-1151</a
                    >
                    <a
                      href="mailto:andrey.gontar@hochland.ru"
                      class="person-block__link"
                      >andrey.gontar@hochland.ru</a
                    >
                  </div>
                </div>
                <div class="modal-btn" @click="compliteStep(8)">Дальше</div>
              </div>
            </div>
          </div>
        </transition>

        <!-- sticker-modal - 7  -->
        <transition name="fade" mode="out-in">
          <div
            class="sticker-modal"
            data-modal="7"
            v-show="showStickerModalSeven"
          >
            <div class="sticker-modal__content">
              <div class="sticker-modal__ico">
                <img
                  src="@/assets/img/modules/module-8/sticker-modal-ico-7.svg"
                  alt=""
                />
              </div>
              <div class="sticker-modal__inner">
                <div class="sticker-modal__text">
                  Как ты уже понял, в компании много льгот, компенсаций и
                  премий. Подробнее о них ты можешь узнать из специального
                  положения
                </div>
                <a :href="pdfFilePath" target="_blank" class="modal-btn pdf-btn"
                  >Скачать PDF</a
                >
                <div class="line"></div>
                <div class="modal-btn" @click="compliteStep(9)">Дальше</div>
              </div>
            </div>
          </div>
        </transition>

        <!-- sticker-modal - 8  -->
        <transition name="fade" mode="out-in">
          <div
            class="sticker-modal"
            data-modal="8"
            v-show="showStickerModalEight"
          >
            <div class="sticker-modal__content">
              <div class="sticker-modal__ico">
                <img
                  src="@/assets/img/modules/module-8/sticker-modal-ico-8.svg"
                  alt=""
                />
              </div>
              <div class="sticker-modal__inner">
                <div class="sticker-modal__text">
                  У тебя есть дети до 14 лет? Если да, то к Новому году подарок
                  от компании получишь не только ты, но и твой ребенок. А ещё в
                  компании проходят детские экскурсии на производство — анонсы
                  мероприятий можно найти в новостных лентах.
                </div>
                <div class="modal-btn" @click="compliteStep(10)">Дальше</div>
              </div>
            </div>
          </div>
        </transition>

        <!-- sticker-modal - 9  -->
        <transition name="fade" mode="out-in">
          <div
            class="sticker-modal"
            data-modal="9"
            v-show="showStickerModalNine"
          >
            <div class="sticker-modal__content">
              <div class="sticker-modal__ico">
                <img
                  src="@/assets/img/modules/module-8/sticker-modal-ico-9.svg"
                  alt=""
                />
              </div>
              <div class="sticker-modal__inner">
                <div class="sticker-modal__text">
                  Один раз в месяц тебе будут выдавать набор сыров из пяти
                  единиц продукции. Работая в компании, ты первым будешь
                  пробовать все новинки.
                </div>
                <div class="modal-btn" @click="compliteStep(11)">Дальше</div>
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
            :step="8"
          >
            <div class="result__image">
              <img
                src="@/assets/img/modules/module-8/modal-result.png"
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
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import QuizModal from "@/components/QuizModal.vue";
import { ref, onMounted, computed } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

import { useGameStore } from "@/stores/GameStore.js";
const store = useGameStore();
const pdfFilePath = new URL(
  "@/assets/files/Положение_о_премировании,_льготах_и_компенсациях_редакция_8_с_01.pdf",
  import.meta.url
);
const stepLoad = ref(false);
const moduleStep = ref(null);
const isInteractive = ref(false);
const showGlassesModal = ref(false);
const showRewardModal = ref(false);
const showStickerModalOne = ref(false);
const showStickerModalTwo = ref(false);
const showStickerModalThree = ref(false);
const showStickerModalFour = ref(false);
const showStickerModalFive = ref(false);
const showStickerModalSix = ref(false);
const showStickerModalSeven = ref(false);
const showStickerModalEight = ref(false);
const showStickerModalNine = ref(false);
const showQuiz = ref(false);
const busSliderWiewed = ref(false);
const showArrow = ref(true);

const questionsList = [
  {
    id: 0,
    title: "За что начисляют дополнительный отпускной день? ",
    options: [
      {
        id: 0,
        title: "За примерное поведение.",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "За каждые пять лет стажа.",
        correctAnswer: true,
      },
      {
        id: 2,
        title: "За лучшее выступление на корпоративе.",
        correctAnswer: false,
      },
      {
        id: 3,
        title: "За соблюдение этикета.",
        correctAnswer: false,
      },
    ],
  },

  {
    id: 1,
    title:
      "Сколько единиц продукции ты будешь получать каждый месяц в наборе сыров? ",
    options: [
      {
        id: 0,
        title: "3",
        correctAnswer: false,
      },
      {
        id: 1,
        title: "4",
        correctAnswer: false,
      },
      {
        id: 2,
        title: "5",
        correctAnswer: true,
      },
      {
        id: 3,
        title: "6",
        correctAnswer: false,
      },
    ],
  },
];

const openStep = (step) => {
  const currentStep = moduleStep.value;
  showArrow.value = false;
  if (step == 1 && currentStep >= 1) {
    showGlassesModal.value = true;
  }

  if (step == 2 && currentStep >= 2) {
    showRewardModal.value = true;
  }

  if (step == 3 && currentStep >= 3) {
    showStickerModalOne.value = true;
  }

  if (step == 4 && currentStep >= 4) {
    showStickerModalTwo.value = true;
  }

  if (step == 5 && currentStep >= 5) {
    showStickerModalThree.value = true;
  }

  if (step == 6 && currentStep >= 6) {
    showStickerModalFour.value = true;
  }

  if (step == 7 && currentStep >= 7) {
    showStickerModalFive.value = true;
  }

  if (step == 8 && currentStep >= 8) {
    showStickerModalSix.value = true;
  }
  if (step == 9 && currentStep >= 9) {
    showStickerModalSeven.value = true;
  }
  if (step == 10 && currentStep >= 10) {
    showStickerModalEight.value = true;
  }

  if (step == 11 && currentStep >= 11) {
    showStickerModalNine.value = true;
  }
};

const compliteStep = (step) => {
  showArrow.value = true;
  if (step == 1) {
    showGlassesModal.value = false;
  }

  if (step == 2) {
    showRewardModal.value = false;
  }

  if (step == 3) {
    showStickerModalOne.value = false;
  }

  if (step == 4) {
    showStickerModalTwo.value = false;
  }
  if (step == 5) {
    showStickerModalThree.value = false;
  }

  if (step == 6) {
    showStickerModalFour.value = false;
  }

  if (step == 7) {
    showStickerModalFive.value = false;
  }

  if (step == 8) {
    showStickerModalSix.value = false;
  }

  if (step == 9) {
    showStickerModalSeven.value = false;
  }

  if (step == 10) {
    showStickerModalEight.value = false;
  }

  if (step == 11) {
    showStickerModalNine.value = false;
  }

  if (moduleStep.value < step + 1) {
    moduleStep.value = step + 1;
  }
};

const compliteModule = () => {
  store.openNewStep(9);
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
.person-block {
  margin-bottom: fromWidth(35);
  padding: fromWidth(24);
  padding-right: fromWidth(35);
  padding-left: fromWidth(30);
  display: flex;
  gap: fromWidth(24);
  border-radius: fromWidth(20);
  border: fromWidth(4) solid #000;
  background: #fff;
  box-shadow: fromWidth(8) fromWidth(8) 0px 0px rgba(0, 0, 0, 0.25);
}
.person-block__name {
  color: #000;
  font-family: "Open Sans";
  font-size: fromWidth(20);
  font-weight: 700;
  line-height: normal;
}
.person-block__descr {
  color: #565656;
  font-family: "Open Sans";
  font-size: fromWidth(14);
  font-weight: 600;
  line-height: normal;
}
.person-block__right {
  border-left: fromWidth(2) solid #ddd;
  padding-left: fromWidth(24);
  display: flex;
  flex-direction: column;
  gap: fromWidth(6);
}
.person-block__link {
  color: #000;
  font-family: "Open Sans";
  font-size: fromWidth(16);
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
}
.sticker-modal__card {
  padding: fromWidth(32);
  margin-bottom: fromWidth(40);
  border-radius: fromWidth(32);
  background: #b2d2dc;
  height: fit-content;
}

.card-inner__name {
  color: #000;
  font-family: "Open Sans";
  font-size: fromWidth(32);
  font-weight: 700;
  line-height: normal;
}

.card-inner__descr {
  color: #565656;
  font-family: "Open Sans";
  font-size: fromWidth(24);
  font-weight: 600;
  line-height: normal;
}
.card-inner__line {
  margin: fromWidth(24) 0;
  width: 100%;
  height: fromWidth(2);
  background-color: #ddd;
}

.card-inner__link {
  display: block;
  color: #000;
  font-family: "Open Sans";
  font-size: fromWidth(24);
  font-weight: 700;
  line-height: normal;
  margin-bottom: fromWidth(6);
  text-decoration: none;
}
.sticker-modal__card-inner {
  padding: fromWidth(32);
  padding-top: fromWidth(20);
  padding-right: fromWidth(120);
  border-radius: fromWidth(20);
  border: fromWidth(4) solid #000;
  background: #fff;
  box-shadow: fromWidth(8) fromWidth(8) 0px 0px rgba(0, 0, 0, 0.25);
}
.sticker-end {
  z-index: 4;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0px fromWidth(40);
  padding-top: fromWidth(16);
  padding-bottom: fromWidth(24);
  display: flex;
  align-items: center;
  justify-content: space-between;
  &::before {
    position: absolute;
    left: fromWidth(40);
    top: 0;
    width: calc(100% - fromWidth(80));
    content: "";
    height: 2px;
    background-color: #ddd;
  }
  .nav-buttons {
    display: flex;
    align-items: center;
    gap: fromWidth(24);
    div {
      cursor: pointer;
    }
  }
  .swiper-pagination-bullet {
    width: fromWidth(18);
    height: fromWidth(18);
  }
}

.sticker-slide__footer {
  height: fromWidth(100);
}

.sticker-modal__right {
  position: relative;
  padding-left: fromWidth(44);
  border-left: fromWidth(2) solid #ddd;
}
.sticker-modal__slider {
  height: fit-content;
  width: fromWidth(750);
  margin: 0;
  border-radius: fromWidth(20);
  border: fromWidth(4) solid #000;
}
.sticker-slide__ico {
  width: fromWidth(55);
  height: fromWidth(48);
  svg {
    object-fit: contain;
    object-position: center;
    width: 100%;
    height: 100%;
  }
}
.sticker-slide__body {
  padding: fromWidth(32) fromWidth(40);
  padding-bottom: fromWidth(48);
  color: #000;
  font-family: "Open Sans";
  font-size: fromWidth(23);
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  a {
    text-decoration: none;
    color: #0abbef;
  }
}

.sticker-slide__head {
  background: linear-gradient(90deg, #f0e7f1 0%, #e2f2fa 100%);
  padding: fromWidth(24) fromWidth(32);
  color: #000;
  font-family: "Open Sans";
  font-size: fromWidth(24);
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: fromWidth(24);
}
.sticker-modal__content {
  padding: fromWidth(40);
  padding-right: fromWidth(135);
  display: flex;
  align-items: flex-start;
  gap: fromWidth(35);
  height: 100%;
  box-sizing: border-box;
}
.sticker-prev-btn,
.sticker-next-btn {
  width: fromWidth(60);
  height: fromWidth(60);
  svg {
    width: 100%;
    height: 100%;
  }
}
.sticker-modal__ico {
  width: fromWidth(130);
  height: fromWidth(130);
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.sticker-modal__inner {
  width: 100%;
  box-sizing: border-box;
  ul {
    padding-left: fromWidth(25);
  }
  li {
    &::marker {
      color: #0abbef;
      font-size: fromWidth(24);
      line-height: 100%;
    }
  }
}

.sticker-modal__text {
  color: #000;
  font-size: fromWidth(24);
  font-weight: 700;
  line-height: 158.333%; /* 158.333% */
  margin-bottom: fromWidth(40);
}

.sticker-modal {
  z-index: 10;
  font-family: "Open Sans";
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  left: 0;
  top: 0;
  .modal-btn {
    width: 100%;
    box-sizing: border-box;
    padding: fromWidth(29);
    background-position: center right fromWidth(130);
  }
  &[data-modal="1"] {
    left: 23%;
    top: 27%;
    background-image: url(@/assets/img/modules/module-8/sticker-modal-bg-1.svg);
    width: fromWidth(880);
    height: fromWidth(342);
  }

  &[data-modal="2"] {
    left: 8%;
    top: 26%;
    background-image: url(@/assets/img/modules/module-8/sticker-modal-bg-2.svg);
    width: fromWidth(1662);
    height: fromWidth(670);
    .sticker-modal__content {
      padding-right: fromWidth(40);
      padding-top: fromWidth(111);
    }
    .sticker-modal__inner {
      display: flex;
      justify-content: space-between;
      gap: fromWidth(44);
    }
  }
  &[data-modal="3"] {
    left: 21%;
    top: 39%;
    background-image: url(@/assets/img/modules/module-8/sticker-modal-bg-3.svg);
    width: fromWidth(880);
    height: fromWidth(495);
  }

  &[data-modal="4"] {
    left: 5%;
    top: 55%;
    background-image: url(@/assets/img/modules/module-8/sticker-modal-bg-4.svg);
    width: fromWidth(880);
    height: fromWidth(380);
  }

  &[data-modal="5"] {
    left: 9%;
    top: 41%;
    background-image: url(@/assets/img/modules/module-8/sticker-modal-bg-5.svg);
    width: fromWidth(880);
    height: fromWidth(494);
  }

  &[data-modal="6"] {
    left: 6%;
    top: 26%;
    background-image: url(@/assets/img/modules/module-8/sticker-modal-bg-6.svg);
    width: fromWidth(880);
    height: fromWidth(618);
    .sticker-modal__text {
      margin-bottom: fromWidth(35);
    }
  }

  &[data-modal="7"] {
    left: 14%;
    top: 26%;
    background-image: url(@/assets/img/modules/module-8/sticker-modal-bg-7.svg);
    width: fromWidth(880);
    height: fromWidth(560);
    .sticker-modal__text {
      margin-bottom: fromWidth(30);
    }
  }

  &[data-modal="8"] {
    left: 8%;
    top: 10%;
    background-image: url(@/assets/img/modules/module-8/sticker-modal-bg-8.svg);
    width: fromWidth(880);
    height: fromWidth(494);
  }

  &[data-modal="9"] {
    left: 17%;
    top: 54%;
    background-image: url(@/assets/img/modules/module-8/sticker-modal-bg-9.svg);
    width: fromWidth(880);
    height: fromWidth(380);
  }
}
.step-wrapper__content {
  background-image: url(@/assets/img/modules/module-8/module-8-bg-0.svg);
  background-size: contain;
}

.pdf-btn {
  width: 70% !important;
  display: block;
  text-decoration: none;
  text-align: left;
  margin-bottom: fromWidth(48);
  background-color: #0abbef;
  color: #fff;

  padding-left: fromWidth(48) !important;
  background-position: center right fromWidth(48) !important;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M18 2.57143C19.3109 2.57143 20.3736 3.55823 20.3736 4.77551V12.6789L22.2557 10.9313C23.1826 10.0705 24.6855 10.0705 25.6125 10.9313C26.5394 11.792 26.5394 13.1876 25.6125 14.0483L19.6784 19.5585C18.7514 20.4193 17.2486 20.4193 16.3216 19.5585L10.3875 14.0483C9.46057 13.1876 9.46057 11.792 10.3875 10.9313C11.3145 10.0705 12.8174 10.0705 13.7443 10.9313L15.6264 12.6789V4.77551C15.6264 3.55823 16.6891 2.57143 18 2.57143ZM4.94506 22.4082C6.25597 22.4082 7.31868 23.395 7.31868 24.6122V29.0204H28.6813V24.6122C28.6813 23.395 29.744 22.4082 31.0549 22.4082C32.3659 22.4082 33.4286 23.395 33.4286 24.6122V29.0204C33.4286 30.1895 32.9284 31.3108 32.0381 32.1375C31.1479 32.9641 29.9404 33.4286 28.6813 33.4286H7.31868C6.05963 33.4286 4.85215 32.9641 3.96187 32.1375C3.07158 31.3108 2.57143 30.1895 2.57143 29.0204V24.6122C2.57143 23.395 3.63414 22.4082 4.94506 22.4082Z' fill='white'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M18 0C20.5483 0 22.9451 1.96193 22.9451 4.77551V7.81018C24.4867 7.50793 26.1488 7.92019 27.3622 9.04695C29.3848 10.925 29.3848 14.0546 27.3622 15.9326L21.4281 21.4428C19.5146 23.2197 16.4854 23.2197 14.5719 21.4428L8.6378 15.9326C6.61524 14.0546 6.61524 10.925 8.63779 9.04695L10.3875 10.9313C9.46057 11.792 9.46057 13.1876 10.3875 14.0483L16.3216 19.5585C17.2486 20.4193 18.7514 20.4193 19.6784 19.5585L25.6125 14.0483C26.5394 13.1876 26.5394 11.792 25.6125 10.9313C24.8912 10.2615 23.8211 10.1129 22.9451 10.4855C22.6953 10.5917 22.4613 10.7403 22.2557 10.9313L20.3736 12.6789V4.77551C20.3736 3.55823 19.3109 2.57143 18 2.57143C16.6891 2.57143 15.6264 3.55823 15.6264 4.77551V12.6789L13.7443 10.9313C13.5387 10.7403 13.3047 10.5917 13.0549 10.4855C12.1789 10.1129 11.1088 10.2615 10.3875 10.9313L8.63779 9.04695C9.85123 7.92019 11.5133 7.50793 13.0549 7.81018V4.77551C13.0549 1.96193 15.4517 0 18 0ZM4.94506 19.8367C7.49335 19.8367 9.89011 21.7987 9.89011 24.6122V26.449H26.1099V24.6122C26.1099 21.7987 28.5066 19.8367 31.0549 19.8367C33.6032 19.8367 36 21.7987 36 24.6122V29.0204C36 30.9356 35.1789 32.7301 33.7879 34.0218C32.4032 35.3075 30.5634 36 28.6813 36H7.31868C5.4366 36 3.59678 35.3075 2.21214 34.0218C0.821062 32.7301 0 30.9356 0 29.0204V24.6122C0 21.7987 2.39676 19.8367 4.94506 19.8367ZM7.31868 24.6122C7.31868 23.395 6.25597 22.4082 4.94506 22.4082C3.63414 22.4082 2.57143 23.395 2.57143 24.6122V29.0204C2.57143 30.1895 3.07158 31.3108 3.96187 32.1375C4.85215 32.9641 6.05963 33.4286 7.31868 33.4286H28.6813C29.9404 33.4286 31.1479 32.9641 32.0381 32.1375C32.9284 31.3108 33.4286 30.1895 33.4286 29.0204V24.6122C33.4286 23.395 32.3659 22.4082 31.0549 22.4082C29.744 22.4082 28.6813 23.395 28.6813 24.6122V29.0204H7.31868V24.6122Z' fill='white'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M18 0C20.5483 0 22.9451 1.96193 22.9451 4.77551V7.81018C24.4867 7.50793 26.1488 7.92019 27.3622 9.04695C29.3848 10.925 29.3848 14.0546 27.3622 15.9326L21.4281 21.4428C19.5146 23.2197 16.4854 23.2197 14.5719 21.4428L8.6378 15.9326C6.61524 14.0546 6.61524 10.925 8.63779 9.04695L10.3875 10.9313C9.46057 11.792 9.46057 13.1876 10.3875 14.0483L16.3216 19.5585C17.2486 20.4193 18.7514 20.4193 19.6784 19.5585L25.6125 14.0483C26.5394 13.1876 26.5394 11.792 25.6125 10.9313C24.8912 10.2615 23.8211 10.1129 22.9451 10.4855C22.6953 10.5917 22.4613 10.7403 22.2557 10.9313L20.3736 12.6789V4.77551C20.3736 3.55823 19.3109 2.57143 18 2.57143C16.6891 2.57143 15.6264 3.55823 15.6264 4.77551V12.6789L13.7443 10.9313C13.5387 10.7403 13.3047 10.5917 13.0549 10.4855C12.1789 10.1129 11.1088 10.2615 10.3875 10.9313L8.63779 9.04695C9.85123 7.92019 11.5133 7.50793 13.0549 7.81018V4.77551C13.0549 1.96193 15.4517 0 18 0ZM4.94506 19.8367C7.49335 19.8367 9.89011 21.7987 9.89011 24.6122V26.449H26.1099V24.6122C26.1099 21.7987 28.5066 19.8367 31.0549 19.8367C33.6032 19.8367 36 21.7987 36 24.6122V29.0204C36 30.9356 35.1789 32.7301 33.7879 34.0218C32.4032 35.3075 30.5634 36 28.6813 36H7.31868C5.4366 36 3.59678 35.3075 2.21214 34.0218C0.821062 32.7301 0 30.9356 0 29.0204V24.6122C0 21.7987 2.39676 19.8367 4.94506 19.8367ZM7.31868 24.6122C7.31868 23.395 6.25597 22.4082 4.94506 22.4082C3.63414 22.4082 2.57143 23.395 2.57143 24.6122V29.0204C2.57143 30.1895 3.07158 31.3108 3.96187 32.1375C4.85215 32.9641 6.05963 33.4286 7.31868 33.4286H28.6813C29.9404 33.4286 31.1479 32.9641 32.0381 32.1375C32.9284 31.3108 33.4286 30.1895 33.4286 29.0204V24.6122C33.4286 23.395 32.3659 22.4082 31.0549 22.4082C29.744 22.4082 28.6813 23.395 28.6813 24.6122V29.0204H7.31868V24.6122Z' fill='black'/%3e%3c/svg%3e ");
}
.line {
  height: 3px;
  background-color: #ddd;
  width: 100%;
  margin-bottom: fromWidth(40);
}

.modal-btn {
  padding-top: fromWidth(25) !important;
  padding-bottom: fromWidth(25) !important;
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
  &.easy-hide {
    opacity: 0;
    visibility: hidden;
  }

  &[data-item="1"] {
    left: 7%;
    width: 6%;
    height: 20%;
    top: 48%;
    z-index: 4;
    transform: rotate(31deg) scaleX(-1);
  }

  &[data-item="2"] {
    left: 26%;
    width: 6%;
    height: 20%;
    top: 12%;
    z-index: 4;
    transform: rotate(306deg);
  }

  &[data-item="3"] {
    left: 77%;
    width: 6%;
    height: 20%;
    top: 10%;
    z-index: 4;
    transform: rotate(45deg) scaleX(-1);
  }

  &[data-item="4"] {
    left: 71%;
    width: 6%;
    height: 20%;
    top: -4%;
    z-index: 4;
    transform: rotate(45deg) scaleX(-1);
  }

  &[data-item="5"] {
    left: 77%;
    width: 6%;
    height: 20%;
    top: 32%;
    z-index: 4;
    transform: rotate(82deg) scaleX(-1);
  }

  &[data-item="6"] {
    left: 44%;
    width: 6%;
    height: 20%;
    top: 42%;
    z-index: 4;
    transform: rotate(292deg);
  }

  &[data-item="7"] {
    left: 63%;
    width: 6%;
    height: 20%;
    top: 21%;
    z-index: 4;
    transform: rotate(34deg) scaleX(-1);
  }

  &[data-item="8"] {
    left: 43%;
    width: 6%;
    height: 20%;
    top: 25%;
    z-index: 4;
    transform: rotate(268deg);
  }

  &[data-item="9"] {
    left: 54%;
    width: 6%;
    height: 20%;
    top: 15%;
    z-index: 4;
    transform: rotate(294deg);
  }

  &[data-item="10"] {
    left: 46%;
    width: 6%;
    height: 20%;
    top: 5%;
    z-index: 4;
    transform: rotate(270deg);
  }

  &[data-item="11"] {
    left: 75%;
    width: 6%;
    height: 20%;
    top: 47%;
    z-index: 4;
    transform: rotate(78deg) scaleX(-1);
  }

  &[data-item="12"] {
    left: 19%;
    width: 6%;
    height: 20%;
    top: 57%;
    z-index: 4;
    transform: rotate(305deg);
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
    left: 0%;
    bottom: 12%;
    width: 18%;
    height: 17%;
  }

  &[data-item="2"] {
    left: 32%;
    bottom: 50.5%;
    width: 11%;
    height: 19.4%;
  }

  &[data-item="3"] {
    left: 69.5%;
    top: 26.5%;
    width: 7%;
    height: 13.4%;
  }

  &[data-item="4"] {
    left: 63.5%;
    top: 13%;
    width: 11%;
    height: 13.4%;
  }

  &[data-item="5"] {
    left: 67.5%;
    top: 40%;
    width: 7%;
    height: 12.5%;
  }

  &[data-item="6"] {
    left: 52%;
    top: 54.5%;
    width: 7.5%;
    height: 12.5%;
  }

  &[data-item="7"] {
    left: 56%;
    top: 42.5%;
    width: 10.5%;
    height: 12.5%;
  }

  &[data-item="8"] {
    left: 52%;
    top: 25.2%;
    width: 7.5%;
    height: 15.5%;
  }

  &[data-item="9"] {
    left: 61.5%;
    top: 26%;
    width: 5.5%;
    height: 10.5%;
  }

  &[data-item="10"] {
    left: 55.5%;
    top: 10%;
    width: 7%;
    height: 13%;
  }

  &[data-item="11"] {
    left: 63.5%;
    top: 55%;
    width: 9%;
    height: 12%;
  }

  &[data-item="12"] {
    left: 24.5%;
    top: 70%;
    width: 10%;
    height: 18%;
  }
}
</style>
