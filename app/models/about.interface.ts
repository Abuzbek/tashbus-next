import { ICover } from "./cover.interface";

export interface IAbout {
  cover: ICover | null;
  about_body: string;
  history_body: string;
  history_image: ICover | null;
}

export interface IAboutImages {
  photo: ICover | null;
}

export interface IAboutFooter {
  address: string | null;
  facebook_url: string | null;
  instagram_url: string | null;
  phone: string | null;
  telegram_url: string | null;
  youtobe_url: string | null;
}
