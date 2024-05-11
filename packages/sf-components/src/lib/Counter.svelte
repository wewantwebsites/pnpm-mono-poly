<svelte:options
  customElement={{
    tag: 'sf-counter',
    shadow: 'none',
  }}
/>

<script lang="ts">
  export let start: number = 0;
  export let step: number = 1;

  let stepBy = parseInt(step.toString()) || 1;
  let count = parseInt(start.toString()) || 0;
  function increment() {
    count += stepBy;
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
