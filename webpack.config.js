// const webpack = require("webpack");

module.exports = () => {
  const webpackConfig = {
    output: {
      filename: "[name].js",
      publicPath: "/"
    },
    entry: {
      index: ["./index"]
    },
    module: {
      rules: [
        // babel
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader"
        }
      ]
    },
    devServer: {
      host: "0.0.0.0",
      // port: 3000,
      compress: true,
      stats: { colors: true, chunks: false },
      inline: false
    }
  };

  return webpackConfig;
};
