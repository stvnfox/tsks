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
    const state = reactive({
        callFailed: false,
        callSucceeded: false
    })
    
    const closeModal = () => {
        emit('close-modal')
    }

    const createProject = async (fields: ICreateProjectFields) => {
        try {
            await $client.projects.create.mutate({
                id: store.totalProjects + 1,
                title: fields.name,
                description: fields.description
            })

            state.callSucceeded = true
        } catch(error) {
            state.callFailed = true
        }
    }
</script>

<template>
    <div class="bg-sky-800 rounded-xl drop-shadow-lg w-1/2 p-8">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-semibold">
                Create a project
            </h2>
            <button
                type="button"
                alt="Click here to close this modal"
                @click="closeModal"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <form-kit
            v-if="!state.callSucceeded"
            type="form"
            submit-label="Create project"
            :submit-attrs="{
                wrapperClass: 'bg-black text-white w-fit px-4 py-2 rounded-lg mt-4',
                'data-theme': `dark`,
                ignore: false
            }"
            message-class="text-rose-800"
            @submit="createProject"
        >
            <form-kit
                type="text"
                id="create-project-name"
                name="name"
                validation="required"
                label="Name"
                outer-class="mb-4"
                input-class="w-3/4"
                message-class="text-rose-800"
                placeholder="Name of the project"
            />
            <form-kit
                type="textarea"
                id="create-project-description"
                validation="required"
                name="description"
                label="Your Essay"
                rows="10"
                outer-class="mb-4"
                input-class="w-3/4"
                message-class="text-rose-800"
                placeholder="Description of the project"
            />
            <p 
                v-if="state.callFailed"
                class="text-rose-800 font-semibold mt-4"
            >
                Something went wrong. Please try again later.
            </p>
        </form-kit>
        <div v-else>
            <p>
                Project successfully added!
            </p>
            <button 
                class="bg-black text-white w-fit px-4 py-2 rounded-lg mt-4"
                @click="closeModal"
            >
                Close window
            </button>
        </div>
    </div>
</template>