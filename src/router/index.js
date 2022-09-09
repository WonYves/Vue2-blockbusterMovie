import Vue from "vue";
import VueRouter from "vue-router";
import Films from "@/views/Films";
import Nowplaying from "@/views/films/Nowplaying";
import Comingsoon from "@/views/films/Comingsoon";
import Cinemas from "@/views/Cinemas";
import City from "@/views/City";


Vue.use(VueRouter); // 注册路由插件, 两个全局 router-view router-link

// 配置表
const routes = [
  {
    path: "/films",
    component: Films,

    // 嵌套路由
    children: [
      {
        path: "/films/nowplaying",
        component: Nowplaying,
      },
      {
        path: "/films/comingsoon",
        component: Comingsoon,
      },
      {
        path: "/films",
        redirect: "/films/nowplaying",
      },
    ],
  },
  {
    name: "kerwinDetail",
    path: "/detail/:id", // 动态二级路由
    component: () => import("@/views/Detail"),
  },
  {
    path: "/cinemas",
    component: Cinemas,
  },
  {
    path: "/city",
    component: City,
  },
  {
    path: "/cinemas/search",
    component: () => import("@/views/Search"),
  },
  {
    path: "/center",
    component: () => import("@/views/Center"),  //懒加载
    meta: {
      isKerwinRequired: true,
    },

    // 路由独享拦截
    // beforeEnter:(to,from,next)=>{
    //   if(localStorage.getItem('token')){
    //     next()
    //   }else{
    //     next('/login')
    //   }
    // }
  },
  {
    path: "/order",
    component: () => import("@/views/Order"),
    meta: {
      isKerwinRequired: true,
    },
  },
  {
    path: "/login",
    component: () => import("@/views/Login"), 
  },
  // 重定向
  {
    path: "*",
    redirect: "/films",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

// 全局拦截
router.beforeEach((to, from, next) => {
  // console.log(to.fullPath);

  if (to.meta.isKerwinRequired) {
    //本地存储中是否有 token字段
    if (localStorage.getItem("token")) {
      next();
    } else {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    }
  } else {
    next();
  }
});
export default router;
