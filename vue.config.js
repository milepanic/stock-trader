module.exports = {
    configureWebpack: {
        devServer: {
            historyApiFallback: true,
            noInfo: true,
            overlay: true,
            port: 3000,
            host: 'stock-trader.test',
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            }
        }
    }
}
