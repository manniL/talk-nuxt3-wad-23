<script setup lang="ts">
const id = useRoute().params.id

const { data } = await useFetch<any>(`https://icanhazdadjoke.com/j/${id}`, {
  headers: {
    'Accept': 'application/json'
  }
})
</script>

<template>
  <div>
    {{ id }}
    {{ data.joke }}
  </div>
</template>