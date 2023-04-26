import { createApp } from 'vue'
import App from './App.vue'
import Card from "./components/card.vue";


export const app = createApp(App);

app.component('Card',Card);

app.mount('#app');
