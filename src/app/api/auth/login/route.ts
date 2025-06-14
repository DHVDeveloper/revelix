import { AppConfig } from "@/lib/environments";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    const response = await fetch(`https://kata.conducerevel.com/films/auth/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({email: email, password: password}),
    });

    if (!response.ok) {
      const errorMessage =
        response.status === 502 ? "Invalid credentials" : "Authentication failed";
      throw new Error(errorMessage);
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
  } catch (error) {
    const message =
      error instanceof Error && error.message === "Invalid credentials"
        ? "Invalid credentials"
        : "Authentication failed";

    return NextResponse.json({ error: message }, { status: 401 });
  }
}

