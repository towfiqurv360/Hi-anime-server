const env = (key: string, fallback: string) => {
  const value = process.env[key];
  return value && value.trim() ? value.trim() : fallback;
};

const config = {
  // Upstream source used by the scraper. Override with HIANIME_BASE_URL if needed.
  baseurl: env('HIANIME_BASE_URL', 'https://aniwatchtv.to'),
  baseurl2: env('HIANIME_BASE_URL_2', env('HIANIME_BASE_URL', 'https://aniwatchtv.to')),

  // Render sets PORT automatically. Keep 10000 as the local/Render-compatible fallback.
  port: Number(process.env.PORT) || 10000,

  // For local development, '*' is convenient. In production, set ALLOWED_ORIGINS to your
  // frontend URL (or a comma-separated list of allowed frontend URLs).
  origin: env('ALLOWED_ORIGINS', '*'),

  headers: {
    'User-Agent': env(
      'UPSTREAM_USER_AGENT',
      'Mozilla/5.0 (X11; Linux x86_64; rv:122.0) Gecko/20100101 Firefox/122.0'
    ),
  },

  logLevel: env('LOG_LEVEL', 'INFO'),
  enableLogging: process.env.ENABLE_LOGGING === 'true',
  isProduction: process.env.NODE_ENV === 'production' || process.env.RENDER === 'true',
  isDevelopment: process.env.NODE_ENV !== 'production' && process.env.RENDER !== 'true',
  isVercel: process.env.VERCEL === '1',
};

export default config;
