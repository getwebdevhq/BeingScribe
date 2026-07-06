/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Netlify sometimes struggles with trailing slashes, keep them false by default
  trailingSlash: false,
};

export default nextConfig;
