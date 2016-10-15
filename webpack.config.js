const config = {
  entry: './main.jsx',
  output: {
  	filename: 'bundle.js',
  	path: 'public/assets/js/'
  },
  module: {
  	loaders: [
  	  {
  	  	test: /\.jsx$/,
  	  	exclude: /node_modules/,
  	  	loader: 'babel-loader',
        query:
          {
            presets:['es2015','react']
          }
  	  }
  	]
  }

}
module.exports = config
