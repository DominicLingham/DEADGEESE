<template>
  <div v-if="visible" class="carousel-overlay" @click.self="visible = false">
    <button class="close-button" @click="visible = false">×</button>
    <div class="carousel-container">
      <Splide :options="options" aria-labelledby="My Favorite Images" @splide:moved="handleSlideChange" ref="splideRef">
        <SplideSlide v-for="(image, index) in images" :key="image.id">
          <div class="slide-content">
            <NuxtImg :src="image.src" loading="lazy" placeholder />
            <div v-if="image.meta?.caption || image.meta?.credit" class="image-info">
              <p v-if="image.meta?.caption" class="caption">{{ image.meta?.caption }}</p>
              <p v-if="image.meta?.credit" class="credit">{{ image.meta?.credit }}</p>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script setup lang="ts">
import Polaroid from "../components/gallery/Polaroid.vue";
import type { PropType } from 'vue';
import type { Image } from "../types/types";

const props = defineProps<{
  images: Image[];
}>();

const visible = defineModel('visible', { default: false });
const currentImageIndex = defineModel('currentImage', { default: 0 });
const splideRef = ref(null);

// Watch for visibility changes to initialize the carousel at the correct index
watch(visible, (newValue) => {
  if (newValue && splideRef.value) {
    // Wait for next tick to ensure Splide is mounted
    nextTick(() => {
      splideRef.value.splide.go(currentImageIndex.value);
    });
  }
});

const handleSlideChange = (splide: any) => {
  currentImageIndex.value = splide.index;
};

const options = computed(() => ({
  perPage: 1,
  width: '90%',
  height: '80vh',
  gap: '1rem',
  padding: '1rem',
  type: 'loop',
  start: currentImageIndex.value,
  breakpoints: {
    768: {
      arrows: false,
    }
  }
}));
</script>

<style scoped>
.carousel-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.carousel-container {
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.close-button {
  position: fixed;
  top: 1rem;
  right: 4rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;
  line-height: 1;
  transition: transform 0.2s;
}

.close-button:hover {
  transform: scale(1.1);
}

.slide-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.image-info {
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 1rem;
  width: 100%;
  max-width: 800px;
}

.caption {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.credit {
  font-size: 0.9rem;
  opacity: 0.8;
  font-style: italic;
}

:deep(.splide__slide) {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  height: auto !important;
}

:deep(.splide__track) {
  padding-bottom: 2rem;
  /* Add space for pagination */
}

:deep(.splide__pagination) {
  bottom: 0;
  padding: 1rem 0;
}

:deep(img) {
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 8px;
}

:deep(.splide__arrow) {
  background: rgba(255, 255, 255, 0.647);
  color: white;
  width: 3.5rem;
  height: 3.5rem;
  opacity: 0.9;
  transition: all 0.2s ease;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

:deep(.splide__arrow svg) {
  width: 2rem;
  height: 2rem;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
}

:deep(.splide__arrow--prev) {
  left: -4rem;
}

:deep(.splide__arrow--next) {
  right: -4rem;
}

:deep(.splide__arrow:disabled) {
  opacity: 0.3;
  cursor: not-allowed;
  transform: none;
}
</style>