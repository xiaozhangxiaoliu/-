<template>
  <div class="header">
    <div class="header-left"><i class="iconfont">&#xe7ef;</i> 返回</div>
    <div class="header-input">
      <i class="iconfont">&#xe63f;</i>
      输入城市景点/游玩主题
    </div>
    <div class="header-right" @click="change">
      {{ this.$store.state.city }} <i class="iconfont">&#xe612;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  methods: {
    change() {
      this.$router.push("/city");
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style lang = "scss" scoped>
.header {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;
  width: 7.5rem;
  height: 0.86rem;
  display: flex;
  background-color: #00bcd4;
  color: #fff;
  line-height: 0.86rem;

  .header-left {
    position: relative;
    padding-left: 0.4rem;
    width: 0.64rem;
    i {
      position: absolute;
      left: 0;
    }
  }
  .header-input {
    flex: 1;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 0.12rem;
    height: 0.64rem;
    margin-left: 0.2rem;
    line-height: 0.64rem;
    color: #ccc;
    padding-left: 0.2rem;
    i {
      vertical-align: middle;
    }
  }
  .header-right {
    min-width: 1.24rem;
    text-align: center;
    i {
      vertical-align: middle;
    }
  }
}
</style>