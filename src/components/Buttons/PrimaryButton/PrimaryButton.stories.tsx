import type { Meta, StoryObj } from '@storybook/react';

import { PrimaryButton, PrimaryButtonProps } from './PrimaryButton';

const meta: Meta<typeof PrimaryButton> = {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
};

export default meta;
type Story = StoryObj<PrimaryButtonProps>;

export const Default: Story = {
  args: {
    disabled: false,
    size: 'md',
    appearance: 'default',
    children: 'Button',
  },
  argTypes: {
    appearance: {
      control: {
        type: 'select',
      },
    },
    size: {
      control: {
        type: 'select',
      },
    },
  },
};

export const Danger: Story = {
  args: {
    ...Default.args,
    appearance: 'danger',
  },
  argTypes: {
    ...Default.argTypes,
  },
};
