<svelte:options
  customElement={{
    tag: 'sf-button',
    shadow: 'none',
  }}
/>

<script lang="ts">
  import Button from '../Button.svelte';
  export let label: string = 'WC Button';
  export let disabled: boolean;
  export let onClick = () => {
    console.log('wc click');
  };
</script>

<Button {label} {disabled} {onClick} />
