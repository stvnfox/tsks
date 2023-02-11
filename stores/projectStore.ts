import { defineStore } from 'pinia'

export interface IProject {
    id: number
    title: string | null
    description: string | null
}

export const useProjectStore = defineStore('counter', () => {
    const selectedProject = ref({} as IProject)
    const totalProjects = ref(0)

    return { 
        selectedProject,
        totalProjects
    }
})