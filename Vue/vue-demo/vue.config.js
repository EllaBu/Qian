
module.exports = {
  // 解决打包后资源路径不对的问题
  publicPath: process.env.NODE_ENV === 'production' ? '/vueTest/' : '/',

  // 解决跨域配置
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://v.juhe.cn',
        target: 'http://apis.juhe.cn',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
// .env.development
// VUE_APP_BASE_API=/api