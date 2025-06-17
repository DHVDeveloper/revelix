export const AppConfig = {
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://autogest-backend-5p1l.onrender.com',
  COOKIE_NAME: process.env.NEXT_PUBLIC_COOKIE_NAME || 'sessionToken',
  NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV || 'production'
}