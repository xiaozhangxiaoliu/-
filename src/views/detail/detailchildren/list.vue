<template>
  <div class="list">
    <div class="item" v-for="(item, index) in dlist" :key="index">
      <div class="items">
        <span class="iconfont">&#xe86a;</span>
        <p>{{ item.title }}</p>
        <div v-if="item"></div>
      </div>
      <div v-if="item.children" class="items-children">
        <detail-list :dlist="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props: ["dlist"],
};
</script>

<style lang = 'scss' scoped>
.list {
  width: 100%;

  .items {
    height: 0.6rem;
    line-height: 0.6rem;
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.28rem;
    padding-left: 0.2rem;
    border-bottom: 1px solid #ccc;
    p {
      margin-left: 0.5rem;
    }
    span {
      float: left;
      vertical-align: middle;
      font-size: 0.4rem;
    }
  }
  .items-children {
    padding-left: 0.4rem;
  }
}
</style>