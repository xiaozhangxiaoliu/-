<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(window.screen.height);
  },
};
</script>
<style lang="scss">
html {
  touch-action: none;
}

#app {
  height: 13.34rem;
}
</style>
