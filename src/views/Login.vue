<template>
    <div>
        <div class="loginImg">
            <i class="iconfont icon-creditlevelfilling"></i>
            <ul>
                <li>
                    账号  <input type="text" placeholder="              不用输入">
                </li>
                <li>
                    密码  <input type="password">
                </li>
            </ul>
            <div @click="handleLogin">登录</div>
        </div>
    </div>
</template>
<script>
import obj from '@/util/mixinobj';
export default {
    mixins:[obj],
    methods:{
        handleLogin(){
            setTimeout(()=>{
                localStorage.setItem("token",'后端返回的token字段')
                // this.$router.back() // 返回
                // 1.获取 query字段
                // console.log(this.$route)
                // 2.跳转到当时想要跳的页面去

                this.$router.push(this.$route.query.redirect) 
            },0)
        }   
    }
}
</script>

<style lang="scss" scoped>
.loginImg{
    background-image: url(@/assets/1.png);
    height: 100vh;
    width: 100vw;
    background-size:auto 100%;
    background-position: center center;
    background-repeat: no-repeat;
    // display: flex;
    position: relative;
    i{
        position: absolute;
        margin-top: 6rem;
        margin-left:6.8rem;
        color:#78cdd1;
        font-size: 5rem;
    }
    ul{
        position: absolute;
        margin-top: 12rem;
        margin-left:2rem;
        input{
            background:rgba(255,255,255,0.15)
        }
        li{
            margin-top: 1.5rem;
            font-size: 20px;
            color: #009ad6;
        }
    }
    div{
        position: absolute;
        margin-top:23rem;
        margin-left:2.4rem;
        width: 14rem;
        height: 1.5rem;
        line-height: 1.5rem;
        background: #00a6ac;
        color: white;
        text-align: center;
    }
}
</style>