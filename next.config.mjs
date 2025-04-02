/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true, // Yeh ensure karega ki sabhi pages "/about/" jese end hon
    images : {
        domains: ['upload.wikimedia.org','images.pexels.com', 'ibb.co','i.imghippo.com']
    }
};

export default nextConfig;
