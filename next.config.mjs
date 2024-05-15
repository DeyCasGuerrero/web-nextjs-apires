/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
            // Agrega el nuevo host aquí
            {
                protocol: 'https',
                hostname: 'i.postimg.cc',
            },
        ],
    },
};

export default nextConfig;
