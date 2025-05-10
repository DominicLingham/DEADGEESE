<template>
  <div class="w-full p-4 flex flex-col md:flex-row justify-center items-center gap-5">
    <a v-for="link in socialLinks"
       :key="link.id"
       :href="link.url"
       target="_blank">
        <NuxtImg :src="link.imgMeta.src"
                 :alt="link.imgMeta.alt"
                 :width="link.imgMeta.width" />
    </a>
  </div>
</template>

<script lang="ts" setup>
import {SocialLink} from "../types/types";

const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "Spotify",
    url: "",
    imgMeta: {
      src: "/Spotify_Primary_Logo_RGB_Green.png",
      width: "50px",
      alt: "Spotify Logo"
    }
  },
  {
    id: 2,
    name: "YouTube",
    url: "https://www.youtube.com/@DEADGEESE",
    imgMeta: {
      src: "/youtube_social_icon_red.png",
      width: "50px",
      alt: "YouTube Logo"
    }
  }
]

</script>

<style>

</style>