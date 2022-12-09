export interface IBodyInformation {
  full_name: string | null;
  phone: string | null;
  message: string | null;
}

export interface ICoruptionInformation {
  leader: string | null;
  address: string | null;
  phone: string | null;
  phone1?: string | null;
  email: string | null;
  email1?: string | null;
}

export interface IHotlineInformation {
  summary: string | null;
  phone: string | null;
  phone1?: string | null;
}

export interface IByCategoryInformation {
  category: string | null;
  phone: string | null;
  phone1?: string | null;
  email: string | null;
  email1?: string | null;
  address: string | null;
  work_time: string | null;
  facebook?: string | null;
  instagram?: string | null;
  telegram?: string | null;
  location?: string | null;
}
