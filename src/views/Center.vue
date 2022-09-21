<template>
  <div>
    <div class="bigBox">
        <div class="header">
          <i class="iconfont icon-rfq1"></i>
          <span>WonYves</span>
        </div>

        <ul class="money">
          <li>
            <div>￥3488张</div>
            <div style="font-size: 13px; color: gray">优惠券</div>
          </li>
          <li>
            <div>￥686324.5</div>
            <div style="font-size: 13px; color: gray">余额</div>
          </li>
        </ul>

        <ul class="list">
          <li>
            <i class="iconfont icon-rfq1" style="color: goldenrod"></i>
            <span>Dragon</span>
            <div class="iconfont icon-more" @click="handleTo(1)"></div>
          </li>
          <li>
            <i class="iconfont icon-rfq1" style="color: #b54334"></i>
            <span>Czar</span>
            <div class="iconfont icon-more" @click="handleTo(2)"></div>
          </li>
          <li>
            <i class="iconfont icon-rfq1" style="color: skyblue"></i>
            <span>Zed</span>
            <div class="iconfont icon-more" @click="handleTo(3)"></div>
          </li>
          <li>
            <i class="iconfont icon-rfq1" style="color: green"></i>
            <span>Nocturne</span>
            <div class="iconfont icon-more" @click="handleTo(4)"></div>
          </li>
          <li>
            <i class="iconfont icon-rfq1" style="color: #b69968"></i>
            <span>Izreel</span>
            <div class="iconfont icon-more" @click="handleTo(5)"></div>
          </li>
          <li>
            <i class="iconfont icon-rfq1" style="color: #6c4c49"></i>
            <span>Udyr</span>
            <div class="iconfont icon-more" @click="handleTo(6)"></div>
          </li>
          <li>
            <i class="iconfont icon-rfq1" style="color: #f173ac"></i>
            <span>Sona</span>
            <div class="iconfont icon-more" @click="handleTo(7)"></div>
          </li>
          <li>
            <i class="iconfont icon-rfq1" style="color: #472d56"></i>
            <span>Jax</span>
            <div class="iconfont icon-more" @click="handleTo(8)"></div>
          </li>
          <li>
            <i class="iconfont icon-rfq1" style="color: #deab8a"></i>
            <span>Joker</span>
            <div class="iconfont icon-more" @click="handleTo(9)"></div>
          </li>
          <li>
            <i class="iconfont icon-rfq1" style="color: #892f1b"></i>
            <span>Vladimir</span>
            <div class="iconfont icon-more" @click="handleTo(10)"></div>
          </li>
          <li>
            <i class="iconfont icon-rfq1" style="color: #281f1d"></i>
            <span>Kassadin</span>
            <div class="iconfont icon-more" @click="handleTo(11)"></div>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleTo(index) {
      this.$router.push({ path: `/center${index}` });
    },
  },
};
</script>

<style lang="scss" scoped>
.bigBox{
    padding-bottom: 2.45rem;
}
.header {
  height: 10rem;
  background-image: url(../assets/2.png);
  background-size: 100%;
  span {
    position: relative;
    top: 3rem;
    left: 3rem;
    font-size: 16px;
    color: white;
  }
  i {
    position: relative;
    top: 3.5rem;
    left: 2rem;
    font-size: 60px;
    color: white;
  }
}

.money {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 4rem;
  border-bottom: 7px solid #d3d7d4;
  background: #f2eada;
  box-sizing: content-box;
//   margin-bottom: 1rem;
}
.list {
  display: flex;
  flex-direction: column;
//   height: 9.8rem;
  justify-content: center;
//   margin-top: 1rem;
  box-sizing: content-box;
  li {
    display: flex;
    text-align: center;
    line-height: 49px;
    flex: 1;
    border-bottom: 0.5px solid #d3d7d4;
    position: relative;
    background: #f2eada;
    i {
      width: 50px;
      font-size: 20px;
    }
    span {
      font-size: 15px;
    }
    div {
      position: absolute;
      right: 0.75rem;
      font-size: 20px;
    }
  }
}
</style>
