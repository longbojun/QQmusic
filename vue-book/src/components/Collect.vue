<template>
  <div>
    <myheader>Collect</myheader>
    <div class="content">
      <ul class="container">
        <li v-for="book in allBooks">
          <img :src="book.bookCover" alt="">
          <div class="right">
            <h4>{{book.bookName}}</h4>
            <p class="info">{{book.bookInfo}}</p>
            <p class="price">{{book.bookPrice}}</p>
            <button class="btn iconfont icon-tuanduicankaoxian- " @click="remove(book.bookId)">删除</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Myheader from "../base/Myheader";
  import {getCollect} from "../api/index";
  import {collectionBook} from "../api/index"
  // 默认导出一个对象
  export default {
    data() {
      return {
        allBooks: []
      }
    },
    created() {
      this.getBooks()
    },
    methods: {
      async getBooks() {
        this.allBooks = await getCollect()
      },
      remove(id){
        // 后端删除数据
        collectionBook(id);
        // 改变当前的数据；
        this.allBooks = this.allBooks.filter((item)=>item.bookId !=id);
      },
    },
    components: {
      Myheader
    },
    computed: {}
  }
</script>

<style scoped>
  .container li img {
    width: 110px;
  }

  .container {
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

  .info {
    font-size: 12px;
  }
</style>
