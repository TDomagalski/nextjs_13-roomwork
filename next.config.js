/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  // STATIC WEB OPTIONS
  output: 'export',
  images: {
    unoptimized: true,
  },

  // this option solve issue with refresh pages
  trailingSlash: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
