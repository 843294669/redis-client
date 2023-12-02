<template>
  <h2>Chat-GPT 3.5</h2>
  <div class="log" v-scrollBottom>
    <div class="commands" v-html="resp">
    </div>
  </div>
  <div class="input">
    <input id="input" v-model="prompt" @keyup.enter="send" />
  </div>
</template>
<script>
import axios from 'axios'
import api from '../utils/api.js'
axios.defaults.timeout = 50000;
export default {
  name: 'Chat',
  data() {
    return {
      prompt: "",
      resp: ""
    }
  },
  created() {
  },
  methods: {
    async send() {
      await axios.post(api.chat.completions,
        {
          'messages': [{ "role": "user", "content": this.prompt }],
          //'promot': this.prompt,
          'model': 'gpt-3.5-turbo',
          'max_tokens': 150,
          'temperature': 0.7
        },
        {
          maxBodyLength: 10000,
          //timeout: 0, // 设置超时值（以毫秒为单位）
          headers:
          {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` // Use environment variables for API keys
            'Authorization': 'Bearer process.env.OPENAI_API_KEY' // Replace with your actual API key
          }
          // proxy: { host: '127.0.0.1', port: 7890, protocol: 'http' }
          //httpsAgent: new HttpsProxyAgent("http://localhost:7890")
        })
        .then(response => {
          // 请求成功处理
          this.resp = response.data.choices[0].text;
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
<style src="@/assets/chat.css" scoped />
