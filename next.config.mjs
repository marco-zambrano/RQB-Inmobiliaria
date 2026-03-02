/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // allow loading images from Supabase storage
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xpznugqofelwvteosjny.supabase.co',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

export default nextConfig
