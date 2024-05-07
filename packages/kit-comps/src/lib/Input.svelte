<script lang="ts">
	import Label from './Label.svelte';

	let {
		value,
		disabled = false,
		label = '',
		name = crypto.randomUUID() as string,
		required = false
	} = $props();
</script>

<Label forId={name} {label} {required}>
	<input id={name} bind:value type="text" {name} {required} {disabled} />
</Label>
