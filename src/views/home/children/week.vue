<template>
  <div class="week">
    <div class="header">周末去哪儿</div>
    <div class="content">
      <div class="item" v-for="item in weekList" :key="item.id">
        <img :src="item.imgUrl" alt="" />
        <div class="bt">
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
    weekList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang='scss' scoped>
.header {
  background-color: #eee;
  height: 0.6rem;
  line-height: 0.6rem;
  padding-left: 0.2rem;
}
.content {
  .item {
    img {
      height: 2.4rem;
      width: 100%;
    }
    .bt {
      padding-left: 0.2rem;
      height: 1.2rem;
      display: flex;

      flex-direction: column;
      justify-content: center;
      h2 {
        color: #ccc;
        margin-bottom: 0.2rem;
      }
      p {
        font-size: 0.2rem;
      }
    }
  }
}
</style>