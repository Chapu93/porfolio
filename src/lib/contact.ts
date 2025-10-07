import { env } from './env'

export type ContactPayload = {
  name: string
  email: string
  message: string
}

export async function sendContact(
  payload: ContactPayload
): Promise<{ ok: boolean; error?: string }> {
  if (!env.contactEndpoint) {
    await new Promise((r) => setTimeout(r, 500))
    return { ok: true }
  }

  try {
    const res = await fetch(env.contactEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(env.contactToken ? { Authorization: `Bearer ${env.contactToken}` } : {}),
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const text = await res.text().catch(() => '')
      return { ok: false, error: text || `HTTP ${res.status}` }
    }
    return { ok: true }
  } catch (e) {
    return { ok: false, error: (e as Error).message }
  }
}
