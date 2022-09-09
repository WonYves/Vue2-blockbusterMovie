const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true ,
  //禁用lint
  lintOnSave: false,
  
  // 反向代理
  devServer:{
    proxy:{
      '/kerwin':{
        target:'https://gimg2.baidu.com',
        changeOrigin:true,
        pathRewrite:{
          '/kerwin':''
        }
      }
    }
  }
})
