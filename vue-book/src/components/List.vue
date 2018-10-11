<template>
  <div>
    <Myheader :back="true">List</Myheader>
    <div class="content">
      <ul class="container">
        <router-link v-for="(book,key) in allBooks" :to="{name:'detail',params:{id:book.bookId}}" tag="li" :key="key">
          <img :src="book.bookCover" alt="">
          <div class="right">
            <h4>{{book.bookName}}</h4>
            <p class="info">{{book.bookInfo}}</p>
            <p class="price">{{book.bookPrice}}</p>
            <button class="btn iconfont icon-tuanduicankaoxian- " @click.stop="remove(book.bookId)">删除</button>
            <button class="btn iconfont icon-shoucang1" @click.stop="collect(book)">收藏</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  // 默认导出一个对象
  import Myheader from "../base/Myheader.vue";
  import {getAll} from "../api/index.js";
  import {collectBook, deleteBook} from "../api/index";

  export default {
    data() {
      return {
        allBooks: []
      }
    },
    created() {
      this.getAllBooks();
    },
    methods: {
      // 获取所有的图书；
      async getAllBooks() {
        this.allBooks = await getAll();
      } ,
      remove(id){
        // 后端删除数据
        deleteBook(id);
        // 改变当前的数据；
        this.allBooks = this.allBooks.filter((item)=>item.bookId !=id);
      },
      async collect(data){
        await collectBook(data)
      }

    },
    components: {Myheader},
    computed: {}
  }
</script>

<style scoped>
  .container li img {
    width: 110px;
    height: 110px;
  }
.container{
  margin-bottom: 50px;
}
  .container li {
    padding: 10px;
    font-size: 14px;
  }

  .right {
    width: 180px;
    float: right;
  }

  .price {
    color: red;
    font-size: 20px;
  }

  .btn {
      color: darkred;
  }
.info{
  font-size: 12px;
}
</style>
