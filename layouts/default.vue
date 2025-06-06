<template>
  <div class="min-h-screen w-full p-2">
    <div class="flex min-h-[calc(100vh-1rem)] w-full flex-col">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style>
/* Ensure the layout takes up at least the full viewport height */
html,
body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

/* Remove any default margins that might cause gaps */
#__nuxt {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>