<template>
  <div>
    <Myheader :back="true">Derail</Myheader>
    <div class="content container">
      <ul>
        <li>
          <label>机构名称</label>
          <input type="text" v-model="book.bookName"/>
        </li>
        <li>
          <label>机构信息</label>
          <input type="text" v-model="book.bookInfo"/>
        </li>
        <li>
          <label>报名费用</label>
          <input type="text" v-model="book.bookPrice"/>
        </li>
      </ul>
      <button class="btn" @click="updateBook(book)">确认修改</button>
    </div>
  </div>
</template>

<script>
  import Myheader from "../base/Myheader";
  import {getOne} from "../api/index";
  import {update} from "../api/index";
  // 默认导出一个对象
  export default {
    data() {
      return {
        book: {}
      }
    },
    created() {
      //获取当前路由的id
      let id = this.$route.params.id;
      this.getBook(id)
    },
    methods: {
      async getBook(id) {
        this.book = await getOne(id);
      },
      async updateBook(book) {
        await update(book);
        this.$router.go(-1)
      }
    },
    components: {
      Myheader
    },
    computed: {}
  }
</script>

<style scoped>
  .container li label {
    display: block;
    font-size: 16px;
    padding: 5px;

  }

  .container li input {
    display: block;
    width: 300px;
    height: 30px;
    margin: 0 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .content button {
    display: block;
    width: 94%;
    height: 35px;
    background: blueviolet;
    opacity: 0.6;
    border: none;
    font-size: 18px;
    line-height: 35px;
    color: #fff;
    text-align: center;
    margin: 10px auto;
    border-radius: 5px;
  }
</style>
