module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // Make sure the module-resolver plugin is here and configured
      [
        'module-resolver',
        {
          alias: {
            "@": "./", // Map the '@/' alias to your project root
          },
        },
      ],
      // ... your other plugins (like 'nativewind/babel')
    ],
  };
};