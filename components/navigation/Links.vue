<template>
    <div class="w-full p-4 flex flex-col md:flex-row justify-center items-center gap-6">
        <NuxtLink v-for="link in links"
                  :key="link.id"
                  class="text-5xl cursor-pointer text-dg-primary hover:text-white"
                  :to="link.path">
          {{ link.text }}
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import {NavLink} from "../../types/types";

const links: NavLink[] = [
  {
    id: 1,
    text: "About",
    path: "/about"
  },
  {
    id: 2,
    text: "Shows",
    path: "/shows"
  },
  {
    id: 3,
    text: "Merch",
    path: "/"
  }
]
</script>

<style>

</style>