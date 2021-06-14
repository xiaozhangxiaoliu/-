<template>
  <div class="home">
    <home-header></home-header>
    <scroll ref="scroll">
      <div class="content">
        <home-swiper :swiperList="swiperList"> </home-swiper>
        <icon :iconList="iconList"></icon>
        <commend :commendList="recommendList"></commend>
        <home-weekend :weekList="weekendList"></home-weekend>
      </div>
    </scroll>
  </div>
</template>

<script>
import HomeHeader from "./children/Header.vue";
import HomeSwiper from "./children/swiper.vue";
import Icon from "./children/icon.vue";
import commend from "./children/commend.vue";
import request from "../../network/request";
import HomeWeekend from "./children/week.vue";
import scroll from "../../components/scroll/scroll.vue";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    Icon,
    commend,
    HomeWeekend,
    scroll,
  },
  data() {
    return {
      lastcity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },

  mounted() {
    this.lastcity = this.$store.state.city;
    this.getHome({
      url: "/api/index.json?city=" + this.$store.state.city,
    });
  },
  activated() {
    if (this.lastcity !== this.$store.state.city) {
      this.getHome({
        url: "/api/index.json?city=" + this.$store.state.city,
      });
      this.lastcity = this.$store.state.city;
    }
  },
  methods: {
    getHome(config) {
      request(config).then((res) => {
        console.log(res.data);
        this.swiperList = res.data.data.swiperList;
        this.iconList = res.data.data.iconList;
        this.recommendList = res.data.data.recommendList;
        this.weekendList = res.data.data.weekendList;
      });
    },
  },
};
</script>
<style scoped>
.home {
  padding-top: 0.86rem;
  height: 100%;
}
</style>

