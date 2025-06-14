import { AppConfig } from "@/lib/environments";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    const response = await fetch(`${AppConfig.API_BASE_URL}/films/auth/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({email: email, password: password}),
    });

    if (!response.ok) {
      if (response.status === 401 || response.status === 403 || response.status === 502) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
      } else {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
      }
    }

    const { token } = await response.json();

    const clientCookies = await cookies();
    
    clientCookies.set({
      name: AppConfig.COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json({ status: 200 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

