<template>
  <div class="relative w-full">
    <div class="flex flex-col items-center justify-center">
      <div class="gallery-images mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(image, index) in images" :key="image.id" class="gallery-item p-4">
          <Polaroid :img-src="image.src" :caption="image.caption" :credit="image.credit"
            @click="handleImageClick(index)" class="cursor-pointer transition-transform hover:scale-105" />
        </div>
      </div>
    </div>

    <Carousel v-model:visible="showCarousel" v-model:currentImage="currentImageIndex" :images="images"
      class="fixed inset-0 z-50" />
  </div>
</template>

<script lang="ts" setup>
import Polaroid from "../components/gallery/Polaroid.vue";
import type { Image } from "../components/Carousel.vue";

const showCarousel = ref(false);
const currentImageIndex = ref<number>(0);

const images = [
  {
    id: 1,
    src: "/gallery/DEADGEESEPROMO.jpeg",
    caption: "DEADGEESE 2024",
  },
  {
    id: 2,
    src: "/gallery/DSCF5486.jpeg",
    caption: "DEADGEESE 2024",
    credit: "@naomigoesdigital"
  },
  {
    id: 3,
    src: "/gallery/DSCF5486.jpeg",
    caption: "DEADGEESE 2024",
    credit: "@naomigoesdigital"
  },
  {
    id: 4,
    src: "/gallery/DSCF5486.jpeg",
    caption: "DEADGEESE 2024",
    credit: "@naomigoesdigital"
  },


]

function handleImageClick(index): void {
  currentImageIndex.value = index;
  showCarousel.value = true;
}


definePageMeta({
  layout: 'page'
})
</script>

<style scoped lang="scss">
.gallery-images {
  width: 100%;
  margin: 2rem auto;
  padding: 2rem;
}

.gallery-item {
  break-inside: avoid;
  page-break-inside: avoid;
  max-width: 400px;
  margin: 0 auto;
}
</style>