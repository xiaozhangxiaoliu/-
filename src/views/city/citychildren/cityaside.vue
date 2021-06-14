<template>
  <div class="aside" ref="aside">
    <ul>
      <li
        v-for="(item, index) in list"
        :key="item"
        @click="hanldClick(item, index)"
        :ref="item"
        :class="{ active: current === index ? true : false }"
        @touchstart.prevent="hanldTouchStart"
        @touchmove="hanldTouchMove"
        @touchend="hanldTouchEnd"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import mixin from "../../../mixins/mixins";
export default {
  props: ["city"],
  mounted() {
    console.log(this.city);
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      current: 0,
      pre: 0,
      preindex: 0,
      timer: null,
    };
  },
  computed: {},
  mixins: [mixin],
  methods: {
    hanldClick(item, index) {
      this.current = index;
      this.$emit("halden", item);
    },
    hanldTouchStart(e) {
      this.touchStatus = true;
      this.startY = e.touches[0].target.offsetTop;
    },
    hanldTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
      }
      this.timer = setTimeout(() => {
        this.pre = this.preindex;
        let touchY = e.touches[0].clientY - 200;
        this.preindex = Math.floor((touchY - this.startY) / 20);
        if (this.pre == this.preindex) {
          return;
        } else {
          this.current =
            this.current - this.preindex >= 0
              ? this.current - this.preindex
              : 0;
          if (this.current >= 21) {
            this.current = 21;
          }
          this.$emit("halden", this.list[this.current]);
        }
      }, 20);
    },
    hanldTouchEnd() {
      this.touchStatus = false;
    },
  },
};
</script>

<style lang='scss' scoped>
.aside {
  position: fixed;
  right: 0.1rem;
  top: 4rem;

  li {
    width: 0.4rem;
    height: 0.4rem;
    color: #00bcd4;
    font-size: 0.24rem;
    list-style: none;
    line-height: 0.4rem;
    text-align: center;
    border-radius: 0.08rem;
  }
}
.active {
  background-color: #ccc;
}
</style>