import { ICover } from "./cover.interface";

export interface IDepartmentList {
  slug: string;
  title: string;
}

export interface IDepartmentDetail {
  title: string;
  full_name: string;
  position: string;
  email?: string;
  phone: string;
  body: string;
  thumbnail?: ICover | null;
}
