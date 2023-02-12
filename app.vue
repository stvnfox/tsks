<script setup lang="ts">
  import { useSidebarStore } from './stores/sidebarStore';

  const store = useSidebarStore()
</script>

<template>
  <section class="flex min-h-screen bg-sky-800">
    <sidebar 
      v-if="store.showSidebar"
      class="w-1/4"
    />
    <todo-wrapper :class="store.showSidebar ? 'w-3/4' : 'w-full'"/>
  </section>
</template>