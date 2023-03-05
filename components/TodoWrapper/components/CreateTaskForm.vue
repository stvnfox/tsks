<script setup lang="ts">
    import { token } from '@formkit/utils'
    import { useProjectStore } from '~~/stores/projectStore';

    const emit = defineEmits<{
        (e: 'close-modal'): void
    }>()
    
    const { $client } = useNuxtApp()
    const subtasks = ref([] as string[])
    const store = useProjectStore()

    const state = reactive({
        callSucceeded: false,
        callFailed: false,
        title: '',
        description: '',
        status: 'Todo',
        subtasks: [] as string[]
    })

    const statusOptions = computed(() => {
        return ['Todo', 'Active', 'Done']
    })

    const closeModal = () => {
        emit('close-modal')
    }

    const addSubtask = () => {
        subtasks.value.push(token())
    }

    const removeSubtask = (e: any) => {
        const key = e.target.getAttribute('data-key')
        subtasks.value = subtasks.value.filter(item => item !== key)
    }

    const createTask = async () => {
        try {
            // Create todo call
            await $client.todos.create.mutate({
                id: Math.random(),
                created_at: new Date().toLocaleDateString(),
                projectId: Number(store.selectedProject?.id),
                title: state.title,
                description: state.description,
                subtasks: state.subtasks,
                status: state.status
            })

            // Set state of submit
            state.callSucceeded = true

            closeModal()
        } catch(error) {
            state.callFailed = true
        }
    }
</script>

<template>
    <div class="bg-sky-800 rounded-xl drop-shadow-lg w-1/2 p-8">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-semibold">
                Add new task
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
            submit-label="Create task"
            :submit-attrs="{
                wrapperClass: 'bg-black text-white w-fit px-4 py-2 rounded-lg mt-4',
                'data-theme': `dark`,
                ignore: false
            }"
            message-class="text-rose-800"
            @submit="createTask"
        >
            <form-kit
                v-model="state.title"
                type="text"
                id="create-task-title"
                name="title"
                validation="required"
                label="Title"
                outer-class="mb-4"
                input-class="w-3/4"
                message-class="text-rose-800"
                placeholder="Title of the task"
            />
            <form-kit
                v-model="state.description"
                type="textarea"
                id="create-task-description"
                validation="required"
                name="description"
                label="Description"
                rows="10"
                outer-class="mb-4"
                input-class="w-3/4"
                message-class="text-rose-800"
                placeholder="Description of the task"
            />
            <form-kit
                id="subtasks-list"
                type="list"
                label="Subtasks"
                v-model="state.subtasks"
            >
                <form-kit
                    v-for="(task, idx) in subtasks"
                    :key="task"
                    :id="task"
                    type="text"
                    :label="idx === 0 ? 'Subtasks' : ''"
                    outer-class="mb-4"
                    :sections-schema="{
                        suffix: {
                            $el: 'button',
                            attrs: {
                                class: 'text-xs ml-2',
                                'data-key': '$id',
                                type: 'button',
                                onClick: removeSubtask
                            },
                            children: 'Remove'
                        }
                    }"
                />
            </form-kit>
            <form-kit
                type="button"
                label="Add a subtask"
                @click="addSubtask"
            />
            <form-kit
                v-model="state.status"
                type="select"
                label="Status"
                name="status"
                :options="statusOptions"
            />
            <p 
                v-if="state.callFailed"
                class="text-rose-800 font-semibold mt-4"
            >
                Something went wrong. Please try again later.
            </p>
        </form-kit>
    </div>
</template>
