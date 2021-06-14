<template>
  <div :class="this.name">
    <slot></slot>
  </div>
</template>

<script>
import Swiper from "swiper/bundle";

export default {
  props: {
    autoplay: {
      type: Boolean,
      default() {
        return true;
      },
    },
    type: {
      type: String,
      default() {
        return "fraction";
      },
    },
    ele: {
      type: String,
      default() {
        return "";
      },
    },
    name: {
      type: String,
      default() {
        return "swiper-container";
      },
    },
  },
  mounted() {
    new Swiper("." + this.name, {
      //   loop: true,
      autoplay: this.autoplay,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      pagination: {
        el: this.ele,
        type: this.type,
      },
    });
  },
};
</script>

<style>
</style>