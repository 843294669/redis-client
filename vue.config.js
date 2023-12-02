import { defineConfig } from '@vue/cli-service'
export default defineConfig({
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
        fallthrough: true
      }
    },
    // 禁用SocketServer
    webSocketServer: false,
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
        ws: false,
        pathRewrite: {
          '^/completions': ''
        }
      }
    }
  }
  /** http依赖处理问题 */
  // configureWebpack: {
  //   resolve: {
  //     fallback: {
  //       http: false,
  //       https: false,
  //       net: false,
  //       tls: false,
  //       assert: false
  //     }
  //   }
  // }
  // configureWebpack: {
  //   resolve: {
  //     fallback: {
  //       http: require.resolve("stream-http"),
  //       https: require.resolve("https-browserify"),
  //       net: require.resolve("net"),
  //       tls: require.resolve("tls"),
  //       tls: require.resolve("url"),
  //       assert: require.resolve("assert/")
  //     }
  //   }
  // }
})
