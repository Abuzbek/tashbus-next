import { ICover } from "./cover.interface";

export interface ICouncil {
  full_name: string;
  position: string;
  thumbnail?: ICover | null;
}
