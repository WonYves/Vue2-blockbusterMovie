<template>
    <div>
        <div class="center1">
            <i class="iconfont icon-rfq1"
            style="font-size:30px;
            color: pink;"
            @click="handleback"></i>
        </div>
        <div class="back">
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
.center1{
    background-image: url(@/assets/jpeg/1.jpeg);
    height: 100vh;
    width: 100vw;
    background-size:auto 100%;
    background-position: center center;
    background-repeat: no-repeat;
}
.center1 i{
    position: relative;
    left: .5rem;
    top: .5rem;
}
</style>