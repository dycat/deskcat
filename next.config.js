const withPWA = require('next-pwa');
/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    /* config options here */
    reactStrictMode: true,
  }
  
  module.exports = withPWA({
    pwa: {
      dest: 'public'
    },
    reactStrictMode: true
  })