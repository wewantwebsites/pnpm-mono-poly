<script>
	import { isEven } from 'shared-utils';

	let count = 0;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button class="btn" on:click={() => (count += 1)} label="imported from shared-util"
	>count is {count} and is {isEven(count) ? 'even' : 'odd'}</button
>
