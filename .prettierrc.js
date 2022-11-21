module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  useTabs: false,
  tabWidth: 2,
  overrides: [
    {
      files: '*.yaml',
      options: {
        tadWidth: 2,
        printWidth: 40,
        singleQuote: true,
      },
    },
  ],
};
