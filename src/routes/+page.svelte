<script lang="ts">
    import HtmlTable from "\$lib/html-table.svelte";
    import TablesDropdown from "\$lib/tables-dropdown.svelte";

    let tablesCount: number;
    const table = "dummy";

    $: console.log(`tc: ${tablesCount}`);
</script>

<TablesDropdown
    bind:tablesCount={tablesCount}
/>

{#if tablesCount !== 0}
    <HtmlTable {table}/>
{/if}
