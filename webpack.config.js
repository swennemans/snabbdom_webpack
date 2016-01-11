module.exports = {
    entry: './app/js/main.js',
    output: {
        path: './',
        fileName: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        port: 4000
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    }
}
