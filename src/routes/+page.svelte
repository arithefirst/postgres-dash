<script lang="ts">
    import HtmlTable from "\$lib/html-table.svelte";
    import TablesDropdown from "\$lib/tables-dropdown.svelte";

    let tablesCount: number;
    let currentTable: string;
</script>

<div class="h-screen md:w-[12.5vw] bg-base-300 fixed rounded-r-xl">
    <div class="relative">
        <div class="w-11/12 bg-base-200 mx-auto mt-2 h-8 rounded-lg text-center">
            postgres-dash
        </div>
        <br>
        <TablesDropdown
                bind:tablesCount={tablesCount}
                bind:currentTable={currentTable}
                className="z-10"
        />
    </div>
</div>
<div class="md:w-[87.5vw] float-right">
    <div class="relative">
        {#if tablesCount !== 0}
            <HtmlTable table={currentTable}/>
        {/if}
    </div>
</div>