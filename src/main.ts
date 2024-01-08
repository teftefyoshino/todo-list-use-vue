import { createApp } from 'vue';
import './style.css';
import AppVue from './App.vue';
import { createVueRouter } from './router';

createApp(AppVue).use(createVueRouter()).mount('#app')
