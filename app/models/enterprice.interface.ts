export interface IEnterpriceList {
  slug: string;
  name: string;
  full_name: string;
  address: string;
  phone: string;
  is_park: boolean;
}

export interface IEnterpriceDetail {
  name: string;
  full_name: string;
  address: string;
  phone: string;
  body?: string;
  latitude?: number;
  longitude?: number;
}
