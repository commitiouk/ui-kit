import type { Meta, StoryObj } from '@storybook/react';

import { SecondaryButton, SecondaryButtonProps } from './SecondaryButton';

const meta: Meta<typeof SecondaryButton> = {
  title: 'Buttons/SecondaryButton',
  component: SecondaryButton,
};

export default meta;
type Story = StoryObj<SecondaryButtonProps>;

export const Default: Story = {
  args: {
    disabled: false,
    appearance: 'default',
    children: 'Button',
  },
  argTypes: {
    appearance: { control: { type: 'select' } },
    size: { control: { type: 'select' } },
  },
};

export const Info: Story = {
  args: {
    ...Default.args,
    size: 'md',
    appearance: 'info',
    children: 'View details',
  },
  argTypes: { ...Default.argTypes },
};

export const Danger: Story = {
  args: {
    ...Default.args,
    size: 'md',
    appearance: 'danger',
    children: 'Cancel',
  },
  argTypes: { ...Default.argTypes },
};
