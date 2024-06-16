<template>
  <div
    className="gap-16 pb-16 flex-col-reverse flex 2xl:pb-0 2xl:flex-row h-full overflow-hidden relative"
  >
    <!-- <h1 class="font-modak text-5xl text-red2">
    T1 BINGO!
  </h1> -->
    <div class="flex-1">
      <Grid />
    </div>
    <SidePanel />
  </div>
</template>

<script setup lang="ts">
import Grid from "../components/Grid.vue";
import SidePanel from "../components/SidePanel.vue";
import { initUseScreenshot } from "@/composables/useScreenshot";
import { initUseGenerateBingoCard } from "@/composables/useGenerateBingoCard";

initUseScreenshot();
initUseGenerateBingoCard();
</script>

<style scoped></style>
