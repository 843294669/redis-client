<template>
  <div class="redis" v-html="data">
  </div>
  <div class="caption" v-html="caption">
  </div>
  <div class="input">
    <input id="input" />
  </div>
</template>

<script>
import axios from 'axios'
import api from '../utils/api.js'
export default {
  name: 'IRedis',
  data() {
    return {
        data: "",
        caption: ""
    }
  },
  async created() {
    await axios.get(api.redis.home)
        .then(response => {
          // 请求成功处理
          this.data = response.data.notification;
        })
        .catch(error => {
          // 请求失败处理
          console.error(error);
        });

    const v_this = this;
    Array.from(document.querySelectorAll('a[href="#help"]')).forEach(function(e) {
        e.addEventListener('click', function(e) {
            v_this.commandHelp(this.text);
            return false;
        });
    });
  },
  methods: {
    commandHelp(command) {
        axios.get(api.redis.commandHelp + command)
            .then(response => {
              // 请求成功处理
              this.caption = response.data.notification;
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
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.redis {
  overflow: auto;
}
.caption {
}
.input {
    position: fixed;
    bottom: 2.5em;
}
#input {
    font-size: 1.5em;
    background-color: #cc8139;
    color: #262626;
    border: 5px solid #595540;
    outline: none;
    background-repeat: no-repeat;
}
</style>
