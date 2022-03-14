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
  //输出路径
  // publicPath:'/app',
  //输出文件夹
  // outputDir:'dist',
  //输出html名称
  // indexPath:'index2.html',
  //eslint开关
  // lintOnSave:true,
  // lintOnSave:false, //关闭eslint
  // 是否需要source map
  productionSourceMap:true,
  //删除预加载
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  }
}