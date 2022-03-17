<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      v-for="(obj, index) in arr"
      :key="index"
      @click="btn(index, obj)"
      :class="{ current: index === selIndex }"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="obj.iconText"></span>
      <!-- 文字 -->
      <span>{{ obj.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selIndex: 0, //默认第一个要高亮
    };
  },
  props: {
    arr: {
      type: Array,
      required: true,
      //   自定义校验规则
      validator(value) {
        if (value.length >= 2 && value.length <= 5) {
          return true;
        } else {
          console.log("数据源必须在2-5项");
          return false;
        }
      },
    },
  },
  methods: {
    btn(index, theObj) {
      // 点谁就把谁的索引保存起来
      this.selIndex = index;
      this.$emit("changeCom", theObj.componentName);
    },
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
}
</style>
