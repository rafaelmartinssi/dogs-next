'use server';

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

const url = 'https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=6&_user=0';

export default async function photosGet () {
  const response = await fetch(url, {
    method: 'GET',
  });
  const data = await response.json() as Photo[];
  return data;
}
