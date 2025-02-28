module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env", // Ensure this line is uncommented
          path: ".env",
          allowUndefined: true,
        },
      ],
    ],
  };
};
