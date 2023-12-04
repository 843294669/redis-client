import {defineConfig} from '@vue/cli-service'
// import {createProxyMiddleware} from 'http-proxy-middleware'
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
    // setupMiddlewares: createProxyMiddleware('/openai', {
    //   target: 'http://localhost:7890',
    //   changeOrigin: true,
    // }),
    proxy: {
      "/redis": {
        target: "https://try.redis.io",
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/redis': ''
        },
        // bypass: function (req, res, proxyOptions) {
        //   console.log('Skipping proxy for browser request.');
        // }
      },
      "/openai": {
        target: "https://chat.openai.com",
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/openai': ''
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
  },
  /** 处理http依赖问题 */
  configureWebpack: {
    resolve: {
      fallback: {
        http: false,
        https: false,
        net: false,
        tls: false,
        assert: false,
        url: false,
        stream: false,
        querystring: false,
        zlib: false,
        util: false,
        path: false,
      }
    }
  }
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
