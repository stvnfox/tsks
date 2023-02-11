<script setup lang="ts">
  const { $client } = useNuxtApp()

  const data = await $client.projects.get.useQuery()
  const todo = await $client.todos.get.useQuery({ projectId: 0 })
</script>

<template>
  <div>
    {{ data.data }}
    {{ todo.data }}
  </div>
</template>