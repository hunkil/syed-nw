/**
 * Optimizes Cloudinary URLs for maximum performance (WebP/AVIF, auto quality, width scaling)
 */
export function optimizeCloudinary(
  url?: string,
  options: {
    width?: number;
    quality?: string | number;
    format?: string;
  } = {}
): string {
  if (!url) return '';
  if (typeof url !== 'string') return '';
  if (!url.includes('res.cloudinary.com')) return url;
  
  // If already transformed with f_auto or q_auto, avoid double-transforming
  if (url.includes('/f_auto') || url.includes('/q_auto')) {
    return url;
  }

  const { width, quality = 'auto', format = 'auto' } = options;
  const transformations: string[] = [`f_${format}`, `q_${quality}`];
  
  if (width) {
    transformations.push(`w_${width}`);
  }

  const transformString = transformations.join(',');

  // Standard Cloudinary URL structure: .../upload/v123456/... or .../upload/...
  return url.replace('/upload/', `/upload/${transformString}/`);
}
