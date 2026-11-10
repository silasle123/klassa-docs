<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { PhUsers, PhPuzzlePiece } from '@phosphor-icons/vue'

const { frontmatter } = useData()

const roles = computed<string[]>(() => {
  const r = frontmatter.value.roles
  if (!r) return []
  return (Array.isArray(r) ? r : String(r).split(','))
    .map((s) => String(s).trim())
    .filter(Boolean)
})
const plugin = computed(() => (frontmatter.value.plugin ? String(frontmatter.value.plugin) : ''))
</script>

<template>
  <div v-if="roles.length || plugin" class="k-meta">
    <span v-if="roles.length" class="k-meta__label">
      <PhUsers :size="16" aria-hidden="true" />
      Dành cho
    </span>
    <span v-for="r in roles" :key="r" class="k-chip">{{ r }}</span>
    <span v-if="plugin" class="k-chip k-chip--plugin" :title="`Tính năng thuộc gói mở rộng ${plugin}`">
      <PhPuzzlePiece :size="14" aria-hidden="true" />
      Cần gói {{ plugin }}
    </span>
  </div>
</template>
