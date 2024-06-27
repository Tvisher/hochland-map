<template>
  <div class="step-wrapper">
    <div class="step-wrapper__content">
      <div class="interactive-item" data-item="1">
        <img src="@/assets/img/modules/module-1/object-6.svg" alt="" />
      </div>

      <div class="interactive-item" data-item="2">
        <img src="@/assets/img/modules/module-1/object-1.svg" alt="" />
      </div>

      <div class="interactive-item" data-item="3">
        <img src="@/assets/img/modules/module-1/object-2.svg" alt="" />
      </div>

      <div class="interactive-item" data-item="4">
        <img src="@/assets/img/modules/module-1/object-3.svg" alt="" />
      </div>

      <div class="interactive-item" data-item="5">
        <img src="@/assets/img/modules/module-1/object-4.svg" alt="" />
      </div>

      <div class="interactive-item" data-item="6">
        <img src="@/assets/img/modules/module-1/object-5.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.step-wrapper__content {
  background-image: url(@/assets/img/modules/module-1/module-1-bg.svg);
}

.interactive-item {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  img {
    width: 100%;
    object-fit: contain;
    height: 100%;
  }
  position: absolute;

  &[data-item="1"] {
    right: 10%;
    width: 15%;
    height: 88%;
    top: 11%;
    z-index: 2;
  }

  &[data-item="2"] {
    pointer-events: none;
    left: 15%;
    width: 20%;
    height: 88%;
    top: 9%;
    z-index: 2;
  }

  &[data-item="3"] {
    right: 0.8%;
    width: 11%;
    height: 93.2%;
    top: 6.4%;
    z-index: 1;
  }

  &[data-item="4"] {
    right: 17%;
    width: 11%;
    height: 16.3%;
    top: 13.3%;
  }

  &[data-item="5"] {
    right: 29.4%;
    width: 14.6%;
    height: 18%;
    top: 42.7%;
  }

  &[data-item="6"] {
    // background-color: rgba(255, 0, 0, 0.183);
    left: -2.4%;
    width: 36.9%;
    height: 80.5%;
    top: 12.4%;
  }
}
</style>
