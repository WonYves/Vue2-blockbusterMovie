import Vue from "vue";
import VueRouter from "vue-router";
import Films from "@/views/Films";
import Nowplaying from "@/views/films/Nowplaying";
import Comingsoon from "@/views/films/Comingsoon";
import Cinemas from "@/views/Cinemas";
import City from "@/views/City";
import Login from "@/views/Login";


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
    path:"/center1",
    component:() => import("@/components/center/Center1")
  },
  {
    path:"/center2",
    component:() => import("@/components/center/Center2")
  },
  {
    path:"/center3",
    component:() => import("@/components/center/Center3")
  },
  {
    path:"/center4",
    component:() => import("@/components/center/Center4")
  },
  {
    path:"/center5",
    component:() => import("@/components/center/Center5")
  },
  {
    path:"/center6",
    component:() => import("@/components/center/Center6")
  },
  {
    path:"/center7",
    component:() => import("@/components/center/Center7")
  },
  {
    path:"/center8",
    component:() => import("@/components/center/Center8")
  },
  {
    path:"/center9",
    component:() => import("@/components/center/Center9")
  },
  {
    path:"/center10",
    component:() => import("@/components/center/Center10")
  },
  {
    path:"/center11",
    component:() => import("@/components/center/Center11")
  },
  {
    path: "/login",
    component:Login, 
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
