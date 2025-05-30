<template>
  <NuxtLayout name="default">
    <div :id="`${pageName}-page`">
      <nav class="flex justify-center">
      <NuxtLink class="logo mt-4" to="/">
        <NuxtImg src="/DEADGEESE_LOGO.png" sizes="sm:200px"/>
      </NuxtLink>
    </nav>
    <slot />
  </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const route = useRoute();

const pageName = computed<string>( () => route?.name ?? "site" );
</script>

<style>

</style>