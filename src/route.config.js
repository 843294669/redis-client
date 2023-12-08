import { createRouter, createWebHistory } from 'vue-router';
import IRedis from './components/IRedis.vue';
import Chat from './components/Chat.vue';
const routes = [
    { path: '/', component: IRedis },
    { path: '/chat', component: Chat },
    { path: '/ai', redirect: 'https://api.openai.com' }
]

// 创建路由实例并传递 `routes` 配置
export default createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // history: createWebHashHistory(),
    history: createWebHistory(),
    // routes, // `routes: routes` 的缩写
    routes: routes
})
