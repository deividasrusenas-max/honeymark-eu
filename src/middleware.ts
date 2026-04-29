import { defineMiddleware } from 'astro:middleware';

const SUPPORTED_LOCALES = ['lt', 'lv', 'et', 'en'];
const DEFAULT_LOCALE = 'lt';

const COUNTRY_TO_LOCALE: Record<string, string> = {
  LT: 'lt',
  LV: 'lv',
  EE: 'et',
};

const BOT_USER_AGENTS = [
  'Googlebot',
  'Bingbot',
  'GPTBot',
  'Claude-Web',
  'PerplexityBot',
  'facebookexternalhit',
  'Twitterbot',
];

function isBot(userAgent: string): boolean {
  return BOT_USER_AGENTS.some((bot) => userAgent.includes(bot));
}

function detectLocaleFromCountry(headers: Headers): string | null {
  const cfCountry = headers.get('CF-IPCountry');
  if (cfCountry && COUNTRY_TO_LOCALE[cfCountry.toUpperCase()]) {
    return COUNTRY_TO_LOCALE[cfCountry.toUpperCase()];
  }

  const vercelCountry = headers.get('X-Vercel-IP-Country');
  if (vercelCountry && COUNTRY_TO_LOCALE[vercelCountry.toUpperCase()]) {
    return COUNTRY_TO_LOCALE[vercelCountry.toUpperCase()];
  }

  return null;
}

function detectLocaleFromAcceptLanguage(headers: Headers): string | null {
  const acceptLang = headers.get('accept-language') || '';
  const preferred = acceptLang
    .split(',')
    .map((lang) => lang.split(';')[0].trim().toLowerCase().slice(0, 2))
    .find((lang) => SUPPORTED_LOCALES.includes(lang));
  return preferred || null;
}

export const onRequest = defineMiddleware((context, next) => {
  const { url, request } = context;
  const pathname = url.pathname;
  const userAgent = request.headers.get('user-agent') || '';

  const hasLocalePrefix = SUPPORTED_LOCALES.some(
    (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
  );

  if (hasLocalePrefix) {
    return next();
  }

  // Never redirect bots — let them crawl all locale versions
  if (isBot(userAgent)) {
    return next();
  }

  if (pathname === '/') {
    // Check if user has already been redirected
    const cookie = request.headers.get('cookie') || '';
    const alreadyRedirected = cookie.includes('locale_redirected=1');

    if (alreadyRedirected) {
      return next();
    }

    const countryLocale = detectLocaleFromCountry(request.headers);
    const acceptLangLocale = detectLocaleFromAcceptLanguage(request.headers);
    const targetLocale = countryLocale || acceptLangLocale || DEFAULT_LOCALE;

    const targetUrl = new URL(`/${targetLocale}/`, url);
    const response = new Response(null, {
      status: 302,
      headers: {
        Location: targetUrl.toString(),
        'Set-Cookie': 'locale_redirected=1; Path=/; Max-Age=2592000; SameSite=Lax',
      },
    });
    return response;
  }

  return next();
});
