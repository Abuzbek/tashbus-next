import { ICover } from "./cover.interface";

export interface IUsefulLink {
  title: string;
  link: string;
  thumbnail: string | ICover | null;
}
