const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  server: {
    proxy: {
        target: "https://try.redis.io",
        changeOrigin: true
    }
  }
})
