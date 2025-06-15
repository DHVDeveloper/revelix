import { AppConfig } from '@/lib/environments'
import { getCookie } from './cookies'

type ApiFetchOptions = Omit<RequestInit, 'headers'> & {
  headers?: Record<string, string>
}

export const apiFetch = async (endpoint: string, options: ApiFetchOptions = {}): Promise<Response> => {
  const token = await getCookie(AppConfig.COOKIE_NAME)

  return fetch(`${endpoint}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers,
    },
    ...options,
  })
}
