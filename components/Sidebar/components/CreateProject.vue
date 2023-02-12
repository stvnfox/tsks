<script setup lang="ts">
    import { useSidebarStore } from '~~/stores/sidebarStore';

    const store = useSidebarStore()
    const state = reactive({
        showModal: false
    })

    const buttonText = computed(() => {
        if(store.showSidebar) {
            return 'Create project'
        } else {
            return `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="min-w-[32px] w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            `
        }
    })

    const toggleProjectModal = () => {
        state.showModal = !state.showModal
    }
</script>

<template>
    <li class="mt-4">
        <button
            class="flex items-center"
            @click="toggleProjectModal"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="min-w-[24px] w-6 h-6 mr-2"
            >
                <path 
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                />
            </svg>
            <transition>
                <span
                    v-if="store.showSidebar"
                    class="whitespace-nowrap"
                >
                    Create project
                </span>
            </transition>
        </button>
    </li>
    <div 
        v-if="state.showModal"
        class="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/30"
    >
        <sidebar-components-create-project-form
            @close-modal="toggleProjectModal"
        />
    </div>
</template>