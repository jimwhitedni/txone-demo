import { merge } from 'webpack-merge'
import commonConfig from './../webpack.config.ts'
import TerserPlugin from 'terser-webpack-plugin'

const prod = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendor: {
          name: 'vendors',
          enforce: true, // ignore splitChunks.minSize, splitChunks.minChunks, splitChunks.maxAsyncRequests and splitChunks.maxInitialRequests
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
        },
        default: {
          minSize: 0,
          name: 'common',
          minChunks: 3,
          priority: 10,
          reuseExistingChunk: true,
        },
      },
    },
  },
})

export default prod
