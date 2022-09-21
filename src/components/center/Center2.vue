<template>
    <div>
        <div class="center2">
            <i class="iconfont icon-rfq1"
            style="font-size:30px;
            color: pink;"
            @click="handleback"></i>
        </div>
    </div>
</template>


<script>
import obj from '@/util/mixinobj';
export default {
    mixins:[obj],
    methods:{
        handleback(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
.center2{
    background-image: url(@/assets/jpeg/2.jpeg);
    height: 100vh;
    width: 100vw;
    background-size:auto 100%;
    background-position: center center;
    background-repeat: no-repeat;
}
.center2 i{
    position: relative;
    left: .5rem;
    top: .5rem;
}
</style>