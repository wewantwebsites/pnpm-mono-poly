<script lang="ts">
  export let headers: string[] = [];
  export let data: Record<string, any>[] = [];
</script>

<div class="overflow-x-auto">
  <table class="table table-zebra">
    <!-- head -->
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        {#each headers as header}
          <th>{header}</th>
        {/each}
      </tr>
    </thead>
    <!-- body -->
    <tbody>
      {#each data as row}
        <tr class="hover">
          <td>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </td>
          {#if typeof row === 'object'}
            {#each Object.values(row) as cell}
              <td>{cell}</td>
            {/each}
          {:else}
            <td>{row}</td>
          {/if}
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      {/each}
    </tbody>
    <!-- foot -->
    <tfoot>
      <tr>
        <th>
          <slot name="footer" />
        </th>
      </tr>
    </tfoot>
  </table>
</div>
