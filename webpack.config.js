// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = MiniCssExtractPlugin.loader;

//To add entry points

// projects: path.resolve(__dirname, './src/Projects'),
// timer: path.resolve(__dirname, './src/Projects/coundownTimer'),

const config = {
    entry: {
        app: path.resolve(__dirname, './src/index.ts'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'change-background.html',
            template: './src/Projects/asyncProjects/change_background_color/change-background.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'projects.html',
            template: './src/Projects/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'timer.html',
            template: './src/Projects/coundownTimer/index.html',
        }),
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: './package.json',
                to: './package.json'
            }]
        })


        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
    devtool:'source-map',
    optimization: {
        runtimeChunk: 'single'
    }
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
