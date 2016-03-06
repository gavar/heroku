var path = require('path');

module.exports = {
    entry: "./src/entry",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            include: path.join(__dirname, 'src'),
            query: {presets: ['react', 'es2015']}
        }]
    }
};