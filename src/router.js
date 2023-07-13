import {createRouter, createWebHistory} from 'vue-router';
import HomePage from './components/view/HomePage.vue';
import NewCarPage from './components/view/AddCarPage.vue';
import ActivityPage from './components/view/ActivityPage.vue';

const routes = [
    {path: '/', component: HomePage},
    {path: '/car/add', component: NewCarPage},
    {path: '/activity', component: ActivityPage}
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;