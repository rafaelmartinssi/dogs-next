'use client';

import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "../helper/error-message";
import React from "react";
import styles from "@/components/login/login-form.module.css";
import userPost from "@/actions/user-post";

function FormButton () {
  const {pending} = useFormStatus();

  return (
    <>
      { pending ?
        <Button>Enviando...</Button> :
        <Button>Cadastrar</Button>
      }
    </>
  )

}

export default function LoginCriarForm() {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: '',
    data: null
  });

  React.useEffect(() => {
    if(state.ok) window.location.href = '/conta';
  }, [state.ok])

  return (
    <>
      <form action={action} className={styles.form}>
        <Input type="text" label="Usuário" name="username" />
        <Input type="password" label="Senha" name="password" />
        <Input type="email" label="Email" name="email" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
}
