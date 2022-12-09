export type IMenuTypeEnum = "yangiliklar" | "document" | "boshqalar";
export interface IMenu {
  type: IMenuTypeEnum;
  name: string;
  slug: string;
  children: IMenu[];
  parent?: string;
  path?: null | string;
}
