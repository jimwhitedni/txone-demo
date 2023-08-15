// @ts-nocheck
import { merge } from 'webpack-merge'
import commonConfig from '../webpack.config.ts'

const dev = merge(commonConfig, {
  mode: 'development',
  devServer: {
    hot: true, // enable HMR on the server
    historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
    port: 3000,
  },
  devtool: 'eval-source-map',
  plugins: [],
})

export default dev