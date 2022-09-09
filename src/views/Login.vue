<template>
    <div>
        login
        <button @click="handleLogin">登录</button>
    </div>
</template>
<script>
export default {
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