<script setup lang="ts">
    import { IProject, useProjectStore } from '@/stores/projectStore'
    
    const props = defineProps<{
        project: IProject
    }>()

    const store = useProjectStore()

    const setSelectedProject = (project: IProject) => {
        store.$patch({
            selectedProject: project
        })
    }
</script>

<template>
    <li>
        <button 
            :class="{'underline': project.id === store.selectedProject?.id}"
            class="text-white"
            v-text="project.title"
            @click="setSelectedProject(project)"
        />
    </li>
</template>