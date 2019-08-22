module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        "root": [
          "./src"
        ],
        "extensions": [
          ".js",
          ".ios.js",
          ".android.js"
        ],
        "alias": {
          "@src": "./src",
          "@navigation": "./src/navigation",
          "@features": "./src/features",
          "@components": "./src/components",
          "@assets": "./src/components",
          "@redux": "./src/redux",
          "@styles": "./src/styles",
          "styles": "./src/styles/general.js",
          "api": "./src/api"
        }
      }
    ]
  ]
};
