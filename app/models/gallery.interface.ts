import { ICover } from "./cover.interface";

export interface IGalleryPhotoList {
  id: number;
  name: string;
  thumbnail?: ICover | null;
}

export interface IGalleryPhotoDetail {
  name: string;
  photo: ICover | null;
  images: ICover[] | ICover | null;
}

export interface IGalleryVideoList extends IGalleryPhotoList {
  video: string;
}
