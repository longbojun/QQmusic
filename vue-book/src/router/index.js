import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// 导入组件
import Home from "../components/Home"
import List from "../components/List"
import Collect from "../components/Collect"
import Add from "../components/Add"
import Derail from "../components/Derail"

// 配置路由映射表vs导出routes
export default new Router({
  routes: [
    {path:"/home",component:Home},
    {path:"/list",component:List},
    {path:"/collect",component:Collect},
    {path:"/add",component:Add},
    {path:"/derail/:id",component:Derail,name:"detail"},
    {path:"",component:Home},
  ]
});
