import { createApp } from 'vue';
import './style.css';
import AppVue from './App.vue';
import { createVueRouter } from './router';
import { createLogger } from './plugin/logger/logger';

createApp(AppVue).use(createVueRouter()).use(createLogger()).mount('#app')
