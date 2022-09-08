const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
	options: './src/options.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
	rules: [{
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ["@babel/preset-env", "@babel/preset-react"]
			}
		}
	},
	{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
]
 },
plugins: [new HtmlWebpackPlugin({
	template: './src/options.html',
	filename: 'options.html',
}),
new CopyPlugin({
	patterns: [
	  { from: "public",},
	],
  }),
],
};