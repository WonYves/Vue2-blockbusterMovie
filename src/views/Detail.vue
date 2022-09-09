<template>
  <div v-if="filmInfo">
    <!-- 自定义指令scroll -->
    <detail-header v-scroll="50">
      {{ filmInfo.name }}
    </detail-header>
    <div
      :style="{
        backgroundImage: 'url(' + filmInfo.poster + ')',
      }"
      class="poster"
    ></div>
    <div class="content">
      <div style="font-size: 1rem">{{ filmInfo.name }}</div>
      <div>
        <div class="details">{{ filmInfo.category }}</div>
        <div class="details">{{ filmInfo.premiereAt | dateFilter }}</div>
        <div class="details">
          {{ filmInfo.nation }} | {{ filmInfo.runtime }}
        </div>
        <div
          class="details"
          style="line-height: 0.75rem"
          :class="isHidden ? '' : 'hidden'"
        >
          {{ filmInfo.synopsis }}
        </div>
        <div style="text-align: center; color: black">
          <i
            class="iconfont"
            @click="isHidden = !isHidden"
            :class="isHidden ? 'icon-good' : 'icon-process'"
          ></i>
        </div>
      </div>

      <div>
        <div>演职人员</div>
        <detail-swiper :perview="3.5" name="actor">
          <detail-swiper-item
            v-for="(data, index) in filmInfo.actors"
            :key="index"
          >
            <div
              :style="{
                backgroundImage: 'url(' + data.avatarAddress + ')',
              }"
              class="avatarAddress"
            ></div>
            <div style="text-align: center; font-size: 0.65rem">
              {{ data.name }}
            </div>
            <div style="text-align: center; font-size: 0.7rem">
              {{ data.role }}
            </div>
          </detail-swiper-item>
        </detail-swiper>
      </div>

      <div>
        <div>剧照</div>
        <detail-swiper :perview="2" name="photo">
          <detail-swiper-item
            v-for="(data, index) in filmInfo.photos"
            :key="index"
          >
            <div
              :style="{
                backgroundImage: 'url(' + data + ')',
              }"
              class="avatarAddress"
              @click="handlePreview(index)"
            ></div>
          </detail-swiper-item>
        </detail-swiper>
      </div>

      <div class="dog"></div>
    </div>
  </div>
</template>
<script>
import http from "@/util/http";
import obj from '@/util/mixinobj';
import moment from "moment";
import Vue from "vue";
import detailSwiper from "@/components/detail/DetailSwiper";
import detailHeader from "@/components/detail/DetailHeader";
import detailSwiperItem from "@/components/detail/DetailSwiperItem";
import { ImagePreview,Toast } from "vant";

//自定义指令封装原生JS底层DOM逻辑
Vue.directive("scroll", {
  //指令生命周期 创建
  inserted(el, binding) {
    el.style.display = "none";
    window.onscroll = () => {
      //考虑兼容性 用上 ||
      if (
        document.documentElement.scrollTop ||
        document.body.scrollTop > binding.value
      ) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    };
  },
  //销毁执行的生命周期
  unbind() {
    window.onscroll = null;
  },
});

Vue.filter("dateFilter", (date) => {
  return moment(date * 1000).format("YYYY-MM-DD");
});
export default {
  mixins:[obj],
  data() {
    return {
      filmInfo: null,
      isHidden: false,
    };
  },
  components: {
    detailSwiper,
    detailSwiperItem,
    detailHeader,
  },
  methods: {
    handlePreview(index) {
      ImagePreview({
        images: this.filmInfo.photos,
        startPosition: index,
        closeable: true,
        closeIconPosition: "top-left",
      });
    },
  },
  mounted() {
    //当前匹配的路由
    // console.log('mounted',this.$route.params.id)

    // axios 利用id 发请求到详情接口 获取详情数据 布局页面
    http({
      url: `/gateway?filmId=${this.$route.params.id}&k=6410241`,
      headers: {
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then((res) => {
      // console.log(res.data.data.film);
      this.filmInfo = res.data.data.film;
      Toast.clear()
    });
  },
};
</script>

<style lang="scss" scoped>
.poster {
  width: 100%;
  height: 10.5rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
.content {
  padding: 0.75rem;
  background: #6c4c49;
  .details {
    font-size: 0.65rem;
    color: #797d82;
    margin-top: 0.2rem;
  }
  i {
    font-size: 0.8rem;
  }
  .dog {
    width: 100%;
    height: 10rem;
    margin-top: 100rem;
    background-image: url(../assets/pika.png);
    background-size: 66%;
    background-repeat: no-repeat;
    background-position: center;
  }
}
.hidden {
  overflow: hidden;
  height: 1.5rem;
}
.avatarAddress {
  width: 100%;
  height: 4.25rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
