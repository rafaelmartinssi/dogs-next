'use client';

import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import React from "react";
import passwordReset from "@/actions/password-reset";

function ButtonForm () {
  const { pending } = useFormStatus();

  return (
    <>{
      pending ?
      <Button>Enviando...</Button> :
      <Button>Resetar Senha</Button>
    }</>
  )
}

type ResetarPropsForm = {
  keyToken: string;
  login: string;
}

export default function LoginResetarForm (
  { keyToken, login }: ResetarPropsForm
) {
  const [state, action] = useFormState(passwordReset, {
    data: null,
    ok: false,
    error: ''
  });

  return (
    <>
      <form action={action}>
        <Input label="Nova Senha" name="password" type="password" />
        <input type="hidden" value={keyToken} name="key" />
        <input type="hidden" value={login} name="login" />
        <ErrorMessage error={state.error}></ErrorMessage>
        <ButtonForm />
      </form>
    </>
  )
}
