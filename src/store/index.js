import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http";
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

export default new Vuex.Store({
  plugins:[createPersistedState({
    reducer:(state)=>{
      return{
        cityId:state.cityId,
        cityName:state.cityName
      }
    }
  })],  //vuex 持久化  每次刷新一次都会在localStorage中存一份 所以 刷新之后城市不会改变 

  //state公共状态
  state: {
    cityId: "510100",
    cityName: "成都",
    cinemaList: [],
    isTabbarShow: true,
  },
  // acitons 与后端数据交互 支持同步异步
  actions: {
    geitCinemasData(store, cityId) {
      return http({
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=6486576`,
        headers: {
          "X-Host": "mall.film-ticket.cinema.list",
        },
      }).then((res) => {
        // console.log(res.data.data.cinemas);
        // this.cinemaList = res.data.data.cinemas;
        store.commit("changeCinemaData", res.data.data.cinemas);
      });
    },
  },
  // 统一管理 被devtools 记录状态的修改
  // mutations 只支持同步不支持异步
  mutations: {
    changeCityName(state, cityName) {
      state.cityName = cityName;
      // console.log(cityName);
    },
    changeCityId(state, cityId) {
      state.cityId = cityId;
    },
    changeCinemaData(state, data) {
      state.cinemaList = data;
    },
    clearCinema(state) {
      state.cinemaList = [];
    },
    show(state) {
      state.isTabbarShow = true;
    },
    hide(state) {
      state.isTabbarShow = false;
    },
  },
});

// vuex 管理保存公共状态 分散在各个组件内的状态 统一管理
// vuex 默认是管理在内存，一刷新页面， 公共状态就丢失了。
// vuex 持久化 -todo

// vuex 项目应用
// 1.非父子的通信
// 2.后端数据的缓存快照 减少重复数据请求 减轻服务器压力 提高用户体验
