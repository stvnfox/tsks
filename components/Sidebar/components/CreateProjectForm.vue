<script setup lang="ts">
    import { useProjectStore } from '~~/stores/projectStore';

    interface ICreateProjectFields {
        name: string
        description: string
    }

    const emit = defineEmits<{
        (e: 'close-modal'): void
    }>()

    const { $client } = useNuxtApp()
    const store = useProjectStore()
    
    const closeModal = () => {
        emit('close-modal')
    }

    const createProject = async (fields: ICreateProjectFields) => {
        await $client.projects.create.mutate({
            id: store.totalProjects,
            title: fields.name,
            description: fields.description
        })
    }
</script>

<template>
    <div class="flex flex-col bg-sky-800 rounded-xl drop-shadow-lg w-1/2 p-8">
        <button
            type="button"
            alt="Click here to close this modal"
            class="self-end"
            @click="closeModal"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <form-kit 
            type="form"
            submit-label="Create project"
            :submit-attrs="{
                wrapperClass: 'bg-black text-white w-fit px-4 py-2 rounded-lg mt-4',
                'data-theme': `dark`,
                ignore: false
            }"
            @submit="createProject"
        >
            <form-kit
                type="text"
                name="name"
                id="create-project-name"
                validation="required|not:Admin"
                label="Name"
                input-class="w-3/4"
                help="Enter your character's full name"
                placeholder="“Scarlet Sword”"
            />
            <form-kit
                type="textarea"
                id="create-project-description"
                name="description"
                label="Your Essay"
                rows="10"
                input-class="w-3/4"
                placeholder="Remember to write in complete sentences."
                help="I'll know if you didn't read the book!"
            />
        </form-kit>
    </div>
</template>