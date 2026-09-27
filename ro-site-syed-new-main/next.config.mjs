/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  allowedDevOrigins: [
    'ais-dev-abmeh3yb627htbk7uvaams-159400676689.asia-east1.run.app',
    'ais-pre-abmeh3yb627htbk7uvaams-159400676689.asia-east1.run.app',
    '**.run.app',
    '**.asia-east1.run.app',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.mixkit.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
