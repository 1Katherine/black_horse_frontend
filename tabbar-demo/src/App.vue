<template>
  <div>
    <MyHeader
      :background="'blue'"
      :color="'white'"
      title="TabBar案例"
    ></MyHeader>
    <div class="main">
      <component :is="comName"></component>
    </div>

    <MyTabBar :arr="tabList" @changeCom="changeComFn"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyTabBar from "./components/MyTabBar.vue";
import MyGoodsList from "./views/MyGoodsList.vue";
import MyGoodsSearch from "./views/MyGoodsSearch.vue";
import MyUserInfo from "./views/MyUserIInfo.vue";
export default {
  data() {
    return {
      // 默认显示的组件
      comName: "MyGoodsList",
      // 底部导航的数据
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
    };
  },
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
  methods: {
    changeComFn(cName) {
      this.comName = cName;
    },
  },
};
</script>

<style scope>
.main {
  padding-top: 45px;
  padding-bottom: 51px;
}
</style>
