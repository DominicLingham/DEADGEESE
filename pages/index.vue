<template>
  <div class="h-full container mx-auto">
    <div class="w-full h-full flex flex-col justify-center items-center gap-4">
<!--       <h1 class="text-dg-primary p-2 text-7xl md:text-9xl"
          v-gsap.infinitely.to="
          {
            duration: 0.7,
            color: 'white',
            repeat: -1,
            yoyo: true
          }">DEADGEESE</h1> -->
      <div class="logo">
        <NuxtImg src="/DEADGEESE_LOGO.png" sizes="sm:250px md:350px"/>
      </div>
      <Links />
      <Socials />
      <div class="p-2 flex justify-center items-center md:w-full">
        <iframe style="border-radius:12px; max-width: 550px;"
                src="https://open.spotify.com/embed/artist/4WJcicbxWJZxYGXKNc3GEW?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
        </iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Links from "@/components/navigation/Links"
import Socials from "@/components/Socials"

</script>

<style>

</style>