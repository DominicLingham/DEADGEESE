<template>
  <div class="h-full flex flex-col justify-center items-center gap-4">
    <h1 class="text-dg-primary p-2 text-7xl md:text-9xl"
    v-gsap.infinitely.to="{
    duration: 0.7,
    color: 'white',
    repeat: -1,
    yoyo: true
  }">DEADGEESE</h1>
  <Links />
  <Socials />
  </div>
</template>

<script lang="ts" setup>
import Links from "@/components/navigation/Links"
import Socials from "@/components/Socials"
</script>

<style>

</style>