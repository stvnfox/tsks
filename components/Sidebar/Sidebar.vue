<script setup lang="ts">
  import { useSidebarStore } from '@/stores/sidebarStore';

  const store = useSidebarStore()
</script>

<template>
    <aside class="flex flex-col bg-sky-900 border-r border-r-slate-500 p-6">
        <h1 class="flex items-center leading-4">
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor" 
                :class="{'mr-2': store.showSidebar}"
                class="w-8 h-8 mt-1"
            >
                <path 
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
                />
            </svg>
            <span v-if="store.showSidebar">
                tsks
            </span>
        </h1>
        <sidebar-components-projects/>
        <sidebar-components-footer/>
    </aside>
</template>