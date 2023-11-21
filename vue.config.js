const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // must set true to open proxy.
    open: true,
    proxy: {
        "/redis": {
            target: "https://try.redis.io",
            changeOrigin: true,
            ws: false,
            pathRewrite: {
            '^/redis': ''
            }
        }
    }
  }
})
