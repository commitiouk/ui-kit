import type { Meta, StoryObj } from '@storybook/react';

import { BaseButton, BaseButtonProps } from './BaseButton';

const meta: Meta<typeof BaseButton> = {
  title: 'Buttons/BaseButton',
  component: BaseButton,
};

export default meta;
type Story = StoryObj<BaseButtonProps>;

export const Default: Story = {
  args: {
    disabled: false,
    children: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
