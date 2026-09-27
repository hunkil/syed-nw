import { NextRequest, NextResponse } from 'next/server';

const SUBDOMAIN_MAP: Record<string, string> = {
  kent: 'kent-service',
  'kent-service': 'kent-service',
  aquaguard: 'aquaguard-service',
  'aquaguard-service': 'aquaguard-service',
  pureit: 'pureit-service',
  'pureit-service': 'pureit-service',
  aosmith: 'aosmith-service',
  'ao-smith': 'aosmith-service',
  'aosmith-service': 'aosmith-service',
  livpure: 'livpure-service',
  'livpure-service': 'livpure-service',
  havells: 'havells-service',
  'havells-service': 'havells-service',
  lg: 'lg-service',
  'lg-service': 'lg-service',
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Extract host from headers
  const forwardedHost = req.headers.get('x-forwarded-host');
  const rawHost = forwardedHost  req.headers.get('host')  '';
  const hostClean = rawHost.toLowerCase().trim();
  const hostname = hostClean.split(':')[0].trim();
  const proto = req.headers.get('x-forwarded-proto') || 'https';

  // ===== IP LOGGING START =====
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';

  console.log(
    [VISITOR] IP=${ip} HOST=${hostname} PATH=${url.pathname}
  );
  // ===== IP LOGGING END =====

  let matchedSubdomain: string | null = null;

  for (const sub of Object.keys(SUBDOMAIN_MAP)) {
    if (hostname === sub || hostname.startsWith(${sub}.)) {
      matchedSubdomain = sub;
      break;
    }
  }

  if (!matchedSubdomain) {
    const parts = hostname.split('.');
    if (parts.length >= 2 && parts[0] !== 'www') {
      if (SUBDOMAIN_MAP[parts[0]]) {
        matchedSubdomain = parts[0];
      }
    }
  }

  if (matchedSubdomain) {
    const brandSlug = SUBDOMAIN_MAP[matchedSubdomain];
    const targetBrandPath = /${brandSlug};

    const requestHeaders = new Headers(req.headers);

    requestHeaders.set('x-subdomain', matchedSubdomain);
    requestHeaders.set('x-subdomain-brand', brandSlug);
    requestHeaders.set('x-subdomain-host', hostClean);
    requestHeaders.set('x-subdomain-proto', proto);
    requestHeaders.set('x-visitor-ip', ip);

    if (url.pathname === '/' || url.pathname === '') {
      url.pathname = targetBrandPath;

      const response = NextResponse.rewrite(url, {
        request: {
          headers: requestHeaders,
        },
      });

      response.headers.set('x-subdomain-routed', matchedSubdomain);
      return response;
    }

    if (url.pathname === '/blog' || url.pathname === '/blog/') {
      url.pathname = ${targetBrandPath}/blog;

      const response = NextResponse.rewrite(url, {
        request: {
          headers: requestHeaders,
        },
      });

      response.headers.set('x-subdomain-routed', matchedSubdomain);
      return response;
    }

    if (url.pathname.startsWith('/blog/')) {
      const blogSlug = url.pathname.replace(/^\/blog\//, '');

      url.pathname = ${targetBrandPath}/blog/${blogSlug};

      const response = NextResponse.rewrite(url, {
        request: {
          headers: requestHeaders,
        },
      });

      response.headers.set('x-subdomain-routed', matchedSubdomain);
      return response;
    }

    if (url.pathname === targetBrandPath) {
      const response = NextResponse.rewrite(url, {
        request: {
          headers: requestHeaders,
        },
      });

      response.headers.set('x-subdomain-routed', matchedSubdomain);
      return response;
    }

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|.*\\..*).*)',
  ],
};
