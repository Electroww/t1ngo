<template>
  <div
    id="bingo"
    class="w-full h-full flex flex-col items-center justify-center gap-4"
  >
    <div
      class="2xl:hidden flex flex-wrap justify-center items-center gap-5 pt-6 w-full"
    >
      <button @click="generateAndClean()" class="generate">Generate</button>
      <button
        @click="screenshotAndDownload()"
        class="share flex gap-2 items-center"
      >
        <img class="w-8" :src="Screenshot" />
        screenshot
      </button>
    </div>
    <div
      class="rounded-[4vmin] border-[1.4vmin] border-dark overflow-hidden"
      ref="bingo"
    >
      <div
        class="border-[0.4vmin] rounded-[2.6vmin] border-white1 w-[90vmin] h-[90vmin] grid grid-cols-5 grid-rows-5 overflow-hidden gap-[0.4%] bg-white1"
      >
        <div
          v-for="(cell, index) in data"
          :key="cell.id"
          class="cursor-pointer box-border rounded-lg overflow-hidden"
          :class="[colors[cell.color], { cell: !checkeds.includes(cell.id) }]"
          @click="handleClick(cell)"
        >
          <div
            class="relative flex h-full w-full flex-col items-center justify-center text-center text-white1 px-[4%] p-[2%]"
            v-if="index !== 12"
          >
            <Transition name="appear">
              <div
                v-if="checkeds.includes(cell.id)"
                class="absolute w-full h-full bg-black/50 flex items-center justify-center z-20"
              >
                <img :src="Check" class="w-[50%]" />
              </div>
            </Transition>
            <img class="img-cell transition-all w-[50%]" :src="cell.asset" />
            <span
              class="label-cell font-bold text-[1.8vmin] leading-tight mt-[2%]"
              :class="cell.color === 'yellow' ? 'text-dark/90' : 'text-white1'"
              >{{ cell.text }}</span
            >
          </div>
          <div
            class="flex flex-col h-full items-center justify-center font-modak bg-dark text-white1 box-border"
            v-else
          >
            <img src="@/assets/images/t1ngo.svg" class="h-[60%]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Check from "@/assets/images/check.svg";
import type { BingoCell } from "@/types/bingo";
import useScreenshot from "@/composables/useScreenshot";
import Screenshot from "@/assets/images/screenshot.svg";

const colors = {
  red1: "bg-red1",
  red2: "bg-red2",
  yellow: "bg-yellow",
};

const checkeds = ref<string[]>([]);

const handleClick = (cell: BingoCell) => {
  if (checkeds.value.includes(cell.id)) {
    checkeds.value = checkeds.value.filter((id) => id !== cell.id);
  } else {
    checkeds.value = [...checkeds.value, cell.id];
  }
};

const { data, generateBingoCard } = await useGenerateBingoCard();
await generateBingoCard();

const { setBingoRef, screenshotAndDownload } = useScreenshot();
const bingo = ref(null);

const generateAndClean = async () => {
  await generateBingoCard();
  checkeds.value = [];
};

watchEffect(() => {
  if (bingo.value) {
    setBingoRef(bingo.value);
  }
});
</script>

<style scoped>
.cell:hover .img-cell {
  transform: scale(1.2);
}

.appear-enter-active,
.appear-leave-active {
  transition: all 0.2s ease-in-out;
}

.appear-enter-from,
.appear-leave-to {
  opacity: 0;
}
</style>
