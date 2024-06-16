<template>
  <!-- <div
    class="w-16 h-16 bg-red1 mr-5 rounded-full flex items-center justify-center"
    @click="handleClick()"
  >
    <MenuButton />
  </div> -->
  <div
    class="flex flex-col h-dvh bg-red1 h-v 2xl:h-full w-full 2xl:max-w-[40%] right-0 overflow-hidden transition-all duration-300 ease-in-out"
  >
    <div class="flex w-full flex-col items-center py-10">
      <div class="w-full text-center relative">
        <img
          :src="Star"
          class="w-10 h-10 2xl:w-12 2xl:h-12 text-yellow absolute left-8 top-16"
        />
        <h1
          class="font-modak text-6xl xl:text-7xl 2xl:text-[6rem] text-yellow uppercase text-center"
        >
          Let’s Play
        </h1>
        <h1
          class="font-modak text-5xl xl:text-8xl 2xl:text-[7rem] text-white1 uppercase -mt-4"
        >
          T1 BINGO!
        </h1>
        <img
          :src="Star"
          class="w-10 h-10 2xl:w-12 2xl:h-12 text-yellow absolute right-8 bottom-10 rotate-45"
        />
      </div>
      <div
        class="font-lexend text-yellow font-medium text-base 2xl:text-xl max-w-xl text-center"
      >
        A fun and simple community event bingo that you can do while watching T1
        games!
      </div>
    </div>
    <div
      class="bg-white1 w-full rounded-t-[4rem] py-8 px-16 flex-1 flex flex-col gap-12"
    >
      <ScrollArea>tete</ScrollArea>
      <div class="flex flex-col gap-4">
        <h2 class="text-red1 font-modak text-5xl uppercase text-center">
          How to play?
        </h2>
        <ol
          class="list-decimal font-lexend font-medium text-left text-base 2xl:text-lg text-dark"
        >
          <li>Generate a bingo card by clicking the <b>button below.</b></li>
          <li>
            While watching the series, mark the items that has happened in the
            game by clicking on the square.
          </li>
          <li>
            <b>Screenshot</b> and <b>share</b> your bingo card at the end of the
            match with
            <b class="text-red1">#T1ngo2024</b>
          </li>
        </ol>
      </div>
      <div class="flex flex-col gap-4">
        <h2 class="text-red1 font-modak text-5xl uppercase text-center">
          Notes
        </h2>
        <p
          class="font-lexend font-medium text-left text-base 2xl:text-lg text-dark"
        >
          The same link will be used every match. More items will be added as
          the split progresses. For any concerns, please message
          <a class="font-bold" href="https://twitter.com/gumayusing"
            >@gumayusing</a
          >
          on Twitter.
        </p>
      </div>
      <div class="hidden 2xl:flex justify-center gap-5">
        <button @click="generateBingoCard()" class="generate">Generate</button>
        <button
          @click="screenshotAndDownload()"
          class="share flex gap-2 items-center"
        >
          <img class="w-8" :src="Screenshot" />
          screenshot
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Star from "@/assets/images/star.svg";
import useScreenshot from "@/composables/useScreenshot";
import Screenshot from "@/assets/images/screenshot.svg";

const { screenshotAndDownload } = useScreenshot();
const { generateBingoCard } = await useGenerateBingoCard();

const open = ref(false);

const handleClick = () => {
  open.value = !open.value;
};
</script>
<style>
li {
  @apply pl-10;
}

button {
  @apply w-fit py-3 px-7 text-white1 font-modak font-normal text-2xl 2xl:text-4xl rounded-full uppercase;
}
.generate {
  @apply bg-red1 hover:scale-105 hover:shadow-xl transition-all duration-200 ease-in-out;
}
.share {
  @apply text-yellow hover:shadow-inner hover:bg-yellow/10 transition-all duration-300 ease-in-out;
}
</style>
