<template>
  <video ref="video" :src="src" :width="width" :class="className" muted loop controls playsinline />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  src: { type: String, required: true },
  width: { type: String, default: '640' },
  className: { type: String, default: '' },
});

const video = ref(null);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!video.value) return;
      if (entry.isIntersecting) {
        video.value.currentTime = 0;
        video.value.play();
      } else {
        video.value.pause();
      }
    },
    { threshold: 0.5 },
  );
  observer.observe(video.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>
