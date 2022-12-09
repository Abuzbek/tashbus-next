export interface IDirectionTable {
  auto_park?: string;
  bus_model?: string;
  distance?: number;
  movement_time?: string;
  name_rout?: string;
  number_rout?: string;
  route_duration?: number;
}

export interface IDirectionInfo {
  id: number;
  file?: string | null;
  title: string;
}

export interface IDirectionList {
  slug: number;
  title: string;
  file?: string | null;
}

export interface IDirectionDetail {
  info: IDirectionInfo;
  table: IDirectionTable[];
}
