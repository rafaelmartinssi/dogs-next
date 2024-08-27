'use server';

import { cookies } from "next/headers";
import { USER_GET } from "./api";
import apiError from "@/functions/api-error";

export type User = {
  id: number;
  email: string;
  username: string;
  nome: string;
}

export default async function userGet () {
  try {
    const { url } = USER_GET();

    const token = cookies().get('token')?.value;

    if (!token) throw new Error('Token não encontrado.')

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      next: {
        revalidate: 60,
      }
    });

    if (!response.ok) throw new Error('Error ao trazer o usuário.')

    const data = await response.json() as User;

    return {
      data,
      ok: true,
      error: ''
    };
  } catch (error) {
    return apiError(error)
  }

}
