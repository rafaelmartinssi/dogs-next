import React from "react";

type PerfilUserParams = {
  params: {
    user: string
  }
}

export default function PerfilUserPage ({ params }: PerfilUserParams) {
  return (
    <main>
        <div>Perfil User { params.user }</div>
    </main>
  )
}
