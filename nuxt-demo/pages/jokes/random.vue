<script setup lang="ts">
  const { data } = await useFetch<any>('/api/jokes/random')
</script>

<template>
  <div>
    {{ data.joke }}
    <NuxtLink :to="'/jokes/'+data.id">To joke {{  data.id }}</NuxtLink>
  </div>
</template>