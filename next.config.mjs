/** @type {import('next').NextConfig} */
import path from "path"
const __dirname = path.resolve();
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
        prependData: `
          @import "variables.scss";
          @import "mixins.scss";
          @import "animations.scss";
        `,
      },
};

export default nextConfig;
