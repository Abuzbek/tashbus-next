import { IMeta } from "./meta.interface";

export interface IListResponse<T> {
    meta: IMeta|null;
    results: T;
}