<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="真的一滴都没有了"
      @load="onLoad"
      :immediate-check="false"
    >
      <van-cell
        v-for="data in datalist"
        :key="data.filmId"
        @click="handleChangePage(data.filmId)"
      >
        <img :src="data.poster" />
        <div class="bigbox">
          <div class="title">{{ data.name }}</div>
          <div class="content">
            <!-- 如果没有评分的情况下设置class类名为hidden -->
            <div class="score" :class="data.grade ? '' : 'hidden'">
              观众评分：<span>{{ data.grade }}</span>
            </div>

            <div class="actors">主演：{{ data.actors | actorsFilter }}</div>
            <div>{{ data.nation }} | {{ data.runtime }}分钟</div>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import http from "@/util/http";
import Vue from "vue";

Vue.filter("actorsFilter", (data) => {
  //没有主演的情况下显示暂无主演 以防actors值为undefined 无法使用map方法
  if (data === undefined) return "暂无主演";
  return data.map((item) => item.name).join(" ");
});

export default {
  data() {
    return {
      datalist: [],
      loading: false,
      finished: false,
      //数据++
      current: 1,
      //提前设置变量数据长度为0
      total: 0,
    };
  },
  mounted() {
    http({
      url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=2&k=3849390`,
      headers: {
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      this.datalist = res.data.data.films;

      this.total = res.data.data.total;
    });
  },
  methods: {
    onLoad() {
      // 总长度匹配禁用
      //解决懒加载BUG 子路由页面触发滚动条提前设置到底了为ture 导致父级路由出现无法继续加载的BUG                                       =>
      if (this.datalist.length === this.total && this.total !== 0) {
        this.finished = true;
        return;
      }
      this.current++;
      //到底后再次加载数据
      http({
        //数据++
        url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=9505125`,
        headers: {
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        //利用展开运算符 将老数据和新数据合并展开显示
        this.datalist = [...this.datalist, ...res.data.data.films];
        // loading 主动设置成false
        this.loading = false;
      });
    },
    handleChangePage(id) {
      //   console.log(id)
      // 编程式导航
      //   location.href = '#/detail'

      // /detail/1111
      // 1- 通过路径跳转
      // this.$router.push(`/detail/${id}`)

      // 2-通过命名路由跳转
      this.$router.push({
        name: "kerwinDetail",
        params: {
          id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.van-list {
  .van-cell {
    overflow: hidden;
    padding: 0.75rem;
    background: #f2eada;
    img {
      width: 3.3rem;
      float: left;
    }
    .title {
      font-size: 16px;
    }
    .content {
      font-size: 13px;
      color: #293047;
      .score span {
        color: gold;
      }
      .actors {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 10rem;
      }
    }
  }
}
.hidden {
  visibility: hidden; //占位隐藏
}
.bigbox {
  text-indent: 0.25rem;
}
</style>
