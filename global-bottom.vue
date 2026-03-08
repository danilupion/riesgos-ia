<template>
  <footer class="footer-persistent">
    <img src="/logos/logo.png" class="h-5 rounded-full" />
    <span class="text-xs tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
      >pauseai.es</span
    >
  </footer>
</template>

<style>
.footer-persistent {
  position: fixed;
  bottom: 12px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.5;
  z-index: 100;
  pointer-events: none;
}
</style>
