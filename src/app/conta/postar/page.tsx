import ContaPhotoPost from "@/components/conta/conta-photo-post";
import { Metadata } from "next";
import React from "react";

const metadata: Metadata = {
  title: 'Postar | Minha Conta',
}

export default async function PostarPage () {
  return (
    <div>
      <ContaPhotoPost />
    </div>
  )
}
