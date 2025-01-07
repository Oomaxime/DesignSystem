import React, { useState } from 'react';
import Input from '../components/ui/test/Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    type: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    variant: {
      control: { type: 'select', options: ['primary', 'danger', 'success'] },
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Type something...',
  size: 'medium',
  variant: 'primary',
};

export const Danger = Template.bind({});
Danger.args = {
  placeholder: 'Error input...',
  size: 'medium',
  variant: 'danger',
};

export const Success = Template.bind({});
Success.args = {
  placeholder: 'Success input...',
  size: 'large',
  variant: 'success',
};
