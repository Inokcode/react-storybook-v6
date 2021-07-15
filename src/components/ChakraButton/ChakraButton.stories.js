import React from 'react';
import { Box } from '@chakra-ui/react';

export default {
  title: 'Chakra/Button',
  component: Box,
  argTypes: {
    bg: { control: 'text' },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

// export const Success = () => <Box>Success</Box>;
// export const Danger = () => <Button colorScheme="#ff0000">Danger</Button>;

//args metheods

const Template = (args) => <Box {...args} />;

export const Success = Template.bind({});
Success.args = {
  bg: 'green',
  children: 'Success',
};

export const Danger = Template.bind({});
Danger.args = {
  bg: 'red',
  children: 'Danger',
};
