<template>
  <div class="h-full container mx-auto">
    <div class="w-full h-full flex flex-col gap-2 mt-4 items-center md:justify-center md:gap-6">
      <div class="logo flex flex-col items-center gap-2 mt-4">
        <NuxtImg src="/DEADGEESE_LOGO.png" class="logo" />
        <p class="text-white text-center md:text-xl">
          What's good for the goose, is good for the gander
        </p>
      </div>
      <Links />
      <Socials />
      <div class="p-2 flex justify-center items-center">
        <iframe class="spotify-embed"
          src="https://open.spotify.com/embed/artist/4WJcicbxWJZxYGXKNc3GEW?utm_source=generator&theme=0" height="152"
          frameBorder="0" :allowfullscreen=true
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
        </iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Links from "@/components/navigation/Links"
import Socials from "@/components/Socials"
import WalkingGoose from "@/components/WalkingGoose"

</script>

<style scoped lang="scss">
.spotify-embed {
  border-radius: 12px;
  width: 100%;
  max-width: 600px;

  @media(min-width: 768px) {
    width: 600px;
  }
}

.logo {
  width: 200px;

  @media(min-width: 767px) {
    width: 300px;
  }

  @media(min-width: 1024px) {
    width: 400px;
  }
}
</style>