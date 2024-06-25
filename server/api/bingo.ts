import { nanoid } from "nanoid";
import data from "../bingo.json";
import { BingoCell } from "~/types/bingo";
import typeColorMap from "~/lib/color-map";
// Fisher-Yates (Knuth) algortihm
const shuffle = (data: BingoCell[]) => {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
};

export default defineEventHandler((event) => {
  let matrix: BingoCell[] = [];

  const shuffledBingoCells = shuffle(
    data.map((item) => ({
      ...item,
      id: nanoid(),
      color: typeColorMap[item.type] ?? "yellow",
    })) as BingoCell[]
  );

  matrix = shuffledBingoCells.slice(0, 25);

  return matrix;
});
