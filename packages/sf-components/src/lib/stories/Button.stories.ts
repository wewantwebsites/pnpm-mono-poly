import type { Meta, StoryObj } from '@storybook/svelte';
import Button from '../Button.svelte';

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    Component: Button,
  }),
}

export const Primary: Story = {
  render: () => ({
    Component: Button,
    props: {
      isPrimary: true,
      label: 'Primary',
    },
  }),
}