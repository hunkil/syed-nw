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
  
  // Extract host from headers (handles Vercel, Cloud Run, reverse proxies, and local development)
  const forwardedHost = req.headers.get('x-forwarded-host');
  const rawHost = forwardedHost || req.headers.get('host') || '';
  const hostClean = rawHost.toLowerCase().trim();
  const hostname = hostClean.split(':')[0].trim();
  const proto = req.headers.get('x-forwarded-proto') || 'https';

  // Subdomain detection
  // Examples:
  // kent.mydomain.in -> matchedSubdomain: "kent"
  // kent.roservicecentre24x7.in -> matchedSubdomain: "kent"
  // kent-service.mydomain.in -> matchedSubdomain: "kent-service"
  // kent.localhost:3000 -> matchedSubdomain: "kent"
  let matchedSubdomain: string | null = null;

  // Check prefix match against known brand keys
  for (const sub of Object.keys(SUBDOMAIN_MAP)) {
    if (hostname === sub || hostname.startsWith(`${sub}.`)) {
      matchedSubdomain = sub;
      break;
    }
  }

  // Fallback check on first subdomain segment
  if (!matchedSubdomain) {
    const parts = hostname.split('.');
    if (parts.length >= 2 && parts[0] !== 'www') {
      if (SUBDOMAIN_MAP[parts[0]]) {
        matchedSubdomain = parts[0];
      }
    }
  }

  // If a brand subdomain is detected, rewrite internally without any 301/302 redirects
  // (Prevents Google Ads destination mismatch and ad disapprovals)
  if (matchedSubdomain) {
    const brandSlug = SUBDOMAIN_MAP[matchedSubdomain];
    const targetBrandPath = `/${brandSlug}`;

    // Pass custom request headers to downstream route handlers and layouts
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-subdomain', matchedSubdomain);
    requestHeaders.set('x-subdomain-brand', brandSlug);
    requestHeaders.set('x-subdomain-host', hostClean);
    requestHeaders.set('x-subdomain-proto', proto);

    // 1. Subdomain Root ("/" or "") -> Brand Landing Page (e.g. /kent-service)
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

    // 2. Subdomain Blog Index ("/blog") -> Brand Blog Index (e.g. /kent-service/blog)
    if (url.pathname === '/blog' || url.pathname === '/blog/') {
      url.pathname = `${targetBrandPath}/blog`;
      const response = NextResponse.rewrite(url, {
        request: {
          headers: requestHeaders,
        },
      });
      response.headers.set('x-subdomain-routed', matchedSubdomain);
      return response;
    }

    // 3. Subdomain Blog Post ("/blog/[slug]") -> Brand Blog Post (e.g. /kent-service/blog/[slug])
    if (url.pathname.startsWith('/blog/')) {
      const blogSlug = url.pathname.replace(/^\/blog\//, '');
      url.pathname = `${targetBrandPath}/blog/${blogSlug}`;
      const response = NextResponse.rewrite(url, {
        request: {
          headers: requestHeaders,
        },
      });
      response.headers.set('x-subdomain-routed', matchedSubdomain);
      return response;
    }

    // 4. Subdomain direct access to /kent-service -> Stay on brand page without redirect
    if (url.pathname === targetBrandPath) {
      const response = NextResponse.rewrite(url, {
        request: {
          headers: requestHeaders,
        },
      });
      response.headers.set('x-subdomain-routed', matchedSubdomain);
      return response;
    }

    // 5. Any other standard route (e.g. /about-us, /contact, /privacy-policy, /terms-of-service)
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
    /*
     * Match all request paths except:
     * - _next/static, _next/image
     * - favicon.ico, robots.txt, sitemap.xml, llms.txt
     * - files with static extensions (.png, .jpg, .svg, .webp, .mp4)
     */
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|.*\\..*).*)',
  ],
};
