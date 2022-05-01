export default () => ({
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 9004,
    open: true,
    compress: false,
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});
