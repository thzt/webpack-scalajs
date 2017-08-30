const path = require('path');

module.exports = {
    context: path.resolve(__dirname, ''),
    entry: [
        path.resolve(__dirname, 'src/main/scala/test/App.scala')
    ],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.scala$/,
                loader: 'scalajs-loader'
            }
        ]
    }
};