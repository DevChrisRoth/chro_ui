module.exports = {
    publicPath: "./src",
    chainWebpack: (config) =>{
        config.resolve.symlinks(false)
    }
}