import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
// 注册指令，div 内容更新时自动翻滚滚动条。
// 注册需要放在 createApp(App); 之后
app.directive("scrollBottom", {
    updated(el) {
       el.scrollTo({
          top: el.scrollHeight - el.clientHeight,
          behavior: "smooth"
       })
    }
});
app.mount('#app');
