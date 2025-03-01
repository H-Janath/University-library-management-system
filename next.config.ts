import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'plachold.co'
      },
      {
        protocol:'https',
        hostname:'m.media-amazon.com'
      }
    ]
  }
};

export default nextConfig;
