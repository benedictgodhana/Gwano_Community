import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'
import { VPicker } from 'vuetify/labs/VPicker'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';



const vuetify = createVuetify({
  components,
  directives,
  labsComponents,
  VPicker,
})


const app = createApp(App)

// Register the Vuetify VCalendar component


app.use(VCalendar, {})
app.use(router)

app.use(vuetify)

app.mount('#app')