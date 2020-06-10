module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: '\n          @import "@/scss/styles.scss";\n        '
      }
    }
  },
  transpileDependencies: ["vuetify"]
};
