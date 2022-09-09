<template>
  <div class="city">
    <van-index-bar :index-list="computedList" @select="handleChange">
      <div v-for="data in cityList" :key="data.cityId">
        <van-index-anchor :index="data.type" />
        <van-cell
          :title="item.name"
          v-for="item in data.list"
          :key="item.cityId"
          @click="handleClick(item)"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import http from "@/util/http";
import { Toast } from "vant";
import obj from '@/util/mixinobj';
export default {
  mixins:[obj],   //混入
  data() {
    return {
      cityList: [],
      indexList: [],
    };
  },
  computed: {
    computedList() {
      return this.cityList.map((item) => item.type);
    },
  },
  mounted() {
    // this.$store.commit('hide')
    http({
      url: "/gateway?k=539008",
      headers: {
        "X-Host": "mall.film-ticket.city.list",
      },
    }).then((res) => {
      //   console.log(res.data.data.cities);
      this.cityList = this.rendercity(res.data.data.cities);
      // 1.将数据 ==> 进行A B C分组
      // 2.利用转换后的数组，结合组件库进行渲染页面
    });
  },
  destroyed(){
    // this.$store.commit('show')
  },
  methods: {
    rendercity(list) {
      var cityList = [];
      var letterList = [];
      for (var i = 65; i < 91; i++) {
        letterList.push(String.fromCharCode(i)); //字母键位数 A=65 Z=90
      }
      //   console.log(letterList);

      letterList.forEach((letter) => {
        var newlist = list.filter(
          (data) => data.pinyin.substring(0, 1).toUpperCase() === letter
        ); //过滤数据中包含A开头的 已转化拼音首字母大写
        // console.log(newlist);

        newlist.length > 0 &&
          cityList.push({
            type: letter,
            list: newlist,
          });
      });
    //   console.log(cityList);
      return cityList;
    },

    handleChange(data) {
      Toast(data);
    },

    handleClick(item){
      //   传统的多页面方案
        // 1.location.href = '#/cinemas?cityname' + item.name
        // 2.cookie localStorage
      
        //   单页面方案
        // 1.中间人模式
        // 2.bus事件总线 $on  $emit

        // 以上在管理多个状态的时候会显得比较乱

        // this.$store.state.cityName = item.name  //风险过大 无法跟踪修改

        this.$store.commit('changeCityName',item.name)
        this.$store.commit('changeCityId',item.cityId)
        this.$router.back()


    }
  },
};
</script>

<style lang="scss">
.van-toast--html,
.van-toast--text {
  min-width: 30px;
}
</style>
