<script lang="ts">
	let { label, required, forId = '' } = $props();
</script>

<label for={forId} class="label">
	{label}
	{#if required}
		<sup class="text-red-500">*</sup>
	{/if}

	<slot />
</label>
