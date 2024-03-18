import type { Meta, StoryObj } from '@storybook/svelte';
import TextInput from '../TextInput.svelte';

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  argTypes: {
    label: { control: 'text' },
    subLabel: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    minlength: { control: 'number' },
    maxlength: { control: 'number' },
    pattern: { control: 'text' },
    required: { control: 'boolean' },
    errorMessages: { control: 'array' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    Component: TextInput,
    props: {
      label: 'What do you want?',
    },
  }),
};

export const WithSubLabel: Story = {
  render: () => ({
    Component: TextInput,
    props: {
      label: 'What do you want?',
      subLabel: 'Please enter your desired input',
    },
  }),
};

export const WithPlaceholder: Story = {
  render: () => ({
    Component: TextInput,
    props: {
      label: 'What do you want?',
      placeholder: 'Enter your input here',
    },
  }),
};

export const Disabled: Story = {
  render: () => ({
    Component: TextInput,
    props: {
      label: 'What do you want?',
      disabled: true,
    },
  }),
};

export const WithErrorMessages: Story = {
  render: () => ({
    Component: TextInput,
    props: {
      label: 'What do you want?',
      errorMessages: ['Invalid input'],
    },
  }),
};

export const WithMinLength: Story = {
  render: () => ({
    Component: TextInput,
    props: {
      label: 'What do you want?',
      minlength: 5,
    },
  }),
};

export const WithMaxLength: Story = {
  render: () => ({
    Component: TextInput,
    props: {
      label: 'What do you want?',
      maxlength: 10,
    },
  }),
};

export const WithPattern: Story = {
  render: () => ({
    Component: TextInput,
    props: {
      label: 'What do you want?',
      pattern: '[A-Za-z]+',
    },
  }),
};

export const Required: Story = {
  render: () => ({
    Component: TextInput,
    props: {
      label: 'What do you want?',
      required: true,
    },
  }),
};
