import {createApp} from 'vue'
import App from './App.vue'


var app = createApp(App);
console.log(app);

var vm = app.mount('#app');

window.vm = vm