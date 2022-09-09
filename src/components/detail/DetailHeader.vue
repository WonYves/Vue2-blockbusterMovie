<template>
    <div class="header">
        <i class="iconfont icon-back " @click="handleBack"></i>
        <slot></slot>
    </div>
</template>

<script>
export default{
    methods:{
        handleBack(){
            this.$router.back()
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2.2rem;
    line-height: 2.2rem;
    background: #f2eada;
    text-align: center;
    z-index: 2;
    i{
        font-size: 1.5rem;
        position: fixed;
        left: .5rem;
        top: 0;
        height: 2.2rem;
        line-height: 2.2rem;
    }
}
</style>