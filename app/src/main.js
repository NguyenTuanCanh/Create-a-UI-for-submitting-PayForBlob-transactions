import { createApp } from 'vue'
import App from './App.vue'

import 'vue-toast-notification/dist/theme-sugar.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(fab, fas)


createApp(App).component('fa', FontAwesomeIcon).mount('#app')
