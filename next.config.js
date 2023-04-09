/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "dalleaiimagegenera3771d3.blob.core.windows.net",
    ]
  }
}

module.exports = nextConfig
