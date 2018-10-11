<template>
  <div class="footer">
    <router-link to="/home">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-liebiao"></i>
      <span>列表</span>
    </router-link>
    <router-link to="collect">
      <i class="iconfont icon-shoucang1"></i>
      <span>收藏</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-tianjia1"></i>
      <span>添加</span>
    </router-link>
  </div>
</template>

<script>
  // 默认导出一个对象
  export default {
    data() {
      return {}
    },
    methods: {},
    components: {},
    computed: {}
    //.vue文件会默认将template中的结构插入到导出的对象中；
  }
</script>

<style scoped lang="less">
  .footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    display: flex;
    border-top: 1px solid #f4f0e0;
    padding: 6px;
    z-index: 100;
    background: aliceblue;
    a {
      display: flex;
      /*每个a占相同的比例*/
      flex: 1;
      /*垂直居中*/
      flex-direction: column;
      font-size: 16px;
      justify-content: center;
      /*水平居中*/
      align-items: center;
      color:#ce7ee2 ;
    }
    .iconfont {
      font-size: 20px;
    }

    .router-link-active {
      color: blueviolet;
    }
  }

</style>
