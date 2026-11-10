import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { useRoute } from 'vitepress'
import { h, nextTick, onMounted, watch } from 'vue'
import mediumZoom, { type Zoom } from 'medium-zoom'

import '@fontsource-variable/inter'
import '@fontsource/be-vietnam-pro/500.css'
import '@fontsource/be-vietnam-pro/600.css'
import '@fontsource/be-vietnam-pro/700.css'
import './style.css'

import DocMeta from './components/DocMeta.vue'
import DocBreadcrumb from './components/DocBreadcrumb.vue'
import HomePage from './components/HomePage.vue'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'doc-before': () => h(DocBreadcrumb),
    }),
  enhanceApp({ app }) {
    app.component('DocMeta', DocMeta)
    app.component('HomePage', HomePage)
  },
  setup() {
    const route = useRoute()
    let zoom: Zoom | null = null
    const initZoom = () => {
      zoom?.detach()
      zoom = mediumZoom('.vp-doc img:not(.no-zoom)', {
        background: 'var(--k-zoom-bg)',
        margin: 24,
      })
    }
    onMounted(initZoom)
    watch(
      () => route.path,
      () => nextTick(initZoom),
    )
  },
} satisfies Theme
