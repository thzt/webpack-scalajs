const path = require('path');

module.exports = {
    context: path.resolve(__dirname, ''),
    entry: [
        path.resolve(__dirname, 'src/main/scala/SampleMain.scala')
    ],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'index.js'
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