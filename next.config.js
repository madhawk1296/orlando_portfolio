/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["qvyfkvwrbfjgjhvedaco.supabase.co"]
    },
    experimental: {
        serverActions: {
          bodySizeLimit: '2mb',
        },
    },
}

module.exports = nextConfig
