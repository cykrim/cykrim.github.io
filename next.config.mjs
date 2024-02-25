import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	output: 'export',
	distDir: 'out',
	experimental: {
		appDir: true,
		mdxRs: true,
	},
	webpack: (config, { dev }) => {
		if (!dev) {
		  config.mode = 'production';
		  config.devtool = 'hidden-source-map';
		}
		return config;
	  },
	//images: { unoptimized: true },
};

export default withContentlayer(nextConfig);
