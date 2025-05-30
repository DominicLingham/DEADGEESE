<template>
    <div class="goose-container w-full items-center" ref="gooseContainer">
          <img 
          :src="gooseSrc"
          width="50px"
          class="goose"
          ref="goose"/>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import gsap from 'gsap'

const gooseContainer = ref<HTMLElement | null>(null)
const goose = ref<HTMLElement | null>(null)

const leftToRightGoose = "/WalkingGooseLTR.gif"
const rightToLeftGoose = "/WalkingGooseRTL.gif"
const gooseSrc = ref(leftToRightGoose)

let distance = 0
let stopLoop = false // control flag

function calculateDistance() {
  if (gooseContainer.value && goose.value) {
    const wrapperWidth = gooseContainer.value.offsetWidth
    const gooseWidth = goose.value.offsetWidth
    distance = wrapperWidth - gooseWidth
  }
}

async function animateGooseLoop() {
  if (!gooseContainer.value || !goose.value) return

  calculateDistance()
  stopLoop = false

  while (!stopLoop) {
    gooseSrc.value = leftToRightGoose
    await nextTick()

    await gsap.to(goose.value, {
      x: distance,
      duration: 10,
      ease: 'linear',
    })

    if (stopLoop) break

    gooseSrc.value = rightToLeftGoose
    await nextTick()

    await gsap.to(goose.value, {
      x: 0,
      duration: 5,
      ease: 'linear',
    })
  }
}

function restartGooseAnimation() {
  stopLoop = true
  gsap.killTweensOf(goose.value)
  gsap.set(goose.value, { x: 0 }) // reset position
  animateGooseLoop()
}

onMounted(() => {
  animateGooseLoop()
})

useResizeObserver(gooseContainer, () => {
  restartGooseAnimation()
})
</script>


<style scoped>
.goose-container {
  width: 100%;
}

.goose {
  position: relative;
  top: 10px;
}
</style>