/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  }
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      { hostname: "icons.duckduckgo.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "www.google.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
  nextConfig
};
