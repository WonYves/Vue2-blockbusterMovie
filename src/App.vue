<template>
  <div>
    <tabbar ref="mytabbar" v-show="$store.state.isTabbarShow"></tabbar>
    <!-- 路由容器 -->
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Vant from 'vant'
  import 'vant/lib/index.css'
  import tabbar from '@/components/Tabbar.vue'

  Vue.use(Vant)   //Vue.component（全局定义组件）
export default {
  data () {
    return {

    }
  },
  components:{
    tabbar
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%;
}
ul{
  list-style: none;
}
body{
  font-size: 20px;
}
// section{
//   padding-bottom: 2.45rem;
// }
</style>
