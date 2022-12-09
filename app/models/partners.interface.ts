import { ICover } from "./cover.interface";

export interface IPartner {
  thumbnail?: ICover | null;
  title: string;
  description: string;
  phone: string;
  web_site?: string;
  email?: string;
}
