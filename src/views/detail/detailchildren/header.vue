<template>
  <div class="header">
    <div class="content" v-show="show">
      <span class="iconfont" @click="back">&#xe7ef;</span>
      景点详情
    </div>
    <div class="back" v-show="!show" @click="back">
      <span class="iconfont">&#xe7ef;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show"],
  data() {
    return {};
  },
  mounted() {},
  activated() {
    console.log(document.documentElement);
  },
  methods: {
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang='scss' scoped>
.header {
  z-index: 999;
  .content {
    width: 100%;
    height: 0.8rem;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #00bcd4;
    z-index: 999;
    text-align: center;
    line-height: 0.8rem;
    color: #fff;
    span {
      float: left;
      font-size: 0.36rem !important;
    }
  }
  .back {
    width: 0.6rem;
    height: 0.6rem;
    background-color: #ccc;
    border-radius: 0.2rem;
    text-align: center;
    line-height: 0.6rem;
    position: fixed;
    top: 0.2rem;
    left: 0.2rem;
    z-index: 999;
  }
}
</style>