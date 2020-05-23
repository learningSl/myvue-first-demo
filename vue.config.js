const path = require("path");
module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    lintOnSave: false,
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {
            sass: {
                prependData: `@import "./src/styles/main.scss";`
            }
        }
    }

}