const env = process.env.NODE_ENV;

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: '',
  indexPath: 'index.html',
  filenameHashing: true,
  pages: undefined,
  // Type: boolean | 'warning' | 'default' | 'error'
  // 设置为 true 或 'warning' 时，eslint-loader 会将 lint 错误输出为编译警告。
  // 默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
  // 如果你希望让 lint 错误在开发时直接显示在浏览器中，你可以使用 lintOnSave: 'error'。
  // 这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。
  // lintOnSave: process.env.NODE_ENV !== 'production',
  lintOnSave: false,
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: true,
  crossorigin: undefined,
  integrity: false,
  configureWebpack: (config) => {},
  chainWebpack: (config) => {},
  css: {
    requireModuleExtension: true,
    extract: false,
    sourceMap: false,
    loaderOptions: {}
  },
  devServer: {
    open: false,
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://101.15.22.98',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  parallel: require('os').cpus().length > 1,
  pwa: {},
  pluginOptions: {}
};
