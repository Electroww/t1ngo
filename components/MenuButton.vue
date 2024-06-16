<template>
  <div class="container">
    <a :class="[{ 'nav-open': menuOpen }, 'menu-toggle']" @click="toggleMenu()">
      <span class="menu-toggle-bar menu-toggle-bar--top"></span>
      <span class="menu-toggle-bar menu-toggle-bar--middle"></span>
      <span class="menu-toggle-bar menu-toggle-bar--bottom"></span>
    </a>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const menuOpen = ref(true);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>
<style scoped>
.container {
  @apply relative p-6;
}

.menu-toggle {
  @apply absolute left-6 top-1/2 transform -translate-y-1/2 h-7 w-7 cursor-pointer;
}

.menu-toggle-bar {
  @apply block absolute top-1/2 mt-[-1px] right-0 w-full h-1 rounded bg-white1 transition-all duration-300 ease-in-out;
}

.menu-toggle-bar.menu-toggle-bar--top {
  transform: translate(0, -8px);
}
.menu-toggle-bar.menu-toggle-bar--bottom {
  transform: translate(0, 8px);
}
.nav-open .menu-toggle-bar.menu-toggle-bar--top {
  transform: translate(0, 0) rotate(45deg);
}
.nav-open .menu-toggle-bar.menu-toggle-bar--middle {
  opacity: 0;
}
.nav-open .menu-toggle-bar.menu-toggle-bar--bottom {
  transform: translate(0, 0) rotate(-45deg);
}
</style>
