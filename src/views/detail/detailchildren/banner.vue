<template>
  <div class="banner" @click="hanldGral">
    <img :src="bannerList.img" alt="" />
    <div class="info">
      <p>{{ bannerList.info }}</p>
      <div class="number"><span class="iconfont">&#xe629;</span>39</div>
    </div>
  </div>
</template>

<script>
import Graly from "./graly.vue";
export default {
  props: ["bannerList"],
  components: {
    Graly,
  },
  data() {
    return {
      isGraly: false,
    };
  },
  methods: {
    hanldGral() {
      this.$emit("handlegraly");
    },
  },
};
</script>

<style lang='scss' scoped>
.banner {
  color: #fff;
  img {
    width: 100%;
    height: 4rem;
  }
  .info {
    position: absolute;
    top: 3.68rem;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    height: 0.32rem;
    line-height: 0.32rem;
    .number {
      width: 1.2rem;
      background-color: #000;
      text-align: center;
      border-top-left-radius: 0.1rem;
      border-bottom-left-radius: 0.1rem;
      font-size: 0.1rem;
      span {
        vertical-align: baseline;
        font-size: 13px !important;
      }
    }
  }
}
</style>