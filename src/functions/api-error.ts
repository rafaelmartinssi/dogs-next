export default function apiError(error: unknown): {
  data: null,
  ok: boolean,
  error: string,
} {
  if (error instanceof Error) {
    return {
      data: null,
      ok: false,
      error: error.message
    }
  }
  return {
    data: null,
    ok: false,
    error: 'Erro genérico'
  }
}
