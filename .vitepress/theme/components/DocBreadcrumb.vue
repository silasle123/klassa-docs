<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { theme, page } = useData()

function norm(link?: string) {
  if (!link) return ''
  return link.replace(/\.md$/, '').replace(/\/index$/, '/').replace(/\.html$/, '')
}

const current = computed(() => {
  const rel = page.value.relativePath.replace(/\.md$/, '')
  return '/' + rel.replace(/(^|\/)index$/, '$1')
})

type Item = { text?: string; link?: string; items?: Item[] }

function find(items: Item[], trail: string[]): string[] | null {
  for (const it of items) {
    if (it.link && norm(it.link) === current.value) return trail
    if (it.items) {
      const r = find(it.items, it.text ? [...trail, it.text] : trail)
      if (r) return r
    }
  }
  return null
}

const crumb = computed(() => {
  const sb = theme.value.sidebar as Item[] | undefined
  if (!Array.isArray(sb)) return ''
  const t = find(sb, [])
  return t && t.length ? t.join(' / ') : ''
})
</script>

<template>
  <p v-if="crumb" class="k-crumb">{{ crumb }}</p>
</template>
