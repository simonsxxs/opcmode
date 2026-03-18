import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { h } from 'vue'
import AiJobsHome from './AiJobsHome.vue'
import './custom.css'

const homePaths = new Set(['/', '/index.html'])

export default {
  ...DefaultTheme,
  Layout() {
    const route = useRoute()
    if (homePaths.has(route.path)) {
      return h(AiJobsHome)
    }
    return h(DefaultTheme.Layout)
  }
}
