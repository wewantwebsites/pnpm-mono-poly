<script>
	import Label from './Label.svelte';

	export let value = '';
	export let label = '';
	export let type = 'text';
	export let name = '';
</script>

<Label forId={name} {label}>
	<input bind:value {type} {name} id={name} />
</Label>
