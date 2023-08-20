import path from 'path'
import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'
import DotenvWebpackPlugin from 'dotenv-webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HappyPack from 'happypack'
import ENVS from './webpackConfig/env/envs'

const source = path.resolve(__dirname, 'src')
const env = process.env.NODE_ENV || 'dev'

const webpackConfig : Configuration = {
  entry: './src/index.tsx',
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components')
    },
    extensions: ['.tsx', '.ts', '.scss', '.svg', '.js', '.json'],
    plugins: [new TsconfigPathsPlugin()],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
  },
  module: {
    rules: [
      {
        test: [/\.(jsx?|js)$/, /\.(tsx?|ts)$/],
        include: source,
        use: ['happypack/loader?id=babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        include: source,
        // use: 'happypack/loader?id=css'
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'compressed',
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        include: `${source}/assets/fonts`,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            },
          },
        ],
      },
      {
        test: /\.(png|avif|webp|jpg|jpeg|gif|webp)$/i,
        include: `${source}/assets/images`,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/'
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // favicon: path.join(__dirname, 'src/assets/images/Logo.ico'),
    }),
    new DotenvWebpackPlugin({
      path: path.resolve(__dirname, `webpackConfig/env/${ENVS[env]}`),
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[chunkhash].css',
    }),
    new ForkTsCheckerWebpackPlugin(),
    new HappyPack({
      id: 'babel',
      loaders: [{
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-env",
            ["@babel/preset-react", {"runtime": "automatic"}],
            "@babel/preset-typescript"
          ],
          env: {
            production: {
              presets: ["minify"]
            }
          },
        }
      }]
    }),
  ],
  watchOptions: {
    ignored: /node_modules/,
  }
}

export default webpackConfig
