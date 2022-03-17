<template>
  <div class="my-counter">
    <button
      type="button"
      class="btn btn-light"
      :disabled="cObj.goods_count === 1"
      @click="cObj.goods_count--"
    >
      -
    </button>
    <input
      type="number"
      class="form-control inp"
      v-model.number="cObj.goods_count"
    />
    <button type="button" class="btn btn-light" @click="cObj.goods_count++">
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    cObj: Object,
  },
  watch: {
    cObj: {
      deep: true,
      handler() {
        if (this.cObj.goods_count < 1) {
          this.cObj.goods_count = 1;
        }
      },
    },
  },
};
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>
