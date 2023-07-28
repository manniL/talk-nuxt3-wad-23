<script setup lang="ts">
  const { data } = useFetch('/api/test')
  const result = computed(() => data.value)
</script>

<template>
  <div>
    Hey from index!
  </div>
</template>