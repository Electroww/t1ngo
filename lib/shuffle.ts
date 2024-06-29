import type { BingoCell } from "~/types/bingo";

// Fisher-Yates (Knuth) algortihm
const shuffle = (data: BingoCell[]) => {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
};

export default shuffle;
