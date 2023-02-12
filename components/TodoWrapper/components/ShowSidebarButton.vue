<script setup lang="ts">
    import { useSidebarStore } from '~~/stores/sidebarStore';

    const store = useSidebarStore()
    const state = reactive({
        showSidebar: false
    })

    const showSidebar = () => {
        state.showSidebar = true

        store.$patch({
            showSidebar: true
        })
    }
</script>

<template>
    <button 
        class="flex items-center fixed bottom-6 left-6 border border-sky-900 hover:border-white bg-sky-900 text-white text-sm rounded-lg transition-colors py-2 px-4"
        @click="showSidebar"
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Show sidebar
    </button>
</template>