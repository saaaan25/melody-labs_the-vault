/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: true, 
          },
        ]
      },
    images: {
        domains: ['garyzobzlptusalyktgr.supabase.co'], 
    },
};

export default nextConfig;
