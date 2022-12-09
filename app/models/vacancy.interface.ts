type TCategory =
  | "ijtimoiy_apparat"
  | "mutahassislar"
  | "texnik_xodimlar"
  | "yordamchi_xodimlar";

export interface IVacancy {
  id: string;
  category?: TCategory;
  name: string;
  date: string;
  type?: string;
  experience?: string;
}

export interface IVacancyDetail {
  category?: TCategory;
  name: string;
  date: string;
  view_count: string | number;
  requirements: string;
}
