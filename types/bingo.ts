/* This for asset type for bingo cell */
type BingoCellType =
  | "cup"
  | "faker"
  | "zeus"
  | "keria"
  | "oner"
  | "guma"
  | "oke"
  | "pog"
  | "solobolo"
  | "niceu"
  | "kkabi"
  | "rage"
  | "bot"
  | "mid"
  | "lck"
  | "t1"
  | "jgl"
  | "supp"
  | "top";

/* This for color type for bingo cell */
type BingoColor = "red1" | "red2" | "yellow";

type BingoCell = {
  id: string;
  color: BingoColor;
  text: string;
  asset: string;
};

type BingoCard = BingoCell[];

export type { BingoCell, BingoCellType, BingoColor, BingoCard };
