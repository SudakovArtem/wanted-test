import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {createVuetify} from 'vuetify'
import {createPinia} from 'pinia'
import {createApp} from 'vue'
import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)

app.use(vuetify)
app.use(createPinia())

app.mount('#app')
