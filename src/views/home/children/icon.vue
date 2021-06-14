<template>
  <commpen-swiper :autoplay="false">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(page, index) in pages" :key="index">
        <div class="icons">
          <div class="icon" v-for="item in page" :key="item.id">
            <img :src="item.imgUrl" alt="" />
            <div>{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </commpen-swiper>
</template>

<script>
import commpenSwiper from "../../../components/swiper/swiper.vue";
export default {
  props: {
    iconList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    commpenSwiper,
  },
  data() {
    return {};
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
  mounted() {},
};
</script>

<style lang='scss' scoped>
.swiper-wrapper {
  height: 3.2rem;
}
.icons {
  overflow: hidden;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  .icon {
    width: 25%;
    height: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 29px;
      height: 29px;
      margin-bottom: 0.2rem;
    }
  }
}
.swiper-container {
  --swiper-theme-color: #fff;
}
</style>