<script setup lang="ts">
    import { IProject, useProjectStore } from '~~/stores/projectStore';
    
    const { $client } = useNuxtApp()
    const store = useProjectStore()
    const state = reactive({
        projects: [] as IProject[]
    })

    const boardsTitle = computed(() => {
        return `All boards (${state.projects.length})`
    })
    
    onMounted(async () => {
        const { data } = await $client.projects.get.useQuery()
    
        if(data.value) {
            state.projects = data.value;

            store.$patch({
                totalProjects: data.value.length,
                selectedProject: data.value[0]
            })
        }
    })
</script>

<template>
    <div>
        <h3 
            class="text-sm uppercase" 
            v-text="boardsTitle"
        />
        <ul>
            <sidebar-components-project-item
                v-for="project in state.projects"
                :key="project.id"
                :project="project"
            />
            <sidebar-components-create-project/>
        </ul>
    </div>
</template>