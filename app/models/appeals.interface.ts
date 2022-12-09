export interface IAppealsStatistics {
  new: number;
  in_progress: number;
  completed: number;
  all_count: number;
}

export interface IAppealsBody {
  full_name: string;
  phone: string;
  email?: string;
  address: string;
  summary: string;
  file?: File | string;
}

export interface IAppealsCheck {
  reference_code: string;
  verification_code: string;
}

export interface IAppealsResBody {
  reference_code: number | null;
  full_name: string | null;
  phone: string | null;
  address: string | null;
  summary: string | null;
  pub_date: string | null;
  email: string | null;
  file_answer: null | string;
  status: number;
}
