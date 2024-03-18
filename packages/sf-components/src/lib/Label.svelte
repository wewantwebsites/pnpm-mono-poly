<script>
  export let label = '';
  let classes = '';
  export { classes as class };
</script>

<label class={classes}>
  {label}
  <slot />
</label>
