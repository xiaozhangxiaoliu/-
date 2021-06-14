<template>
  <div class="detail">
    <detail-header :show="isshow" v-show="!isGraly"></detail-header>
    <scroll :type="3" @scrol="hanldscroll" v-show="!isGraly">
      <div class="content" ref="dscll">
        <banner
          :bannerList="bannerList"
          @handlegraly="isGraly = !isGraly"
        ></banner>
        <detail-list :dlist="list"></detail-list>
      </div>
    </scroll>
    <graly
      :gralyList="bannerList.graly"
      v-show="isGraly"
      @click.native="isGraly = !isGraly"
    ></graly>
  </div>
</template>

<script>
import Banner from "./detailchildren/banner.vue";
import request from "../../network/request";
import Scroll from "../../components/scroll/scroll.vue";
import detailHeader from "./detailchildren/header.vue";
import Graly from "./detailchildren/graly.vue";
import detailList from "./detailchildren/list.vue";
export default {
  name: "detail",
  components: {
    Banner,
    Scroll,
    detailHeader,
    Graly,
    detailList,
  },
  data() {
    return {
      bannerList: {},
      list: [],
      isGraly: false,
      isshow: false,
    };
  },
  mounted() {
    request({
      url: "api/detail.json",
      params: {
        id: this.$route.params.id,
      },
    }).then((res) => {
      console.log(res);
      this.$set(this.bannerList, "img", res.data.data.bannerImg);
      this.$set(this.bannerList, "info", res.data.data.sightName);
      this.$set(this.bannerList, "graly", res.data.data.gallaryImgs);
      this.list = res.data.data.categoryList;
    });
  },
  methods: {
    hanldscroll(position) {
      if (-position.y > 60) {
        this.isshow = true;
      } else {
        this.isshow = false;
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.detail {
  height: 100%;
}
.wrapper {
  height: 100%;
}
</style>