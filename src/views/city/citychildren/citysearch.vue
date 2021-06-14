<template>
  <div class="search">
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="输入城市名或拼音"
        v-model="keyword"
      />
    </div>
    <scroll v-show="keyword">
      <div class="search-content">
        <ul>
          <li class="item" v-for="item in list" :key="item.id">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
import scroll from "../../../components/scroll/scroll.vue";
export default {
  props: ["cities"],
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
    };
  },
  components: {
    scroll,
  },
  watch: {
    keyword() {
      if (this.timer) {
        setTimeout(this.timer);
      }

      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (
              value.spell.indexOf(this.keyword) !== -1 ||
              value.name.indexOf(this.keyword) !== -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    },
  },
};
</script>

<style lang='scss' scoped>
.search {
  height: 0.72rem;
  margin: 0 auto;
  background-color: #00bcd4;
  padding: 0 0.2rem;
  box-sizing: border-box;
  position: fixed;
  top: 0.86rem;
  width: 100%;
  z-index: 999;
  input {
    width: 100%;
    height: 0.6rem;
    border-radius: 0.08rem;
    padding-left: 0.2rem;
    box-sizing: border-box;
  }
  .search-content {
    position: absolute;
    top: 0.72rem;
    width: calc(100% - 20px);
    left: 0;
    z-index: -1;
    overflow: hidden;
    padding-right: 0.2rem;
    border-radius: 0.08rem;
    ul {
      width: 100%;
      box-sizing: border-box;
    }
    .item {
      color: #666;
      height: 0.5rem;
      line-height: 0.5rem;
      border-bottom: 1px solid #ccc;
      background-color: #fff;
      box-sizing: border-box;
      padding-left: 0.2rem;
    }
  }
  .wrapper {
    overflow: hidden;
  }
}
</style>