/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
        search: "",
      },
    ],
  },
  reactStrictMode: false,
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"], // Disable deprecation warnings, come back when we update the system
  },
};

export default nextConfig;