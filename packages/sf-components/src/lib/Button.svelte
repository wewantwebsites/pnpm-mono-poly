<script lang="ts">
  export let label: string = 'Origin Button';
  export let disabled: boolean;
  export let onClick: () => void = () => {
    console.log('origin click');
  };
  export let isPrimary = false;
</script>

<button class="btn" class:btn-primary={isPrimary} on:click={onClick} {disabled}>
  {label}
</button>
