<script setup lang="ts">
    import { useSidebarStore } from '~~/stores/sidebarStore';

    const store = useSidebarStore()
</script>

<template>
    <section class="bg-sky-800">
        <todo-wrapper-components-header/>
        <todo-wrapper-components-show-sidebar-button 
            v-if="!store.showSidebar"
        />
    </section>
</template>
