<template>
  <swiper :options="swiperOption"  ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(item,key) in sliders" :key="key">
      <img :src="item" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  // 默认导出一个对象
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'carrousel',
    props:['sliders'],
    data() {
      return {
        swiperOption: {
          autoplay: 3500,//自动不放
          // direction: 'vertical',//竖直轮播
          autoHeight: true,//自适应高度
          setWrapperSize: true,
          pagination: ".swiper-pagination",//图上的点点
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true //监听父级变化
        }
      };
    },
    methods: {},
    components: {swiper,swiperSlide},
    computed: {}
  }
</script>

<style scoped>
  img{
    width: 100%;
    z-index: 88;
  }
</style>
