<template>
  <div>  
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
  <ul v-if="value">
        <li v-for="data in computedList" :key="data.cinemaId">
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
</template>

<script>
export default {
    data(){
        return{
            value:''
        }
    },
    computed:{
        computedList(){
            return this.$store.state.cinemaList.filter(item=>  item.name.toUpperCase().includes(this.value.toUpperCase()) || item.address.toUpperCase().includes(this.value.toUpperCase() ))
        }   
    },
    methods:{
        onSearch(){

        },
        onCancel(){
            this.$router.back()
        }
    },
  mounted() {
    if (this.$store.state.cinemaList.length === 0) {
      this.$store.dispatch("geitCinemasData", this.$store.state.cityId);
    }
  },
};
</script>

<style lang="scss" scoped>
    ul {
    //   background: #f2eada;
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
