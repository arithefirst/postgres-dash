<script lang="ts">
    import HtmlTable from "\$lib/html-table.svelte";
    import TablesDropdown from "\$lib/tables-dropdown.svelte";

    let tablesCount: number;
    let currentTable: string;
</script>

<TablesDropdown
    bind:tablesCount={tablesCount}
    bind:currentTable={currentTable}
    className="z-10"
/>

{#if tablesCount !== 0}
    <HtmlTable table={currentTable}/>
{/if}
