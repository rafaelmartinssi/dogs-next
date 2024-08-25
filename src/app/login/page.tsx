import LoginForm from "@/components/login/login-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Login | Dogs',
  description: 'Logue na sua conta no site Dogs'
}

export default async function LoginPage () {
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <LoginForm />
    </section>
  )
}
