const webpack = require("@nativescript/webpack");
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = (env) => {
  webpack.init(env);

  /* 
    "image-minimizer-webpack-plugin": "^4.0.2",
    "imagemin": "^9.0.0",
    "imagemin-optipng": "^8.0.0",
    "imagemin-pngquant": "^10.0.0"
  */

  // // Custom optimizations and settings
  // webpack.chainWebpack((config) => {
  //   // Minimize the bundle size
  //   config.optimization.minimize(true);

  //   // Enable treeshaking
  //   config.optimization.usedExports(true);

  //   // Font rule for handling font files
  //   config.module
  //     .rule("fonts")
  //     .test(/\.(ttf|otf|eot|woff|woff2)$/)
  //     .use("file-loader")
  //     .loader("file-loader")
  //     .options({
  //       name: "fonts/[name].[ext]",
  //     });

  //   // Add rule for handling images
  //   config.module
  //     .rule("images")
  //     .test(/\.(png|jpe?g|gif|svg)$/i)
  //     .use("file-loader")
  //     .loader("file-loader")
  //     .options({
  //       name: "assets/images/[name].[ext]",
  //     });

  //   // Add image optimization plugin
  //   config.plugin("ImageMinimizerPlugin").use(ImageMinimizerPlugin, [
  //     {
  //       minimizer: {
  //         implementation: ImageMinimizerPlugin.imageminMinify,
  //         options: {
  //           plugins: [
  //             ["optipng", { optimizationLevel: 5 }],
  //             ["pngquant", { quality: [0.6, 0.8] }],
  //           ],
  //         },
  //       },
  //     },
  //   ]);

  //   // Add any other plugin specific configuration here
  // });

  // // Add copy rule for fonts
  // webpack.Utils.addCopyRule({
  //   from: "app/fonts",
  //   to: "fonts",
  //   context: webpack.Utils.project.getProjectRootPath(),
  // });

  // // Define plugins
  // webpack.Utils.addCopyRule({
  //   from: "app/assets",
  //   to: "assets",
  //   context: webpack.Utils.project.getProjectRootPath(),
  // });

  return webpack.resolveConfig();
};
