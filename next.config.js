/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ...nextTranslate({}),
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:locale/api/:path*",
  //       destination: "https://tashbus.uz/:locale/api/:path*",
  //     },
  //     {
  //       source: "/media/:path*",
  //       destination: "https://tashbus.uz/media/:path*",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
