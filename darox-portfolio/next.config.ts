import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // desactiva Image Optimization API
    },
}
export default nextConfig

