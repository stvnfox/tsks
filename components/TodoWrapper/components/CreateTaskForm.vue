<script setup lang="ts">
    const emit = defineEmits<{
        (e: 'close-modal'): void
    }>()

    const state = reactive({
        callSucceeded: false,
        callFailed: false,
        subtasks: [] as string[]
    })

    const closeModal = () => {
        emit('close-modal')
    }

    const addSubtask = () => {
        state.subtasks.push('')
    }

    const createTask = async () => {
        console.log(state)
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
                type="text"
                id="create-task-title"
                name="title"
                validation="required"
                label="Title"
                outer-class="mb-4"
                input-class="w-3/4"
                message-class="text-rose-800"
                placeholder="Title of the project"
            />
            <form-kit
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
            <FormKit
                v-model="state.subtasks"
                type="list"
            >
                <p>Please provide a list of emails.</p>
                <FormKit
                    v-for="task in state.subtasks"
                    :key="task"
                    v-model="task"
                    label="Email address"
                    validation="required|email"
                />
                <form-kit
                    type="button"
                    @click="addSubtask"
                />
            </FormKit>
            <p 
                v-if="state.callFailed"
                class="text-rose-800 font-semibold mt-4"
            >
                Something went wrong. Please try again later.
            </p>
        </form-kit>
    </div>
</template>
