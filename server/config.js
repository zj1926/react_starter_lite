const { env } = process;
const isDev = env.NODE_ENV === 'dev';

module.exports = {
  isDev,
  port: 3001,
  ip: '127.0.0.1',
  publicDir: isDev ? 'temp/public' : 'dist',
};
