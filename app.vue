<template>
<NuxtLoadingIndicator />
<NuxtLayout>
  <NuxtPage />
</NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk && titleChunk !== 'DEADGEESE' ? `DEADGEESE | ${titleChunk}` : 'DEADGEESE';
  }
})
</script>