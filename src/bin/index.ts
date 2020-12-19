#!/usr/bin/env node

import * as path from 'path';
import * as fs from 'fs-extra';
import * as chalk from 'chalk';

const rootDir = process.env.PWD || '.';

const writeOptions = {
  eslint: {
    path: path.join(rootDir, '.eslintrc1.js'),
    template: `/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = require('@spark-build/nest-lint').default.eslint;
`,
  },
  prettier: {
    path: path.join(rootDir, '.prettierrc1.js'),
    template: `/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = require('@spark-build/nest-lint').default.prettier;
`,
  },
};

const bootstrap = () =>
  Promise.all(
    Object.keys(writeOptions).map((type) => {
      const option = writeOptions[type];

      return fs.outputFile(option.path, option.template, { encoding: 'utf8' });
    }),
  ).then(() => console.log(chalk.green(`✔ nest lint file init success`)));

bootstrap();
