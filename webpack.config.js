const path = require('path')

module.exports = {
  entry: {
    app: path.resolve('./src/index.js')
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  output: {
    filename: `[name].js`,
    path: path.resolve('./public')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        resourceQuery: /asset/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[base]'
        }
      },
      {
        resourceQuery: /public/,
        type: 'asset/resource',
        generator: {
          filename: '[base]'
        }
      }
    ]
  }
}
