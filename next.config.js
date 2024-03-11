/** @type {import('next').NextConfig} */

const path = require('path')
const basePath = '/t2'

const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['tsx','jsx', 'js', 'ts'],
}

module.exports = nextConfig
