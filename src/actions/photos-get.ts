'use server';

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

const params = '?_page=1&_total=6&_user=0';

export default async function photosGet () {
  const { url } = PHOTOS_GET();
  const response = await fetch(`${url}${params}`, {
    method: 'GET',
    next: {
      revalidate: 10,
      tags: ['photos']
    }
  });
  const data = await response.json() as Photo[];
  return data;
}
