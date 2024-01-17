/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "brand.wisc.edu",
        port: "",
        pathname: "/content/uploads/2016/11/readability-04.jpg",
      },
    ],
  },
};

module.exports = nextConfig;
