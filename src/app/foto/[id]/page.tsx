import photoGet from "@/actions/photo-get";
import PhotoContent from "@/components/photo/photo-content";
import { notFound } from "next/navigation";
import { title } from "process";
import React from "react";

type FotoIDPageParams = {
  params: {
    id: string
  }
}

export async function generateMetadata({params}:FotoIDPageParams) {
  const {data} = await photoGet(params.id)
  if (!data) return {title: 'Fotos'}
  return {title: data.photo.title}
}

export default async function FotoIDPage ({ params }: FotoIDPageParams) {
  const {data} = await photoGet(params.id)
  if (!data) return notFound();
  return (
    <section className="container mainContainer">
      <PhotoContent data={data} single={true} />
    </section>
  )
}
