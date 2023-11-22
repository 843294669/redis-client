import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.directive("scrollBottom", {
    updated(el) {
       el.scrollTo({
          top: el.scrollHeight - el.clientHeight,
          behavior: "smooth"
       })
    }
});
app.mount('#app');
