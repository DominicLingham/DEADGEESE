<template>
  <div class="w-full p-4 flex md:flex-row justify-center items-center gap-8">
    <a v-for="link in socialLinks"
       :key="link.id"
       :href="link.url"
       target="_blank">
        <NuxtImg :src="link.imgMeta.src"
                 :alt="link.imgMeta.alt"
                 :width="link.imgMeta.width"
                 v-gsap.whileHover.to="{scale: '1.25'}"/>
    </a>
  </div>
</template>

<script lang="ts" setup>
import {SocialLink} from "../types/types";

const socialLinks: SocialLink[] = [
  {
    id: 2,
    name: "YouTube",
    url: "https://www.youtube.com/@DEADGEESE",
    imgMeta: {
      src: "/youtube_social_icon_red.png",
      width: "50px",
      alt: "YouTube Logo"
    }
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://www.instagram.com/deadgeeseband?igsh=OG93a25xNXhzbzBl",
    imgMeta: {
      src: "/instagram_Glyph_Gradient.png",
      width: "50px",
      alt: "Instagram Logo"
    }
  }
]

</script>

<style>

</style>