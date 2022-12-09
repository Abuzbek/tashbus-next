import { IMenu } from "./menu.interface";

export interface IDocument {
  title: string;
  menu: string | IMenu;
  link?: string | null;
  file?: string | null;
}
