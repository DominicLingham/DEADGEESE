<template>
  <div class="flex flex-col gap-2">
    <WalkingGoose />
        <div class="w-full p-4 flex flex-col md:flex-row justify-center items-center gap-6">
        <NuxtLink v-for="link in links"
                  :key="link.id"
                  class="text-5xl text-dg-primary cursor-pointer"
                  :class="{ 
                  disabled: link.comingSoon,
                  'hover:text-white': !link.comingSoon,
                  'cursor-not-allowed': link.comingSoon
                  }"
                  :to="link.path">
          <NuxtImg v-if="link.comingSoon"
          width="80px"
          src="/COMINGSOON2.png"
          class="absolute translate-x-[10%] translate-y-[90%] z-10"/>
          {{ link.text }}
        </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NavLink } from "../../types/types"
import WalkingGoose from "@/components/WalkingGoose"

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
  pointer-events: none;
}
</style>