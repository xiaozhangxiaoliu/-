<template>
  <div class="wrapper" ref="aaa">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import ObserveDOM from "@better-scroll/observe-dom";
import ObserveImage from "@better-scroll/observe-image";
BScroll.use(ObserveImage);
BScroll.use(ObserveDOM);
export default {
  props: ["type"],
  data() {
    return {
      scroll: {},
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.aaa, {
      observeDOM: true,
      ObserveImage: true,
      probeType: this.type,
    });
    this.scroll.on("scroll", (position) => {
      this.$emit("scrol", position);
    });
  },
};
</script>

<style lang = 'scss' scoped>
.wrapper {
  height: calc(100vh - 0.86rem);
}
</style>