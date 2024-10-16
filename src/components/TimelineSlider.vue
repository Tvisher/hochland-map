<template>
  <swiper
    class="timeline-slider"
    :slides-per-view="'auto'"
    :centeredSlides="true"
    :centeredSlidesBounds="true"
    :speed="1000"
    :navigation="{
      prevEl: '.slider-prev-btn',
      nextEl: '.slider-next-btn',
    }"
    ref="timelineSlider"
    :modules="[Navigation]"
    @activeIndexChange="(swiper) => calcBallPosition(swiper.activeIndex)"
    @resize="(swiper) => calcBallPosition(swiper.activeIndex)"
    @init="(swiper) => calcBallPosition(swiper.activeIndex)"
  >
    <swiper-slide class="slide-item timeline-slide">
      <div class="timeline-slide__wrapper">
        <div class="timeline-slide__ico">
          <img
            src="@/assets/img/modules/module-6/timeline-slider-icos/ico-1.svg"
            alt=""
          />
        </div>
        <div class="timeline-slide__content">
          <div class="timeline-slide__date">23 февраля</div>
          <div class="timeline-slide__text">День защитника отечества</div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="slide-item timeline-slide">
      <div class="timeline-slide__wrapper">
        <div class="timeline-slide__ico">
          <img
            src="@/assets/img/modules/module-6/timeline-slider-icos/ico-2.svg"
            alt=""
          />
        </div>
        <div class="timeline-slide__content">
          <div class="timeline-slide__date">8 марта</div>
          <div class="timeline-slide__text">Международный женский день</div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="slide-item timeline-slide">
      <div class="timeline-slide__wrapper">
        <div class="timeline-slide__ico">
          <img
            src="@/assets/img/modules/module-6/timeline-slider-icos/ico-3.svg"
            alt=""
          />
        </div>
        <div class="timeline-slide__content">
          <div class="timeline-slide__date">18 июня</div>
          <div class="timeline-slide__text">День сыродела</div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="slide-item timeline-slide">
      <div class="timeline-slide__wrapper">
        <div class="timeline-slide__ico">
          <img
            src="@/assets/img/modules/module-6/timeline-slider-icos/ico-4.svg"
            alt=""
          />
        </div>
        <div class="timeline-slide__content">
          <div class="timeline-slide__date">1 сентября</div>
          <div class="timeline-slide__text">День основания компании</div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="slide-item timeline-slide">
      <div class="timeline-slide__wrapper">
        <div class="timeline-slide__ico">
          <img
            src="@/assets/img/modules/module-6/timeline-slider-icos/ico-5.svg"
            alt=""
          />
        </div>
        <div class="timeline-slide__content">
          <div class="timeline-slide__date">
            Ежегодно 3-е воскресенье октября
          </div>
          <div class="timeline-slide__text">
            День работников пищевой промышленности
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="slide-item timeline-slide">
      <div class="timeline-slide__wrapper">
        <div class="timeline-slide__ico">
          <img
            src="@/assets/img/modules/module-6/timeline-slider-icos/ico-6.svg"
            alt=""
          />
        </div>
        <div class="timeline-slide__content">
          <div class="timeline-slide__date">Декабрь</div>
          <div class="timeline-slide__text">Новый год</div>
        </div>
      </div>
    </swiper-slide>

    <div class="timeline-slider__footer">
      <div class="slider-prev-btn">
        <svg
          width="22"
          height="29"
          viewBox="0 0 22 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4667 3.81892L17.1213 5.2988L18.4667 3.81892C20.5111 5.67751 20.5111 8.77704 18.4667 10.6356L14.2159 14.5L18.4667 18.3644C20.5111 20.223 20.5111 23.3225 18.4667 25.1811L17.1213 23.7012L18.4667 25.1811C16.5322 26.9396 13.4677 26.9396 11.5333 25.1811L3.53333 17.9084C1.48889 16.0498 1.48889 12.9502 3.53333 11.0916L11.5333 3.81892C13.4677 2.06036 16.5322 2.06036 18.4667 3.81892Z"
            fill="#0ABAEE"
            stroke="black"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="timeline">
        <div class="timeline__line">
          <div class="timeline__ball"></div>
        </div>
        <div class="timeline__dates">
          <div class="timeline__date">
            23 <br />
            фев
          </div>
          <div class="timeline__date">
            8 <br />
            мар
          </div>
          <div class="timeline__date">
            18 <br />
            июн
          </div>
          <div class="timeline__date">
            1 <br />
            сен
          </div>
          <div class="timeline__date">
            ... <br />
            окт
          </div>
          <div class="timeline__date">
            ... <br />
            дек
          </div>
        </div>
      </div>
      <div class="slider-next-btn">
        <svg
          width="22"
          height="29"
          viewBox="0 0 22 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.53334 3.81892L4.87868 5.2988L3.53333 3.81892C1.48889 5.67751 1.48889 8.77704 3.53333 10.6356L7.78415 14.5L3.53334 18.3644C1.48889 20.223 1.48889 23.3225 3.53333 25.1811L4.87868 23.7012L3.53334 25.1811C5.46775 26.9396 8.53225 26.9396 10.4667 25.1811L18.4667 17.9084C20.5111 16.0498 20.5111 12.9502 18.4667 11.0916L10.4667 3.81892C8.53225 2.06036 5.46775 2.06036 3.53334 3.81892Z"
            fill="#0ABAEE"
            stroke="black"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </swiper>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

const calcBallPosition = (ind) => {
  const timelineBall = document.querySelector(".timeline__ball");
  const timelineLine = document.querySelector(".timeline__line");
  const timelineItems = [...document.querySelectorAll(".timeline__date")];
  const timelinePositions = timelineItems.map((el) => {
    const ballPosition =
      el.getBoundingClientRect().left -
      timelineLine.getBoundingClientRect().left +
      timelineBall.clientWidth / 2;
    return ballPosition;
  });

  const defaultPosition = timelinePositions[ind];
  timelineBall.style.left = `${defaultPosition}px`;
};

// onMounted(() => {
//   calcBallPosition(0);
// });
</script>

<style lang="scss">
.timeline-slider__footer {
  box-sizing: border-box;
  padding-right: fromWidth(90);
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: fromWidth(16);
  justify-content: space-between;
}

.timeline {
  width: 100%;
}
.timeline__dates {
  padding-top: fromWidth(12);
  display: flex;
  justify-content: space-around;
}

.timeline__date {
  width: fromWidth(40);
  text-align: center;
  font-size: fromWidth(20);
  font-weight: 700;
  line-height: 100%;
  position: relative;
  box-sizing: border-box;

  &::before {
    box-sizing: border-box;
    border-radius: fromWidth(2);
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -200%);
    content: "";
    height: fromWidth(15);
    width: fromWidth(5);
    background-color: #000;
  }
}
.timeline__line {
  box-sizing: border-box;
  position: relative;
  height: fromWidth(60);
  width: 100%;
  border-radius: fromWidth(12);
  border: fromWidth(4) solid #000;
  background-color: #dfedef;
}

.timeline__ball {
  box-sizing: border-box;
  background-color: #0abbef;
  position: absolute;
  top: 50%;
  transition: left 1s ease-in-out;
  transform: translateY(-50%);
  width: fromWidth(20);
  height: fromWidth(20);
  border-radius: 50%;
  border: fromWidth(4) solid #000;
}

.timeline-slider {
  //   overflow: visible !important;
  user-select: none;
  margin-right: fromWidth(-90) !important;
  .swiper-wrapper {
    padding-bottom: fromWidth(40);
  }

  .slider-prev-btn,
  .slider-next-btn {
    box-sizing: border-box;
    cursor: pointer;
    flex-shrink: 0;
    width: fromWidth(60);
    height: fromWidth(60);
    border-radius: fromWidth(12);
    border: fromWidth(4) solid #000;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      object-fit: contain;
      width: 50%;
      height: 50%;
    }
    &.swiper-button-disabled {
      opacity: 0.5;
      cursor: default;
    }
  }
}
.timeline-slide {
  margin-right: fromWidth(90);
  width: fit-content !important;

  &.swiper-slide-active .timeline-slide__wrapper {
    box-shadow: fromWidth(6) fromWidth(6) 0px 0px rgb(10, 186, 238);
  }

  .timeline-slide__wrapper {
    transition: box-shadow 0.5s ease-in-out;
    display: flex !important;
    align-items: center;
    gap: fromWidth(20);
    border-radius: fromWidth(16);
    border: fromWidth(4) solid #000;
    background: #fff;
    box-shadow: fromWidth(6) fromWidth(6) 0px 0px rgb(0, 0, 0);
    padding: fromWidth(32) fromWidth(40) fromWidth(32) fromWidth(24);
  }
}

.timeline-slide__ico {
  width: fromWidth(40);
  height: fromWidth(40);
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
}

.timeline-slide__content {
  padding-left: fromWidth(24);
  border-left: fromWidth(2) solid #ddd;
}

.timeline-slide__date {
  color: #565656;
  font-size: fromWidth(24);
  font-weight: 600;
  line-height: 100%;
  margin-bottom: fromWidth(16);
}
.timeline-slide__text {
  color: #000;
  font-size: fromWidth(32);
  font-weight: 700;
  line-height: 100%;
}
</style>
