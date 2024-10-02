<template>
  <swiper
    class="album__slider"
    :modules="[Navigation, Pagination, EffectFade]"
    :slides-per-view="1"
    effect="fade"
    :fadeEffect="{
      crossFade: true,
    }"
    :pagination="{
      el: '.album-pagination',
      type: 'fraction',
    }"
    :navigation="{
      prevEl: '.album-prev-btn',
      nextEl: '.album-next-btn',
    }"
  >
    <swiper-slide class="slide-item" v-for="imagePath in props.albumImagesList">
      <img :src="imagePath" alt="" />
    </swiper-slide>
    <template v-slot:container-start>
      <div class="album-head">
        <div class="nav-buttons">
          <div class="album-prev-btn album-head-btn">
            <svg
              width="22"
              height="28"
              viewBox="0 0 22 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.84185 17.2839C1.82355 15.502 1.82355 12.4975 3.84185 10.7156L11.466 3.98463C13.3387 2.3313 16.2839 2.3313 18.1566 3.98463C20.1749 5.7665 20.1749 8.77101 18.1566 10.5529L14.2524 13.9998L18.1566 17.4466C20.1749 19.2285 20.1749 22.233 18.1566 24.0149C16.2839 25.6682 13.3387 25.6682 11.466 24.0149L3.84185 17.2839Z"
                fill="#0ABAEE"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="album-next-btn album-head-btn">
            <svg
              width="22"
              height="28"
              viewBox="0 0 22 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.1581 17.2839C20.1764 15.502 20.1765 12.4975 18.1581 10.7156L10.534 3.98463C8.66131 2.3313 5.71608 2.3313 3.84337 3.98463C1.82507 5.7665 1.82507 8.77101 3.84337 10.5529L7.74761 13.9998L3.84337 17.4466C1.82507 19.2285 1.82507 22.233 3.84337 24.0149C5.71608 25.6682 8.6613 25.6682 10.534 24.0149L18.1581 17.2839Z"
                fill="#0ABAEE"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div class="album-pagination"></div>
        <span class="album__title">Фотоальбом компании Хохланд</span>
        <div class="nav-buttons">
          <a
            :href="filePath"
            target="_blank"
            download=""
            class="load-btn album-head-btn"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 4.85714C19.5 2.9003 17.8264 1.5 16 1.5C14.1736 1.5 12.5 2.9003 12.5 4.85714V8.32269C11.2166 7.73947 9.63981 7.94682 8.56511 8.94475C7.14496 10.2635 7.14496 12.4508 8.56511 13.7695L13.5651 18.4124C14.9217 19.6721 17.0783 19.6721 18.4349 18.4124L23.4349 13.7695C24.855 12.4508 24.855 10.2635 23.4349 8.94476C22.3602 7.94682 20.7834 7.73947 19.5 8.32269V4.85714ZM8.5 21.5714C8.5 19.6146 6.82637 18.2143 5 18.2143C3.17363 18.2143 1.5 19.6146 1.5 21.5714V25.2857C1.5 26.706 2.10862 28.0435 3.1509 29.0113C4.18942 29.9756 5.5757 30.5 7 30.5H25C26.4243 30.5 27.8106 29.9756 28.8491 29.0113C29.8914 28.0435 30.5 26.706 30.5 25.2857V21.5714C30.5 19.6146 28.8264 18.2143 27 18.2143C25.1736 18.2143 23.5 19.6146 23.5 21.5714V23.7857H8.5V21.5714Z"
                fill="#0ABAEE"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a :href="filePath" target="_blank" class="show-btn album-head-btn">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.7915 3.20854L27.7308 4.2692L28.7915 3.20854C27.6975 2.11458 26.2138 1.5 24.6667 1.5H21.7778C19.6198 1.5 17.8704 3.24941 17.8704 5.40741C17.8704 7.56541 19.6198 9.31482 21.7778 9.31482H22.6852V10.2222C22.6852 12.3802 24.4346 14.1296 26.5926 14.1296C28.7506 14.1296 30.5 12.3802 30.5 10.2222V7.33333C30.5 5.78624 29.8854 4.30251 28.7915 3.20854ZM3.20854 28.7915L4.2692 27.7308L3.20854 28.7915C4.30251 29.8854 5.78624 30.5 7.33333 30.5H10.2222C12.3802 30.5 14.1296 28.7506 14.1296 26.5926C14.1296 24.4346 12.3802 22.6852 10.2222 22.6852H9.31482V21.7778C9.31482 19.6198 7.56541 17.8704 5.40741 17.8704C3.24941 17.8704 1.5 19.6198 1.5 21.7778V24.6667C1.5 26.2138 2.11458 27.6975 3.20854 28.7915ZM7.33333 1.5C5.78624 1.5 4.30251 2.11458 3.20854 3.20854C2.11458 4.30251 1.5 5.78624 1.5 7.33333V10.2222C1.5 12.3802 3.24941 14.1296 5.40741 14.1296C7.56541 14.1296 9.31482 12.3802 9.31482 10.2222V9.31482H10.2222C12.3802 9.31482 14.1296 7.56541 14.1296 5.40741C14.1296 3.24941 12.3802 1.5 10.2222 1.5H7.33333ZM30.5 21.7778C30.5 19.6198 28.7506 17.8704 26.5926 17.8704C24.4346 17.8704 22.6852 19.6198 22.6852 21.7778V22.6852H21.7778C19.6198 22.6852 17.8704 24.4346 17.8704 26.5926C17.8704 28.7506 19.6198 30.5 21.7778 30.5H24.6667C26.2138 30.5 27.6975 29.8854 28.7915 28.7915C29.8854 27.6975 30.5 26.2138 30.5 24.6667V21.7778Z"
                fill="#0ABAEE"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </template>
  </swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, EffectFade } from "swiper/modules";

const props = defineProps(["albumImagesList", "filePath"]);
</script>
<style lang="scss"></style>
