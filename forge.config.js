module.exports = {
  packagerConfig: {
    icon: 'assets/logo.icns',
    ignore: (file) => {
      if (!file) return false;
      return !/^[/\\]\.webpack($|[/\\]).*$/.test(file)
    },
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: 'youka',
        exe: 'youka.exe',
        setupIcon: 'assets/logo.ico'
      }
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        name: 'youka',
        icon: 'assets/logo.icns'
      },
    },
  ],
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "youkaclub",
          name: "youka-desktop"
        },
        draft: true
      }
    }
  ],
  plugins: [
    [
      "@electron-forge/plugin-webpack",
      {
        mainConfig: "./webpack/webpack.main.config.js",
        renderer: {
          config: "./webpack/webpack.renderer.config.js",
          entryPoints: [
            {
              html: "./src/index.html",
              js: "./src/index.jsx",
              name: "main_window"
            }
          ]
        }
      }
    ]
  ]
}
