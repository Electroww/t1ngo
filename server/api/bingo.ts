import { nanoid } from "nanoid";
import data from "../bingo.json";
import { BingoCard, BingoCell, BingoCellType, BingoColor } from "~/types/bingo";
import typeColorMap from "~/lib/color-map";
import shuffle from "~/lib/shuffle";

export default defineEventHandler((event): BingoCard => {
  const bingoAssetsPath = "/bingo";

  const shuffledBingoCells = shuffle(
    data.map((item) => ({
      ...item,
      id: nanoid(),
      color: (typeColorMap[item.type as BingoCellType] ??
        "yellow") as BingoColor,
      asset: `${bingoAssetsPath}/${item.type}.svg`,
    }))
  );

  return shuffledBingoCells.slice(0, 25);
});
