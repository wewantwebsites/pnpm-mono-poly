import type { Meta, StoryObj } from '@storybook/svelte';
import Label from '../Label.svelte';

const meta: Meta<typeof Label> = {
  component: Label,
  args: {
    label: 'Label',
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    Component: Label,
  }),
};
