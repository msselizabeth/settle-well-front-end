/** @type {import('next').NextConfig} */
import path from "path"
const __dirname = path.resolve();
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
        prependData: `
          @import "_variables.scss";
          @import "_mixins.scss";
          @import "_animations.scss";
        `,
      },
};

export default nextConfig;
