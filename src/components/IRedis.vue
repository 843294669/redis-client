<template>
  <h1>Redis Commands</h1>
  <div class="log" v-scrollBottom>
    <div class="commands" v-html="data">
    </div>
    <div class="caption" v-html="caption">
    </div>
  </div>
  <div class="input">
    <input id="input" v-model="command" @keyup.enter="commandSend" placeholder=" type a redis command." />
  </div>
  <div>
    <router-link to="/chat" class="gpt">Go To Chat-GPT 3.5</router-link>
  </div>
</template>
<script>
import axios from 'axios'
import api from '../utils/api.js'
export default {
  name: 'IRedis',
  data() {
    return {
      data: "Data Loading ...",
      caption: "",
      command: ""
    }
  },
  async created() {
    // 路由映射是否配置成功
    // console.log(this.$router.options.routes);
    await axios.get(api.redis.help)
      .then(response => {
        // 请求成功处理
        this.data = response.data.notification;
      })
      .catch(error => {
        // 请求失败处理
        console.error(error);
      });

    const v_this = this;
    Array.from(document.querySelectorAll('a[href="#help"]')).forEach(function (e) {
      e.addEventListener('click', function (e) {
        v_this.commandHelp(this.text);
        return false;
      });
    });
  },
  // 路由守卫
  beforeRouteLeave(to, from, next) {
    // console.log("to===", to.name) 
    // console.log("from.name ===", from.name) 
    // console.log("from ===", from)    
    // next( vm => {
    //   if(from.name === 'xxx') {
    //     // 处理语句，可以是 data 中的数据，也可以是 methods中的函数。vm 相当于 this       
    //     vm.name = 'xxx' 
    //     vm.alarm()
    //   }
    // })
  },
  methods: {
    commandHelp(command) {
      axios.get(api.redis.help + command)
        .then(response => {
          // 请求成功处理
          this.caption += response.data.notification;
        })
        .catch(error => {
          // 请求失败处理
          console.error(error);
        });
    },
    commandSend() {
      if (this.command.trim() == "") {
        return;
      }
      axios.get(api.redis.sendCommand + this.command.replace(/ /g, "+"))
        .then(response => {
          // 请求成功处理
          this.caption += this.command + "：";
          this.caption += response.data.response + "<br/>";
          this.command = "";
        })
        .catch(error => {
          // 请求失败处理
          console.error(error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="@/assets/iredis.css" scoped />
