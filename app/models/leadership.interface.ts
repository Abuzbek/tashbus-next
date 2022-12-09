import { ICover } from "./cover.interface";

export interface ILeadership {
  id: string;
  full_name: string;
  position: string;
  phone: string;
  fax?: string;
  email: string;
  reception_days: string;
  thumbnail?: ICover | null;
}

export interface ILeadershipByCategory {
  full_name: string;
  position: string;
  email: string;
  phone: string;
  body: string;
  thumbnail?: ICover | null;
}

export interface ILeadershipDetail {
  full_name: string;
  position: string;
  phone: string;
  fax?: string;
  email: string;
  reception_days: string;
  biography?: string;
  obligation?: string;
  thumbnail?: ICover | null;
}
