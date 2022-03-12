module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        // https://www.imooc.com
        // https://www.fastmock.site/mock/06c20794bec4530e9f5ebae85a98d93a/api
        // http://mall-pre.springboot.cn
        //  http://mi.futurefe.com
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  // lintOnSave:false, //关闭eslint
}