<template>
  <div>
    <Myheader>Home</Myheader>
    <div class="content">
      <Swiper :sliders="sliders"></Swiper>
      <div class="container">
        <h4>热门机构</h4>
        <ul>
          <li v-for="item in hotBooks">
            <img :src="item.bookCover"/>
            <b>{{item.bookName}}</b>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  // 默认导出一个对象
  import Myheader  from "../base/Myheader.vue";
  import Swiper from "../base/Swiper.vue";
  //  轮播
  import {getSlider}  from  "../api/index.js";
  //内容区域
  import {getHot} from "../api/index";

  export default {
    data(){
      return {
        sliders:[],
        hotBooks:[]
      }
    },
    created(){
      // axios是异步。获取是得到的是peding值
      /*getSlider().then(function (data) {
        console.log(data);
      })*/
      //  async  await;
      this.slide();
      this.getHotBook();

    },
    methods: {

      // async  用来处理异步的请求结果；promise；
      async slide(){
        this.sliders = await getSlider();
      },
      async getHotBook(){
        this. hotBooks = await getHot()
      }
    },
    components: {Myheader,Swiper},
    computed: {}
  }
</script>

<style scoped lang="less">
  .container{
    box-sizing: border-box;
    overflow-x: hidden;
    margin-bottom: 60px;
  }
  .container h2{
    padding-left:30px;
  }
  .container ul li{
    margin: 5px;
    width:42%;
    float:left;
    border: 1px solid #efe5e5;
    padding: 5px;
    text-align: center;
  }
  .container ul li img{
    display: block;
    width: 100%;
    height: 150px;
  }
  .container ul li b{
    display: block;
    /*padding-left:20px;*/
  }
  .container h4{
    margin: 5px;
  }
</style>
