export const AppConfig = {
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://kata.conducerevel.com',
  COOKIE_NAME: process.env.NEXT_PUBLIC_COOKIE_NAME || 'access_token',
  NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV || 'production'
}
