<template>
  <div class="city">
    <city-header></city-header>
    <city-seach :cities="cities" :type="0"></city-seach>
    <scroll ref="scl" @scrol="scrolll" :type="3">
      <div class="content">
        <city-list
          :city="cities"
          :hotCity="hotCities"
          :letter="letter"
          :scrollList="scrollList"
          ref="list"
        ></city-list>
      </div>
    </scroll>
    <city-aside :city="cities" @halden="getkey" ref="listaside"></city-aside>
  </div>
</template>

<script>
import request from "../../network/request";
import cityHeader from "./citychildren/cityHeader.vue";
import citySeach from "./citychildren/citysearch.vue";
import cityList from "./citychildren/cityList.vue";
import scroll from "../../components/scroll/scroll.vue";
import cityAside from "./citychildren/cityaside.vue";
export default {
  mounted() {
    this.getCity();
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: "",
      scrollList: [],
    };
  },
  components: {
    cityHeader,
    citySeach,
    cityList,
    scroll,
    cityAside,
  },
  methods: {
    async getCity() {
      let res = await request({
        url: "/api/city.json",
      });
      this.hotCities = res.data.data.hotCities;
      this.cities = res.data.data.cities;
      console.log(this.hotCities, this.cities);
      this.scrollList = Object.getOwnPropertyNames(this.cities).slice(
        0,
        Object.getOwnPropertyNames(this.cities).length - 1
      );
    },
    haldenGtecity(res) {},
    getkey(letter) {
      this.letter = letter;
    },
    scrolll(position) {
      for (var i = 0; i < this.scrollList.length; i++) {
        if (
          -position.y >= this.$refs.list.$refs[this.scrollList[i]][0].offsetTop
        ) {
          this.$refs.listaside.current = i;
        }
      }
    },
  },
};
</script>

<style lang='scss'  scoped>
.wrapper {
  margin-top: 1.58rem;
}
</style>