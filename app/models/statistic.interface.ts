import { ICover } from "./cover.interface";

export interface IStatistic {
  id: number;
  title: string;
  count: number;
  image?: ICover | null;
}

export interface IStatisticApp {
  year: number;
  statistics: {
    president_lobby: number;
    quarter: number;
    total: number;
    web_site: number;
    written: number;
  }[];
}
