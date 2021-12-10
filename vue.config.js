module.exports = {
    pages: {
        'index': {
            entry: './src/pages/Home/main.js',
            template: 'public/index.html',
            title: 'Home',
            chunks: [ 'chunk-vendors', 'chunk-common', 'index']
        },
        'games': {
            entry: './src/pages/Games/main.js',
            template: 'public/index.html',
            title: 'Games',
            chunks: [ 'chunk-vendors', 'chunk-common', 'index']
        },
    }
}