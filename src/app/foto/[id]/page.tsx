import React from "react";

type FotoIDPageParams = {
  params: {
    id: number
  }
}

export default function FotoIDPage ({ params }: FotoIDPageParams) {
  return (
    <main>
        <div>Foto ID { params.id }</div>
    </main>
  )
}
