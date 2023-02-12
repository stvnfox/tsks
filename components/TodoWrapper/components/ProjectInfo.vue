<script setup lang="ts">
    import { useProjectStore } from '~~/stores/projectStore';

    const store = useProjectStore()
</script>

<template>
    <div v-if="store.selectedProject">
        <h2 v-text="store.selectedProject.title"/>
        <p v-text="store.selectedProject.description"/>
    </div>
</template>