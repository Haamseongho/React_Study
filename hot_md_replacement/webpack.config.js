var webpack = require("webpack");
module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public'
    },

    module:
        {
            loaders: [
                {
                    test: /\.js$/,
                    loaders: ['react-hot','babel?' + JSON.stringify({
                        cacheDirectory: true,
                        presets: ['es2015', 'stage-0', 'react']
                    })], // query 부분은 babel에 대한 내용이기 때문에 다음과 같이 진행
                    exclude: /node_modules/,
                }
            ]
        },
        plugins : [
            new webpack.HotModuleReplacementPlugin()
        ]
};
