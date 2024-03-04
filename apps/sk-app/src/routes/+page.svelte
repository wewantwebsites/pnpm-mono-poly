<script>
	import { isEven } from 'shared-utils';
	import { TodoList } from 'shared-svelte';

	let count = 0;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button class="btn" on:click={() => (count += 1)} label="imported from shared-ui"
	>count is {count} and is {isEven(count) ? 'even' : 'odd'}</button
>
<div class="todolist">
<TodoList items={[]} />
</div>

<style>
    :global(.todolist button) {
        background: tomato;
        color: black;
        font-weight: 500;
        font-size: 1.25rem;
	}
</style>
