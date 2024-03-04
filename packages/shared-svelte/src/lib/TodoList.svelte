<svelte:options customElement={{ tag: "todo-list", shadow: "none" }} />

<script lang="ts">
    export let items: Todo[] = [];
    type Todo = {
        id: string;
        title: string;
        description: string;
    }
    let title: string;
    let description: string;


    function addItem() {
        items = [...items, { title, description, id: crypto.randomUUID() }];
    }

    function removeItem(id) {
        items = items.filter((i) => i.id != id);
    }
</script>

<ul>
    {#each items as item}
        <li key={item.id}>
            <sup>{item.id}</sup>
            {item.title}: <span>{item.description}</span><button
                on:click={() => removeItem(item.id)}>Delete</button
            >
        </li>
    {/each}
</ul>
<div>
    <input type="text" bind:value={title} />
    <input type="text" bind:value={description} />
</div>
<button on:click={addItem}>Add Item</button>

<style>
    div {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>
