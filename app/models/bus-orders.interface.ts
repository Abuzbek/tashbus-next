import { ICover } from "./cover.interface";

export interface IBusOrder {
  id: number;
  model: string;
  people: number;
  price: number;
  images: ICover[];
}

export interface IBusOrderCreate {
  full_name: string;
  phone: string;
  type: string;
  model: number;
}
