<template>
  <div class="header">
    <slot></slot>
    <i class="iconfont icon-fanhui" v-if="back" @click="goback"></i>
  </div>
</template>

<script>
  // 默认导出一个对象
  export default {
    data() {
      return {}
    },
    props: ['back'],
    methods: {
      goback() {
        this.$router.go(-1)
      }
    },
    components: {},
    computed: {}
  }
</script>

<style scoped>
  .header {
    position: fixed;
    width: 100%;
    background: blueviolet;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    color: white;
    opacity: 0.4;
    z-index: 99;
  }

  .icon-fanhui {
    position: absolute;
    left: 10px;
    font-weight: bold;
  }
</style>
