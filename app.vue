<script setup lang="ts">
  const { $client } = useNuxtApp()

  const data = await $client.projects.get.useQuery()
  const todo = await $client.todos.get.useQuery({ projectId: 0 })
</script>

<template>
  <section class="flex min-h-screen bg-sky-800">
    <sidebar class="w-1/4"/>
    <todo-wrapper class="w-3/4"/>
  </section>
</template>