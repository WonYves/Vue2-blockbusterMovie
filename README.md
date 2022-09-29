# 使用Vue2构建的的复刻版卖座电影 移动端APP

## 技术栈
·vue-cli

·vue-router vuex

·Scss (css预处理语言)

·Vant

·Swiper

·Batter Scroll

·iconfont

## 项目结构
src 

├─ App.vue

├─ assets

├─ components

│	├─ Tabbar.vue 底部导航栏

│	├─ center  我的-页面放置许多壁纸

│	├─ detail

│	│	├─ DetailHeader.vue   详情下拉粘性返回菜单

│	│	├─ DetailSwiper.vue   详情页轮播

│	│	└─ DetailSwiperItem.vue 详情页轮播

│	└─ films

│	 	├─ FilmHeader.vue 正在热映+即将上线 切换高亮

│	 	├─ FilmSwiper.vue 主页轮播

│	 	└─ FilmSwiperItem.vue 主页轮播

├─ main.js  程序入口文件,是初始化vue实例并使用需要的插件,加载各种公共组件

├─ router 

│	└─ index.js  配置路由

├─ store

│	└─ index.js vuex状态共享管理

├─ util

│	├─ http.js 封装axios请求以及axios拦截器Loading加载组件

│	└─ mixinobj.js  封装的混入(mixins) 调用来 使底部tabbar导航栏切换时消失

└─ views 

 	├─ Center.vue 我的-页面
  
 	├─ Cinemas.vue 影院-页面
  
 	├─ City.vue 城市-页面
  
 	├─ Detail.vue 详情-页面
  
 	├─ Films.vue 首页
  
 	├─ Login.vue 登录-页面
  
 	├─ Search.vue 搜索-页面
  
 	└─ films
  
 	 	├─ Comingsoon.vue 我的-即将上映
    
 	 	└─ Nowplaying.vue 我的-正在热映
    
## 以下为项目展示：
 ![$DB9QOELZHY~GT~J``YWP 9](https://user-images.githubusercontent.com/113281531/191504746-7d8ca723-bf02-442e-bba9-321901cde205.png)


![JV8F94) TWLJ6 I7TWN`NH](https://user-images.githubusercontent.com/113281531/191500580-35ed83a1-4c73-4866-8d20-deb41781257c.png)

![2BVF@MPIAFKBTCIO}OQX}Q8](https://user-images.githubusercontent.com/113281531/191500586-9689d430-e26e-4613-9db2-d72443f516cd.png)

![5U(OWF$9EN{K 8_)J`Q5C9G](https://user-images.githubusercontent.com/113281531/191500597-64cda6c5-537c-48c2-80be-0f453139d3e6.png)

![67QWC7Z$`$N1 74)G(868FI](https://user-images.githubusercontent.com/113281531/191500605-35b8aab1-4889-4058-8786-5365ca7b955e.png)

![HM7MH8557{K3OM6GJPKJE X](https://user-images.githubusercontent.com/113281531/191500612-57b39f20-af78-47d8-b95a-ebe30820fcbf.png)

![I@3Q%(TMMG~$2RSL M067JK](https://user-images.githubusercontent.com/113281531/191500621-c0dfbb11-7bec-44ef-b102-780f19504b48.png)
