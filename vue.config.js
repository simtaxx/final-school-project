module.exports = {
  lintOnSave: true,
  transpileDependencies: ["vuetify"],
  runtimeCompiler: true,
  pwa: {
    name: "SIVIK",
    themeColor: "#430000",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    manifestOptions: {
      display: "fullscreen"
    },
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js"
    }
  }
}
