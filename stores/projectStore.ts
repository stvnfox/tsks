import { defineStore } from 'pinia'

export interface IProject {
    id: number
    title: string | null
    description: string | null
}

export const useProjectStore = defineStore('project-store', () => {
    const projectIsAdded = ref(false)
    const selectedProject = ref({} as IProject)
    const totalProjects = ref(0)

    return { 
        projectIsAdded,
        selectedProject,
        totalProjects
    }
},
{
    persist: [
        {
            paths: ['selectedProject'],
            storage: sessionStorage
        }
    ]
})