import { Config } from '@stencil/core';

export const config: Config = {
  taskQueue: 'async',
  sourceMap: true,
  
  extras: {
    experimentalImportInjection: true,
  },
  
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
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
