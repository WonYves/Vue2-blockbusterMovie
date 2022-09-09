<template>
  <footer>
    <ul>
      <router-link to="/films" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'myactive' : ''">
          <i class="iconfont icon-video"></i>
          <span> 电影 </span>
        </li>
      </router-link>

      <router-link to="/cinemas" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'myactive' : ''">
          <i class="iconfont icon-comments"></i>
          <span> 影院 </span>
        </li>
      </router-link>

      <router-link to="/center" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'myactive' : ''">
          <i class="iconfont icon-account"></i>
          <span> 我的 </span>
        </li>
      </router-link>
    </ul>
  </footer>
</template>

<script>
import "../assets/iconfont/iconfont.css";
export default {};
</script>

<style lang="scss" scoped>
.myactive {
  color: #c37e00;
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2.45rem;
  background: #b69968;
  color: black;
  z-index: 100;
  ul {
    display: flex;
    li {
      flex: 1;
      line-height: 1.25rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      i {
        font-size: 20px;
      }
      span {
        font-size: 16px;
      }
    }
  }
}
</style>
