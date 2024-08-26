'use server';

import apiError from "@/functions/api-error";
import { PASSWORD_RESET } from "./api";
import { redirect } from "next/navigation";

export default async function passwordReset(state: {}, formData: FormData) {
  const password = formData.get('password');
  const login = formData.get('login');
  const key = formData.get('key');

  try {
    if (!login || !key || !password) throw new Error('Preencha os dados.');

    const { url } = PASSWORD_RESET();

    const response = await fetch(url, {
      method: 'POST',
      body: formData
    })

    if (!response.ok) throw new Error('Não autorizado.');

  } catch (error) {
    return apiError(error);
  }

  redirect('/login');

}
