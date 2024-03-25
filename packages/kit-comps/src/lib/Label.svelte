<script>
	export let label = '';
	export let isRequired = false;
	export let forId = '';

	$: hasDefaultSlot = $$slots.default !== undefined;
</script>

<label for={forId} class="label">
	{label}}"
	{#if isRequired}
		<sup class="text-red-500">*</sup>
	{/if}

	{#if hasDefaultSlot}
		<slot />
	{/if}
</label>
