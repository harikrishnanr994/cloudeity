import Dashboard from '../components/Dashboard.vue'
import Settings from '../components/Settings.vue'
import Messages from '../components/Messages.vue'
import Services from '../components/Services.vue'
import Free from '../components/Free.vue'
import Paid from '../components/Paid.vue'

export default [
  { path: '/dashboard',
    component: Dashboard},
  { path: '/settings',
    component: Settings},
  { path: '/messages',
    component: Messages},
  { path: '/services',
    component: Services},
  { path: '/free',
    component: Free},
  { path: '/paid',
    component: Paid}
]
