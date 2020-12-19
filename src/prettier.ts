export default {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 110,
  proseWrap: 'never',
  endOfLine: 'lf',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
};
