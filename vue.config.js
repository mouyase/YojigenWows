module.exports = {
    publicPath: 'https://cdn.jsdelivr.net/gh/mouyase/YojigenWows@gh-pages/',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '四次元战舰世界'
                return args
            })
    },
    // devServer: {
    //     proxy: {
    //         '/': {
    //             target: 'https://worldofwarships.asia',
    //             changedTouches: true,
    //         }
    //     },
    // }
}
