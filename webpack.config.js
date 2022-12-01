const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    mode: "development",
    devServer: {
        static: "./dist",
    },
    output: {
        path: path.resolve("./dist"),
        filename: "main.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "My first Output",
            template: "./index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: ["node_modules"],
                use: ["babel-loader"],
            },
        ],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
