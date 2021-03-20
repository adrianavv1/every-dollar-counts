var path = require("path");

module.exports = {
    module: {
        rules: [
            {
                //only the js and jsx will be considered
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                options: {
                    presets: ['env']
                }
            }
        ]
    },

    plugins: [new UglifyJSPlugin()],

    entry: {
        app: './src/app.js'
    },

    output: {
        filename: 'final.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    mode: 'development'
};