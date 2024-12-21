import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    rewrites: async () => {
        return [
            {
                source: "/api/:path*",
                destination:
                    process.env.NODE_ENV === "development"
                        ? "http://127.0.0.1:5328/api/:path*"
                        : "/api/",
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "my-blob-store.public.blob.vercel-storage.com",
                port: "",
            },
        ],
    },
};

export default nextConfig;
