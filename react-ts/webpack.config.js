module.exports = {
    mode:"development",
    watch:true,
    watchOptions: {
        ignored: ['./dist','./node_modules']
    },
    entry: ["@babel/core","./src/index.tsx"],
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {
                test:/\.tsx?$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets: ['@babel/preset-env'],
                        cacheDirectory:true
                    }
                }
            },
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { test: /\.css$/, loader: ["style-loader","css-loader"] },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};