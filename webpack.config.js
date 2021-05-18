const path = require('path')
const { buildIcons } = require('rivet-icons')

class RivetIconsWebpackPlugin {
  constructor (options) {
    this.options = options
  }
  apply (compiler) {
    const pluginName = RivetIconsWebpackPlugin.name
    const options = {
      ...this.options,
      out: path.resolve(compiler.options.output.path, this.options.out || '.')
    }
    compiler.hooks.emit.tapPromise(
      pluginName,
      () => buildIcons(options)
    )
  }
}

module.exports = {
  entry: {
    app: path.resolve('./src/index.js')
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new RivetIconsWebpackPlugin({
      icons: ['arrow*'],
      out: 'assets'
    })
  ],
  output: {
    filename: `[name].js`,
    path: path.resolve('./docs')
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
  },
  devServer: {
    contentBase: './docs'
  }
}
