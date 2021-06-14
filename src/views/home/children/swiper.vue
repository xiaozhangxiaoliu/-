<template>
  <commpen-swiper :ele="'.swiper-pagination'" :name="'swiper-container1'">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" alt="" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </commpen-swiper>
</template>

<script>
import commpenSwiper from "../../../components/swiper/swiper.vue";
export default {
  name: "HomeSwiper",
  methods: {},
  components: {
    commpenSwiper,
  },
  props: {
    swiperList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {},
};
</script>

<style lang='scss' scoped>
.swiper-wrapper {
  height: 2.4rem;
}
.swiper-slide {
  img {
    width: 100%;
    height: 100%;
  }
}
.swiper-pagination {
  position: absolute;
  top: 2rem;
  width: 100%;
  height: 16px;
}
.swiper-container1 {
  --swiper-theme-color: #fff;
  width: 100%;
  height: 2.4rem;
  position: relative;
}
</style>