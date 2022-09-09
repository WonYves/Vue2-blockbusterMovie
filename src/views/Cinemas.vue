<template>
  <div>
    <van-nav-bar title="影院" ref="navbar" @click-left="handleLeft"
    @click-right="handleRight">
      <template #left>
        {{ cityName }}<van-icon name="arrow-down" color="black" />
      </template>
      <template #right>
        <van-icon name="search" size="23" color="black" />
      </template>
    </van-nav-bar>
    <div
      class="box"
      :style="{
        height: height,
      }"
    >
      <ul>
        <li v-for="data in cinemaList" :key="data.cinemaId">
          <div class="left">
            <div style="font-size: 0.75rem">{{ data.name }}</div>
            <div class="cinema_text">{{ data.address }}</div>
          </div>

          <div class="right">
            <div>￥{{ data.lowPrice / 100 }}起</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll"; //需下载插件better-scroll
import {mapState,mapActions,mapMutations} from 'vuex'   //export {mapState}
export default {
  data() {
    return {
      height: "0px",
    };
  },
  computed:{
    // cinemaList: function(){
    //   return this.$store.state.cinemaList
    // }  
    ...mapState(['cinemaList','cityId','cityName'])   //定义一个计算属性  这种方式为上方的简写
  },
  mounted() {
    //动态计算高度
    this.height =
      document.documentElement.clientHeight -
      this.$refs.navbar.$el.offsetHeight -
      document.querySelector("footer").offsetHeight +
      "px";

    //分发
    // this.$store.dispatch('geitCinemasData',this.$store.state.cityId)

    if (this.cinemaList.length === 0) {
      this.geitCinemasData(this.cityId)
        .then((res) => {
          this.$nextTick(() => {
            new BetterScroll(".box", {
              //添加滚动条
              scrollbar: {
                fade: true,
              },
            });
          });
        });
    } else {
      this.$nextTick(() => {
        new BetterScroll(".box", {
          //添加滚动条
          scrollbar: {
            fade: true,
          },
        });
      });
    }
    // http({
    //   url: `/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=6486576`,
    //   headers: {
    //     "X-Host": "mall.film-ticket.cinema.list",
    //   },
    // }).then((res) => {
    //   // console.log(res.data.data.cinemas);
    //   this.cinemaList = res.data.data.cinemas;

    //   //等DOM渲染完成后进行添加
    // this.$nextTick(() => {
    //   new BetterScroll(".box", {
    //     //添加滚动条
    //     scrollbar: {
    //       fade: true,
    //     },
    //   });
    // });
    // });
  },
  methods: {
    ...mapActions(['geitCinemasData']),
    ...mapMutations(['clearCinema']),
    handleLeft() {
      this.$router.push("/city"); 
      //清空cinemasList
      this.clearCinema()    //原 commit 
    },
    handleRight(){
      this.$router.push("/cinemas/search")
    }
  },
};
</script>

<style lang="scss" scoped>
ul {
  background: #f2eada;
  li {
    padding: 0.75rem;
    display: flex;
    justify-content: space-between;
    .left {
      width: 10.6rem;
      height: 2.275rem;
      .cinema_text {
        font-size: 0.6rem;
        color: #72777b;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 0.25rem;
      }
    }
    .right {
      width: 3.5rem;
      height: 2.275rem;
      color: gold;
      font-size: 0.75rem;
    }
  }
}
.box {
  //   height: 30.9rem ;
  overflow: hidden;
  position: relative; //修正滚动条的位置
}
</style>
