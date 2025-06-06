<template>
  <div class="h-full container mx-auto">
    <div class="flex flex-col items-center justify-center">
      <div class="gallery-images grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
        <div class="gallery-item p-4">
          <Polaroid img-src="/gallery/DEADGEESEPROMO.jpeg"/>
        </div>

        <div class="gallery-item p-4">
          <Polaroid img-src="/gallery/DSCF5486.jpeg" />
        </div>

        <div class="gallery-item p-4">
          <Polaroid img-src="/gallery/DEADGEESEPROMO.jpeg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Polaroid from "../components/gallery/Polaroid.vue";

definePageMeta({
  layout: 'page'
})
</script>

<style scoped lang="scss">

</style>