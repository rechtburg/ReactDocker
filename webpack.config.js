const path = require("path")

module.exports = {
  entry: {
    bundle: "./src/app.tsx",
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "[name].js",
    chunkFilename: "[name].bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  devServer: {
    contentBase: "public",
    inline: true,
    port: 8080,
    host: "0.0.0.0",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }
    ],
  }
}
