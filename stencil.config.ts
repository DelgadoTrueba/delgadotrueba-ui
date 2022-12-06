import { Config } from '@stencil/core';
// import eslint from '@rollup/plugin-eslint';
import eslint from '@rbnlffl/rollup-plugin-eslint';

export const config: Config = {
  namespace: 'delgadotrueba-ui',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    eslint({
      filterExclude: [
        'node_modules/**',
        "**/*.css*",
        'src/index.ts',
        '**/*.d.ts',
      ],
      extensions: ['tsx'],
      errorOnUnmatchedPattern: false,
      throwOnWarning: true,
      throwOnError: true
    })
  ]
};
