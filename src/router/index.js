import Dashboard from '../components/Dashboard.vue'
import Settings from '../components/Settings.vue'
import Messages from '../components/Messages.vue'
import Services from '../components/Services.vue'
import Launchserver from '../components/Launchserver.vue'
import Paid from '../components/Paid.vue'

export default [
  { path: '/',
    redirect: '/dashboard'},
  { path: '/dashboard',
    component: Dashboard},
  { path: '/settings',
    component: Settings},
  { path: '/messages',
    component: Messages},
  { path: '/services',
    component: Services},
  { path: '/Launchserver',
    component: Launchserver},
  { path: '/paid',
    component: Paid}
]
