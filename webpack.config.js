const path = require("path");

module.exports = {
    entry: "./src/js/index.js",
    mode: "production",
    watch: true,
    output: {
        path: path.resolve("./dist"),
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: ["node_modules"],
                use: ["babel-loader"],
            },
        ],
    },
};
