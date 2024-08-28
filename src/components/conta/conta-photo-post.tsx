'use client'

import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import React from "react";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import styles from './conta-photo-post.module.css';
import photoPost from "@/actions/photo-post";

function FormButton () {
  const {pending} = useFormStatus();

  return (
    <>
      { pending ?
        <Button>Enviando...</Button> :
        <Button>Enviar</Button>
      }
    </>
  )

}

export default function ContaPhotoPost () {
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: '',
    data: null
  });

  const [img, setImg] = React.useState('');

  function handleImgChange ({target}: React.ChangeEvent<HTMLInputElement>) {
    if (target.files)
    setImg(URL.createObjectURL(target.files[0]))
  }

  return (
    <>
      <section className={`${styles.photoPost} animeLeft`}>
        <form action={action}>
          <Input type="text" label="Nome" name="nome" />
          <Input type="number" label="Peso" name="peso" />
          <Input type="number" label="Idade" name="idade" />
          <input onChange={handleImgChange} type="file" name="img" id="img" className={styles.file} />
          <ErrorMessage error={state.error} />
          <FormButton />
        </form>
        <div>
          <div className={styles.preview} style={{backgroundImage: `url(${img})`}}></div>
        </div>
      </section>
    </>
  );
}
