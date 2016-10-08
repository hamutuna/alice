const path = require('path');

module.exports = {
  entry: {
    //javascript: "./src/index.js",
    html: "./src/index.html",
    css: "./src/style.scss",
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader",
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.ico$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file-loader?name=[path][name].[ext]",
      }
    ]
  },
  plugins: [
  ],
  resolve: {
   root: [
     path.resolve("./"),
   ]
 },
};
