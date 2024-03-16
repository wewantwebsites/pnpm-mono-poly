<svelte:options
  customElement={{
    tag: 'sf-button',
    shadow: 'none',
  }}
/>

<script lang="ts">
  export let label: string = 'Origin Button';
  export let disabled: boolean;
  export let onClick: () => void = () => {
    console.log('origin click');
  };
</script>

<button on:click={onClick} {disabled}>
  {label}
</button>
