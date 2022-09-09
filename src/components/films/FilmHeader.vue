<template>
  <ul>
    <router-link to="/films/nowplaying" custom v-slot="{ navigate, isActive }">
      <li @click="navigate" >
        <span :class="isActive ? 'myactive' : ''">正在热映</span>
      </li>
    </router-link>

    <router-link to="/films/comingsoon" custom v-slot="{ navigate, isActive }">
      <li @click="navigate" >
        <span :class="isActive ? 'myactive' : ''">即将上映</span>
      </li>
    </router-link>
  </ul>
</template>

<style lang="scss" scoped>
ul{
    display: flex;
    height: 2.45rem;
    line-height: 2.45rem;
    li{
        flex: 1;
        text-align: center;
        background: #f6f5ec;
        span{
            font-size: .70rem;
            padding: .15rem;
        }
    }
}
.myactive{
    color:  #96582a;
    border-bottom: .1rem solid  #9b95c9;
}
</style>