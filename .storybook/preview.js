import {defineCustomElements} from '../loader';
defineCustomElements();

import { setCustomElementsManifest } from '@storybook/web-components';
import customElementsManifest from '../custom-elements.json';
setCustomElementsManifest(customElementsManifest)

export const parameters = {
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    source: {
      type: "dynamic",
    },
  },
}