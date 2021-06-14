<template>
  <div class="list">
    <div class="cities">
      <div class="pre">
        <h1>当前城市</h1>
        <div>{{ this.$store.state.city }}</div>
      </div>
      <div class="hot">
        <h1>热门城市</h1>
        <div class="content">
          <div
            class="pre"
            v-for="item in hotCity"
            :key="item.id"
            @click="channgeCity(item.name)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="item" v-for="(item, index) in list" :key="index" :ref="item">
        <h1>{{ item }}</h1>
        <div
          class="items"
          v-for="items in city[item]"
          :key="items.id"
          @click="channgeCity(items.name)"
        >
          {{ items.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from "../../../mixins/mixins";
export default {
  props: {
    city: {
      type: Object,
      default() {
        return [];
      },
    },
    letter: {
      type: String,
      default() {
        return "";
      },
    },
    hotCity: {
      type: Array,
      default() {
        return [];
      },
    },
    scrollList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mixins: [mixin],
  data() {
    return {
      posizitionList: [],
    };
  },
  mounted() {
    setTimeout(this.zeng, 1000);
  },
  watch: {
    letter(val) {
      let item = this.$refs[val][0];
      console.log(item.offsetTop);
      console.log(this.$refs[val]);
      this.$parent.scroll.scrollToElement(item, 300);
    },
  },
  methods: {
    zeng() {
      for (var i = 0; i < this.scrollList.length; i++) {
        this.posizitionList.push(this.$refs[this.scrollList[i]][0].offsetTop);
      }
      console.log(this.posizitionList);
    },
    channgeCity(val) {
      console.log(1);
      this.$store.commit("change", val);
      this.$router.push("/");
    },
  },
  loaded() {},
};
</script>

<style lang='scss' scoped>
.title {
  height: 0.5rem;
  background-color: #eee;
  line-height: 0.5rem;
  padding-left: 0.2rem;
}
.he {
  margin-left: 0.2rem;
  margin-top: 0.2rem;
  width: 1.6rem;
  height: 0.4rem;
  background-color: #fff;
  text-align: center;
  line-height: 0.4rem;
  box-shadow: 0 0 5px rgba(#ccc, 0.8);
}
.pre {
  h1 {
    @extend .title;
  }
  div {
    @extend .he;
  }
}
.hot {
  h1 {
    @extend .title;
  }
  display: flex;
  flex-direction: column;
  margin-top: 0.4rem;
  .content {
    display: flex;
    flex-wrap: wrap;
    .pre {
      @extend .he;
    }
  }
}
.item {
  h1 {
    @extend .title;
  }
  .items {
    height: 0.4rem;
    padding: 0.1rem 0 0 0.2rem;
    border-bottom: 1px solid #eee;
  }
}
</style>