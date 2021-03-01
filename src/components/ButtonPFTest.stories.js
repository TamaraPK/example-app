import React from 'react';

import { ButtonPFTest } from './ButtonPFTest';

export default {
  title: 'Example/ButtonPF',
  component: ButtonPFTest,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ButtonPFTest {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'PrimeReact Button Test',
};


