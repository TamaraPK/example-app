// .storybook/preview.js
 
import React from 'react';
 
// The styles imported from the design system.
import { global as designSystemGlobal } from '@tamarapk/learnstorybook-design-system';
 
const { GlobalStyle } = designSystemGlobal;
 
// Adds a global decorator to include the imported styles from the design system.
export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
 
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};