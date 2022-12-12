import { IAboutImages } from "../about.interface";
import { IMenu } from "../menu.interface";

export interface IHome {
  menus: IMenu[];
  images: IAboutImages[]
}
