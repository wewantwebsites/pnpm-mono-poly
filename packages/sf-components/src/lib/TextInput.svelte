<script lang="ts">
  export let label = '';
  export let subLabel = '';
  export let placeholder = '';
  export let disabled = false;
  export let errorMessages: string[] = [];
  export let minlength = 0;
  export let maxlength = 100;
  export let pattern = "w+',-s";
  export let required = false;
</script>

<label class="form-control w-full max-w-xs">
  <div class="label">
    <span class="label-text">
      {label}
      {#if required}
        <sup class="text-red-500">*</sup>
      {/if}
    </span>
    {#if subLabel}
      <span class="label-text-alt">{subLabel}</span>
    {/if}
  </div>

  <input
    {placeholder}
    {disabled}
    {pattern}
    {maxlength}
    {minlength}
    {required}
    type="text"
    class="input input-bordered w-full max-w-xs"
  />

  {#if !!errorMessages.length}
    <div class="flex">
      <span class="label-text-alt text-xs text-red-500">Please try again</span>
      {#each errorMessages as message}
        <span class="label-text-alt text-xs text-red-500 ml-2">{message}</span>
      {/each}
    </div>
  {/if}
</label>
