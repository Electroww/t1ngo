<template>
  <div
    className="pb-10 flex-col-reverse flex 2xl:pb-0 2xl:flex-row h-full overflow-hidden relative"
  >
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
