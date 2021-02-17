// .storybook/main.js
 
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  refs: {
    'design-system-1': {
      title: 'Taskbox',
      // The url provided by Chromatic when it was deployed
      url: 'https://5ffee759e0d3f00021870c2b-iajnnagwnr.chromatic.com/',
    },
    'design-system-2': {
      title: 'learnstorybook-design-system',
      // The url provided by Chromatic when it was deployed
      url: 'https://601d0a02da28130021265de6-roohomxejv.chromatic.com/',
    },
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
};