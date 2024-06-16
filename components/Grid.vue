<template>
  <div
    id="bingo"
    class="w-full h-full flex flex-col items-center justify-center gap-10"
  >
    <div class="2xl:hidden flex justify-center items-center gap-5 pt-6 w-full">
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
      ref="bingo"
      class="border-2 outline-[0.8rem] outline-dark outline rounded-xl border-white1 md:w-[50rem] md:h-[50rem] grid grid-cols-5 overflow-hidden"
    >
      <div
        v-for="cell in data"
        :key="cell.id"
        class="relative flex min-h-full flex-col items-center justify-center text-center border-2 border-white1 text-white1 cursor-pointer box-border p-5"
        :class="[colors[cell.color], { cell: !checkeds.includes(cell.id) }]"
        @click="handleClick(cell)"
      >
        <Transition name="appear">
          <div
            v-if="checkeds.includes(cell.id)"
            class="absolute w-full h-full bg-black/50 flex items-center justify-center z-20"
          >
            <img :src="Check" class="w-14 md:w-20" />
          </div>
        </Transition>
        <img
          class="img-cell transition-all"
          :src="images[cell.type]"
          width="90px"
        />
        <span class="label-cell font-bold leading-4 text-xs md:text-base">{{
          cell.text
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Cup from "@/assets/images/worldscup.svg";
import Faker from "@/assets/images/faker.svg";
import Zeus from "@/assets/images/zeus.svg";
import Keria from "@/assets/images/keria.svg";
import Oner from "@/assets/images/oner.svg";
import Guma from "@/assets/images/guma.svg";
import Oke from "@/assets/images/oke.svg";
import Pog from "@/assets/images/pog.svg";
import Solobolo from "@/assets/images/solobolo.svg";
import Niceu from "@/assets/images/niceu.svg";
import Kkabi from "@/assets/images/kkabi.svg";
import Rage from "@/assets/images/rage.svg";
import Bot from "@/assets/images/bot.svg";
import Mid from "@/assets/images/mid.svg";
import Lck from "@/assets/images/lck.svg";
import T1 from "@/assets/images/t1.svg";
import Jgl from "@/assets/images/jgl.svg";
import Supp from "@/assets/images/supp.svg";
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

const images = {
  cup: Cup,
  faker: Faker,
  zeus: Zeus,
  keria: Keria,
  oner: Oner,
  guma: Guma,
  oke: Oke,
  pog: Pog,
  solobolo: Solobolo,
  niceu: Niceu,
  kkabi: Kkabi,
  rage: Rage,
  bot: Bot,
  mid: Mid,
  lck: Lck,
  t1: T1,
  jgl: Jgl,
  supp: Supp,
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
