<script setup lang="ts">
const color = useState('color', () => 'rebeccapurple')
</script>
<template>
  <div>
    <h1 :style="'color: ' + color">WeAreDevelopers hey!</h1>
    <AppColorChanger />
  </div>
</template>