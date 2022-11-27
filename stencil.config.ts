import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'delgadotrueba-ui',
  outputTargets: [
    {
      type: 'docs-vscode',
      file: 'custom-elements.json'
    },
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
