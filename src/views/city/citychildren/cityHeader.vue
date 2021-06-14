<template>
  <div class="header">
    <router-link to="/home">
      <i class="iconfont">&#xe7ef;</i>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.header {
  width: 100%;
  height: 0.86rem;
  background-color: #00bcd4;
  line-height: 0.86rem;
  text-align: center;
  color: #ccc;
  position: fixed;
  top: 0;
  z-index: 9999;
  i {
    position: absolute;
    left: 0.2rem;
    font-size: 0.36rem;
  }
}
</style>