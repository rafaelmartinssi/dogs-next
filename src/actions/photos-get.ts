'use server';

import apiError from "@/functions/api-error";
import { PHOTOS_GET } from "./api";

export type Photo = {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
}

export type PhotosGetParams = {
  page?: number,
  total?: number,
  user?: 0 | string,
}

export default async function photosGet (
  { page = 1, total = 6, user = 0 }: PhotosGetParams = {},
  optionsFront?: RequestInit
) {
  try {
    const options = optionsFront || {
      next: {
        revalidate: 10,
        tags: ['photos']
      }
    }
    const { url } = PHOTOS_GET({page, total, user});
    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Error ao trazer fotos.')

    const data = await response.json() as Photo[];

    return {
      data,
      ok: true,
      error: ''
    };
  } catch (error) {
    return apiError(error);
  }

}
