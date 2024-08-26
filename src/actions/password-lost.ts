'use server';

import apiError from "@/functions/api-error";
import { PASSWORD_LOST } from "./api";

export default async function passwordLost(state: {}, formData: FormData) {
  const login = formData.get('login');
  const urlPerdeu = formData.get('url');

  try {
    if (!login) throw new Error('Preencha os dados.');

    const { url } = PASSWORD_LOST();

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        url: urlPerdeu
      })
    })

    if (!response.ok) throw new Error('Email ou usuário não cadastrado.');

    return {
      data: null,
      ok: true,
      error: ''
    }
  } catch (error) {
    return apiError(error);
  }

}
