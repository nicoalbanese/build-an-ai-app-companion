import createMDX from "fumadocs-mdx/config";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      { source: "/", destination: "/docs/introduction", permanent: true },
      { source: "/docs", destination: "/docs/introduction", permanent: true },
    ];
  },
};

export default withMDX(config);
