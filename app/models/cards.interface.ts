import { ICover } from "./cover.interface";

export type TCardCategory = "shahobchadan" | "ilovadan";

export interface ICard {
  name: string;
  thumbnail?: ICover | null;
  types?: any[];
}

export interface ICardStep {
  step: string;
}
