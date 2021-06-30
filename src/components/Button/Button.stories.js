import React from 'react';
import Button from './Button';

//components story format
//Have default export one or more named export

export default {
  title: 'Form/control/Button',
  component: Button,
  args: {
    children: 'Button',
  },
};

//Name export
//represent a story
export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

//args way of v6
const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: 'primary',
  children: 'Primary Args',
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: 'secondary',
  // children: 'Secondary Args',//args at components level
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...SecondaryA.args,
  children: 'Long Primary Args',
};
