const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  // close ESlint rules
  lintOnSave: false,
  devServer: {
    // 启动服务后，打开浏览器： https://webpack.docschina.org/configuration/dev-server/#devserveropen
    open: true,
    static: {
      staticOptions: {
        // // 访问任何url是否都跳转首页: https://expressjs.com/en/4x/api.html#express.static
        fallthrough: false,
      }
    },
    proxy: {
        "/redis": {
            target: "https://try.redis.io",
            changeOrigin: true,
            ws: false,
            pathRewrite: {
              '^/redis': ''
            }
        },
        "/completions": {
            target: "https://api.openai.com/v1/chat/completions",
            //target: "https://api.openai.com/v1/engines/davinci-codex/completions",
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/completions': ''
            }
        }
    }
    
  }
})
