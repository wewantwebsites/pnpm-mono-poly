<script lang="ts">
  import type { ButtonType } from './types';
  export let label: string = 'Origin Button';
  export let disabled: boolean;
  export let onClick: () => void = () => {
    console.log('origin click');
  };
  export let isPrimary = false;
  export let type: ButtonType = 'button';
</script>

<button
  class="btn"
  class:btn-primary={isPrimary}
  on:click={onClick}
  {disabled}
  {type}
>
  {label}
</button>
