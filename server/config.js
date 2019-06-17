const { env } = process;
export const isDev = env.NODE_ENV === 'development';
export const port = 3000;
export const ip = '127.0.0.1';
export const publicDir = 'dist/public';
