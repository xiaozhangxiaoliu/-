<template>
  <div class="graly">
    <swiper
      :name="'gralyswiper'"
      :autoplay="false"
      :ele="'.swiper-pagination'"
      :type="'fraction'"
    >
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in gralyList"
          :key="index"
        >
          <img :src="item" alt="" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Scroll from "../../../components/scroll/scroll.vue";
import swiper from "../../../components/swiper/swiper.vue";

export default {
  components: { swiper, Scroll },
  props: ["gralyList"],
};
</script>

<style lang='scss' scoped>
.graly {
  z-index: 9999;
  background-color: #000;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  .gralyswiper {
    width: 100%;
    height: 6rem;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 6rem;
      }
    }
  }
  .swiper-pagination {
    position: absolute;
    top: 10rem;
    --swiper-pagination-color: #fff; /* 两种都可以 */
    color: #fff;
  }
}
</style>