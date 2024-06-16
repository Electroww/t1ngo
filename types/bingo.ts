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
  | "supp";

type BingoColors = "red1" | "red2" | "yellow";

type BingoCell = {
  id: string;
  color: BingoColors;
  type: BingoCellType;
  text: string;
};

export type { BingoCell, BingoCellType, BingoColors };
