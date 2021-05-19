const path = require('path')

const srcPath = path.resolve('./src')
const outPath = path.resolve('./docs')

module.exports = {
  entry: {
    app: path.resolve(srcPath, 'index.js')
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  output: {
    filename: `[name].js`,
    path: outPath
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: srcPath
      },
      {
        resourceQuery: /asset/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[base]'
        }
      },
      {
        resourceQuery: /root/,
        type: 'asset/resource',
        generator: {
          filename: '[base]'
        }
      }
    ]
  }
}
