/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Netlify sometimes struggles with trailing slashes, keep them false by default
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
