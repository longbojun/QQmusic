<template>
  <div id="app">
    <!--把底部导航抽离一个组件出来-->
    <Tab></Tab>
    <!--根组件，用来显示components中的页面组件-->
    <router-view></router-view>
  </div>
</template>
<script>
  import Tab from "./base/tab.vue"

  export default {
    name: 'App',
    components: {
      Tab
    }
  }
</script>
<!--书写公共样式-->
<style>
  body{
  }
  *{
    margin: 0;
    padding: 0;
    font-family: tahoma,"microsoft yahei","\5FAE\8F6F\96C5\9ED1"!important;
  }
  ul li{
    list-style:none;
  }
  a{
    text-decoration: none;
  }
  .content{
    position: absolute;
    top:40px;
    width:100%;
    bottom:50px;
  }
</style>



