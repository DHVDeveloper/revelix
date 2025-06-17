export async function getCookie(name: string): Promise<string | null> {
  if (typeof window !== "undefined") {
    const nameEncoded = encodeURIComponent(name) + "="

    const cookies = document.cookie.split(";")
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim()
      if (cookie.startsWith(nameEncoded)) {
        return decodeURIComponent(cookie.substring(nameEncoded.length));
      }
    }

    return null
  } else {
    const { cookies } = await import("next/headers")
    const cookieStore = await cookies()
    const cookieName = cookieStore.get(name)
    return cookieName?.value ?? null
  }
}

export async function deleteCookie(name: string) {
  if (typeof window !== "undefined") {
    document.cookie = `${name}=; Max-Age=0; path=/;`;
  } else {
    const { cookies } = await import("next/headers")
    const cookieStore = await cookies()
    cookieStore.delete(name)
  }
}