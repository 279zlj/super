module.exports = {
    publicPath: process.env.NODE_ENV == '/' ? '//your_url' : '/',
    outputDir: 'dist',
    assetsDir: 'static',
    filenameHashing: true,
    // pages:{
    //     index:{
    //         entry:'src/pages/index/index.js',
    //         template:'src/pages/index/index.html',
    //         filename:'/index.html',
    //         title:'',
    //         chunks:['chunk-vendors','chunk-common','index']
    //     }
    // }
    lintOnSave: true,
    runtimeCompiler: false,
    transpileDependencies: [],
    productionSourceMap: false,
    configureWebpack: (config) => {

    },
    chainWebpack: (config) => {
        config.module
            .rule('eslint')
            .exclude
            .add('/Users/maybexia/Downloads/FE/community_built-in/src/lib')
            .end()
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule
            .use('vue-svg-loader')
            .loader('vue-svg-loader')
    },
    css: {
        modules: false,
        extract: true,
        sourceMap: false,
        loaderOptions: {
            css: {

            },
            postcss: {

            }
        }
    },
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 3000,
        https: false,
        hotOnly: false,
        proxy: null,
        before: app => {}
    },
    parallel: require('os').cpus().length > 1,
    pwa: {},
    pluginOptions: {

    }
}