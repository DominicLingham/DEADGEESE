<template>
  <div class="flex flex-col">
        <div class="w-full p-4 flex flex-col justify-center items-center gap-6 md:flex-row lg:flex-row md:gap-8">
        <NuxtLink v-for="link in links"
                  :key="link.id"
                  class="text-3xl md:text-5xl whitespace-nowrap text-dg-primary cursor-pointer text-center"
                  :class="{ 
                  disabled: link.comingSoon,
                  'hover:text-white hover:underline': !link.comingSoon
                  }"
                  :to="link.path"
                  v-gsap.whileHover.to="{duration: 0.25, scale: '1.05'}">
          {{ link.text }}
          <span 
          v-if="link.comingSoon"
          class="block md:inline text-sm">
          (coming soon)
        </span>
        </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NavLink } from "../../types/types"

const links: NavLink[] = [
  {
    id: 'shows',
    text: "Shows",
    path: "/shows",
  },
  {
    id: 'music',
    text: "Music",
    path: "/music",
  },
  {
    id: 'gallery',
    text: "Gallery",
    path: "/gallery",
  },
  {
    id: 'contact',
    text: "Contact",
    path: "/contact",
  },
  {
    id: 'merch',
    text: "Merch",
    path: "/",
    comingSoon: true,
  },
]
</script>


<style>
.disabled {
  color: lightslategray;
  cursor: not-allowed;
}
</style>