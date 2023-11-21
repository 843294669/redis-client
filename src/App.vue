<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <IRedis/>
</template>

<script>
import IRedis from './components/IRedis.vue'

export default {
  name: 'App',
  components: {
    IRedis
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
