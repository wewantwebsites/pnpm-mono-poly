<svelte:options
  customElement={{
    tag: 'wc-button',
    shadow: 'none',
    props: {
      label: { attribute: 'label', reflect: true, type: 'String' },
      type: { attribute: 'type', reflect: true, type: 'String' },
      disabled: { attribute: 'disabled', reflect: true, type: 'Boolean' },
    },
  }}
/>

<script lang="ts">
  import Button from '../Button.svelte';
  import type { ButtonType } from '../types';
  export let label = 'Button';
  export let type: ButtonType = 'button';
  export let disabled = false;
</script>

<Button {label} {type} {disabled} />
