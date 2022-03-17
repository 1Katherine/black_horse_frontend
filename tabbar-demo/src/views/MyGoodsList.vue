<template>
  <div>
    <MyTable :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-if="scope.row.inputVisible"
            v-focus
            @blur="scope.row.inputVisible = false"
            @keydown.enter="enterFn(scope.row)"
            @keydown.esc="scope.row.inputValue = ''"
            v-model="scope.row.inputValue"
          />
          <button
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            @click="scope.row.inputVisible = true"
          >
            创建
          </button>
          <span
            v-for="(str, index) in scope.row.tags"
            :key="index"
            class="badge badge-warning"
          >
            {{ str }}
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="removeFn(scope.row.id)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable.vue";
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";
export default {
  data() {
    return {
      list: [],
    };
  },
  components: {
    MyTable,
  },
  created() {
    axios({
      url: "/api/goods",
    }).then((res) => {
      // 商品列表数据
      this.list = res.data.data;
    });
  },
  methods: {
    removeFn(id) {
      let index = this.list.findIndex((obj) => obj.id === id);
      this.list.splice(index, 1);
    },
    enterFn(obj) {
      console.log(obj.inputValue);
      if (obj.inputValue.trim().length === 0) {
        alert("请输入数据");
        return;
      }
      obj.tags.push(obj.inputValue);
      obj.inputValue = null;
    },
  },
};
</script>

<style></style>
