import type { Meta, StoryObj } from '@storybook/svelte';
import Button from '../Button.svelte';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    label: { control: 'text' },
    isPrimary: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    Component: Button,
    props: {
      label: 'Default',
    },
  }),
};

export const Primary: Story = {
  render: () => ({
    Component: Button,
    props: {
      isPrimary: true,
      label: 'Primary',
    },
  }),
};
