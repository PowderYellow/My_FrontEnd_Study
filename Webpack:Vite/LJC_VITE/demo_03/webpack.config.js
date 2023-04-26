
const path = require("path")
module.exports = {
    mode: "production",
    // entry: {
    //     a: "./src/a.js",
    //     B: "./src/b.js"
    // },
    // entry: "./src/a.js",
    output: {
        // path: path.resolve(__dirname, "hello"),
        // filename: "[name]-[id]-[hash].js",
        // clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|png|gif)$/i,
                type: "asset/resource" // 图片直接资源类型的数据，可以通过指定type来处理
            }
        ]
    }
}