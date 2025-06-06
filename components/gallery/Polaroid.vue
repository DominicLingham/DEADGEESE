<template>
  <div class="polaroid cursor-pointer" :class="{
    'no-animation': disableAnimation,
    'no-tape': hideTape
  }" :style="{
    '--left-rotation': leftRotation,
    '--right-rotation': rightRotation,
    '--left-offset': `${leftOffset}px`,
    '--right-offset': `${rightOffset}px`
  }">
    <div class="polaroid__image">
      <NuxtImg :src="imgSrc" sizes="300px" />
    </div>
    <div class="polaroid__caption text-center p-3 min-h-16">
      <p v-if="caption" class="font-handwritten text-3xl">{{ caption }}</p>
      <p v-if="credit" class="font-handwritten text-xl">Photo credit - {{ credit }}</p>
    </div>
  </div>
</template>


<script setup lang="ts">

const props = withDefaults(defineProps<{
  imgSrc: string;
  caption?: string;
  credit?: string;
  hideTape?: boolean;
  disableAnimation: boolean;
}>(), {
  hideTape: false,
  disableAnimation: false,
});

const leftRotation = `${-30 - Math.random() * 30}deg`
const rightRotation = `${30 + Math.random() * 30}deg`
const leftOffset = -20 - Math.random() * 20
const rightOffset = -20 - Math.random() * 20
</script>

<style scoped lang="scss">
.polaroid {
  position: relative;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  min-height: 100%;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.05) rotate(2deg);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 20px;
    background: linear-gradient(135deg,
        rgba(255, 255, 153, 0.6) 0%,
        rgba(255, 255, 153, 0.4) 50%,
        rgba(255, 255, 153, 0.6) 100%);
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.15),
      inset 0 0 6px rgba(255, 255, 255, 0.5);
    border-radius: 2px;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));
    pointer-events: none;
  }

  &::before {
    top: 6px;
    left: var(--left-offset, -30px);
    transform: rotate(var(--left-rotation, -45deg));
    clip-path: polygon(0% 0%, 5% 10%, 0% 20%, 5% 30%, 0% 40%, 5% 50%, 0% 60%, 5% 70%, 0% 80%, 5% 90%, 0% 100%,
        100% 100%, 100% 0%);
  }

  &::after {
    top: 6px;
    right: var(--right-offset, -30px);
    transform: rotate(var(--right-rotation, 45deg));
    clip-path: polygon(0% 0%, 0% 100%,
        95% 100%, 100% 90%, 95% 80%, 100% 70%, 95% 60%, 100% 50%,
        95% 40%, 100% 30%, 95% 20%, 100% 10%, 95% 0%);
  }

  &.no-animation {
    transition: none;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }

  &.no-tape::before,
  &.no-tape::after {
    display: none;
  }
}
</style>
