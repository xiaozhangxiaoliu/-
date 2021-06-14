<template>
  <div class="commend">
    <div class="header">热销推荐</div>

    <div class="content">
      <div
        class="item"
        v-for="item in commendList"
        :key="item.id"
        @click="godetaiil(item.id)"
      >
        <div class="left">
          <img :src="item.imgUrl" alt="" />
        </div>
        <div class="right">
          <h2>{{ item.title }}</h2>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commendList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    godetaiil(val) {
      this.$router.push({
        name: "detail",
        params: {
          id: val,
        },
      });
    },
  },
};
</script>

<style lang='scss' soped>
.commend {
  margin-top: 0.4rem;
  .header {
    background-color: #eee;
    height: 0.6rem;
    line-height: 0.6rem;
    padding-left: 0.2rem;
  }
  .content {
    li {
      list-style: none;
    }
    .item {
      height: 2.4rem;
      padding-left: 0.2rem;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
      .left {
        width: 2rem;
        img {
          width: 100%;
          height: 2rem;
        }
      }
      .right {
        height: 2rem;
        margin-left: 0.2rem;
        h2 {
          color: orange;
          margin-bottom: 50px;
        }
        p {
          font-size: 14px;
          color: #ccc;
        }
      }
    }
  }
}
</style>