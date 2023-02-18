<script setup lang="ts">
    const state = reactive({
        showModal: false
    })

    const toggleTaskModal = () => {
        state.showModal = !state.showModal
    }
</script>

<template>
    <div>
        <button
            class="flex items-center"
            @click="toggleTaskModal"
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
            <span class="whitespace-nowrap">
                Add new task
            </span>
        </button>
        <div 
            v-if="state.showModal"
            class="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/30"
        >
            <todo-wrapper-components-create-task-form
                @close-modal="toggleTaskModal"
            />
        </div>
    </div>
</template>