<script setup lang="ts">
    const state = reactive({
        showModal: false
    })

    const toggleProjectModal = () => {
        state.showModal = !state.showModal
    }
</script>

<template>
    <section>
        <button @click="toggleProjectModal">
            Create project
        </button>
        <div 
            v-if="state.showModal"
            class="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/30"
        >
            <sidebar-components-create-project-form
                @close-modal="toggleProjectModal"
            />
        </div>
    </section>
</template>