import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'delgadotrueba-ui',
  taskQueue: 'async',
  sourceMap: true,

  extras: {
    experimentalImportInjection: true,
  },
};
