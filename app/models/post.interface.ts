import { ICover } from "./cover.interface";
import { IMenu } from "./menu.interface";

export interface IPost {
  slug: string;
  menu: IMenu[] | IMenu;
  title: string;
  image?: ICover | null;
  thumbnail?: ICover | null;
  pub_date: string;
  video?: string | null;
}

export interface IPostDetail {
  title: string;
  images?: ICover[];
  body: string;
  file?: string;
  pub_date: string;
  view_count: string | number;
}
