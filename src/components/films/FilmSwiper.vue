<template>
  <div class="swiper kerwin">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>

    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'    //swiper 8.3版本以上 不使用swiper/swiper.min.css 找了一天的错误
export default {
    props:{
        loop:{
            type:Boolean,
            default:true
        }
    },
    mounted(){
        new Swiper(".kerwin", {
            pagination: {
                el: '.swiper-pagination',
            },
            loop:this.loop,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        })  
    },
}
</script>

<style scoped>
 .kerwin{
    background: #f6f5ec;
 }
</style>
