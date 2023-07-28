<script setup lang="ts">
  const { data } = useFetch('/api/jokes/recent')
</script>

<template>
  <div>
    <h1>Recent Dad jokes!</h1>
    {{  data  }}
  </div>
</template>