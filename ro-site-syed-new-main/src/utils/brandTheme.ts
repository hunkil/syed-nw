import { PageRoute } from '../types';

export interface BrandThemeConfig {
  id: string;
  name: string;
  primary: string;
  hover: string;
  lightBg: string;
  borderColor: string;
  gradientFrom: string;
  gradientTo: string;
  badgeBg: string;
  bannerBg: string;
  buttonBg: string;
  phoneTextColor: string;
}

export const DEFAULT_THEME: BrandThemeConfig = {
  id: 'default',
  name: 'RO Service 24x7',
  primary: '#006ce4',
  hover: '#0056b8',
  lightBg: '#EFF6FF',
  borderColor: '#BFDBFE',
  gradientFrom: '#38bdf8',
  gradientTo: '#06b6d4',
  badgeBg: '#1d63d8',
  bannerBg: '#1d63d8',
  buttonBg: '#1d63d8',
  phoneTextColor: '#1d63d8',
};

export const BRAND_THEME_MAP: Record<string, BrandThemeConfig> = {
  '/kent-service': {
    id: 'kent',
    name: 'Kent',
    primary: '#1B3F8C',
    hover: '#153270',
    lightBg: '#EFF6FF',
    borderColor: '#BFDBFE',
    gradientFrom: '#38bdf8',
    gradientTo: '#06b6d4',
    badgeBg: '#1B3F8C',
    bannerBg: '#1B3F8C',
    buttonBg: '#1B3F8C',
    phoneTextColor: '#1B3F8C',
  },
  '/aquaguard-service': {
    id: 'aquaguard',
    name: 'Aquaguard',
    primary: '#0072BC',
    hover: '#005C96',
    lightBg: '#F0F9FF',
    borderColor: '#BAE6FD',
    gradientFrom: '#2dd4bf',
    gradientTo: '#38bdf8',
    badgeBg: '#0072BC',
    bannerBg: '#0072BC',
    buttonBg: '#0072BC',
    phoneTextColor: '#0072BC',
  },
  '/pureit-service': {
    id: 'pureit',
    name: 'Pureit',
    primary: '#2B2A6B',
    hover: '#202052',
    lightBg: '#F5F3FF',
    borderColor: '#DDD6FE',
    gradientFrom: '#818cf8',
    gradientTo: '#38bdf8',
    badgeBg: '#2B2A6B',
    bannerBg: '#2B2A6B',
    buttonBg: '#2B2A6B',
    phoneTextColor: '#2B2A6B',
  },
  '/aosmith-service': {
    id: 'aosmith',
    name: 'AO Smith',
    primary: '#00843D',
    hover: '#006830',
    lightBg: '#F0FDF4',
    borderColor: '#BBF7D0',
    gradientFrom: '#34d399',
    gradientTo: '#10b981',
    badgeBg: '#00843D',
    bannerBg: '#00843D',
    buttonBg: '#00843D',
    phoneTextColor: '#00843D',
  },
  '/livpure-service': {
    id: 'livpure',
    name: 'Livpure',
    primary: '#4c1d95',
    hover: '#3b0764',
    lightBg: '#FAF5FF',
    borderColor: '#E9D5FF',
    gradientFrom: '#a855f7',
    gradientTo: '#7c3aed',
    badgeBg: '#4c1d95',
    bannerBg: '#4c1d95',
    buttonBg: '#4c1d95',
    phoneTextColor: '#4c1d95',
  },
};

export function getBrandTheme(currentRoute: string, lastBrandRoute?: string | null): BrandThemeConfig {
  if (BRAND_THEME_MAP[currentRoute]) {
    return BRAND_THEME_MAP[currentRoute];
  }
  const normalizedWithService = `${currentRoute}-service`;
  if (BRAND_THEME_MAP[normalizedWithService]) {
    return BRAND_THEME_MAP[normalizedWithService];
  }

  // If user is on a policy page or other secondary page and arrived from a brand page
  if (currentRoute !== '/' && lastBrandRoute && BRAND_THEME_MAP[lastBrandRoute]) {
    return BRAND_THEME_MAP[lastBrandRoute];
  }

  return DEFAULT_THEME;
}
