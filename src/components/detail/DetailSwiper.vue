<template>
    <div class="swiper" :class="name">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
  
    </div>
  </template>
  
  <script>
  import Swiper from 'swiper/bundle'
  import 'swiper/css/bundle'    //swiper 8.3版本以上 不使用swiper/swiper.min.css 找了一天的错误
  export default {
    props:{
        perview:{
            type:Number,
            default:1
        },
        name:{
            type:String,
            default:'kerwin'
        }
    },
      mounted(){
          new Swiper("."+this.name, {
            slidesPerView:this.perview,
            spaceBetween:30,
            freeMode:true
          })  
      },
  }
  </script>
  
  <style>
  </style>
  