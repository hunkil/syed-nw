import { PageRoute } from '../types';

export const SUBDOMAIN_ROUTE_MAP: Record<string, PageRoute> = {
  kent: '/kent-service',
  aquaguard: '/aquaguard-service',
  pureit: '/pureit-service',
  aosmith: '/aosmith-service',
  livpure: '/livpure-service',
};

/**
 * Extracts the first subdomain label from a hostname and returns the mapped PageRoute,
 * or null if there is no match (e.g. root domain, www, localhost, or unmapped preview URLs).
 */
export function getRouteFromSubdomain(hostname?: string): PageRoute | null {
  const host = (
    hostname || (typeof window !== 'undefined' ? window.location.hostname : '')
  )
    .toLowerCase()
    .split(':')[0]
    .trim();

  if (!host) return null;

  const parts = host.split('.');
  // Must have at least 3 labels (e.g. kent.roservicecentre24x7.in)
  if (parts.length < 3) {
    return null;
  }

  const subdomain = parts[0];
  if (subdomain === 'www') {
    return null;
  }

  return SUBDOMAIN_ROUTE_MAP[subdomain] || null;
}
