import { createRouter, createWebHashHistory } from 'vue-router';
import Chat from './components/Chat.vue';
import App from './App.vue';
const routes = [
    { path: '/', component: App },
    { path: '/chat', component: Chat }
]

// 创建路由实例并传递 `routes` 配置
export default createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes
})