import { ICover } from "./cover.interface";

export interface IBusCategory {
  slug: string;
  title: string;
  cover: ICover | null;
}

export interface IBusList {
  slug: string;
  title: string;
  summary: string;
  used: string;
  cover: ICover | null;
}

export interface IBusDetail {
  category: string;
  title: string;
  cover: string;
  invented: string;
  people: number;
  chairs: number;
  direction: number;
  body: string;
  images: ICover[];
}
