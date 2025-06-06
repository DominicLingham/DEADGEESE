<template>
  <NuxtLayout name="default">
    <div :id="`${pageName}-page`" class="flex min-h-full w-full flex-col p-4">
      <nav class="sticky top-0 z-10 flex justify-center py-4 bg-black bg-opacity-80">
        <NuxtLink class="logo" to="/">
          <NuxtImg src="/DEADGEESE_LOGO.png" sizes="sm:200px" class="max-h-24 w-auto" />
        </NuxtLink>
      </nav>
      <main class="flex flex-1 flex-col">
        <slot />
      </main>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const route = useRoute();
const pageName = computed<string>(() => route?.name ?? "site");
</script>

<style>
/* Ensure the page content fills the available space */
#site-page {
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* Remove any potential margin gaps */
main {
  margin: 0;
  padding: 0;
}
</style>