<script setup lang="ts">
  import { useSidebarStore } from './stores/sidebarStore';

  const store = useSidebarStore()
</script>

<template>
  <section class="flex min-h-screen bg-sky-800">
    <sidebar 
      :class="store.showSidebar ? 'w-1/4' : 'w-[80px]'"
      class="transition-all ease-in-out"
    />
    <todo-wrapper :class="store.showSidebar ? 'w-3/4' : 'w-full'"/>
  </section>
</template>