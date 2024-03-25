<script lang="ts">
  import type { ButtonType } from './types';
  export let label: string = 'Origin Button';
  export let disabled: boolean = false;
  export let type: ButtonType = 'button';
</script>

<button on:click {disabled} {type}>
  {label}
</button>
