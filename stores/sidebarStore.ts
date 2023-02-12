import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar-store', () => {
    const showSidebar = ref(true)

    return { 
        showSidebar
    }
})