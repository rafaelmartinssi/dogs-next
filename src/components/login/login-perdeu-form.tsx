'use client';

import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import passwordLost from "@/actions/password-lost";
import React from "react";

function ButtonForm () {
  const { pending } = useFormStatus();

  return (
    <>{
      pending ?
      <Button>Enviando...</Button> :
      <Button>Enviar Email</Button>
    }</>
  )
}

export default function LoginPerdeuForm () {
  const [state, action] = useFormState(passwordLost, {
    data: null,
    ok: false,
    error: ''
  });

  const [url, setUrl] = React.useState('');
  React.useEffect(() => {
    setUrl(window.location.href.replace('perdeu', 'resetar'))
  }, [])

  return (
    <>
      <form action={action}>
        <Input label="Email / Usuário" name="login" type="text" />
        <input
          type="hidden"
          name="url"
          value={url}
        />
        { state.ok && <p style={{
          color: '#4c1'
        }}>Email enviado.</p> }
        <ErrorMessage error={state.error}></ErrorMessage>
        <ButtonForm />
      </form>
    </>
  )
}
