<script lang="ts">
    import Popup from "\$lib/popup.svelte";
    import HtmlTable from "\$lib/html-table.svelte";
    import TablesDropdown from "\$lib/tables-dropdown.svelte";

    let currentTable: string

    let tableError: any[] = [false]
    let colError: any[] = [false]
    $: console.log(tableError[1], colError[1])

</script>

{#if colError[0] === true}
    <Popup where="columns" errorCode={colError[1]}/>
{/if}
{#if tableError[0] === true}
    <Popup where="table contents" errorCode={tableError[1]}/>
{/if}

<div class="h-screen md:w-[12.5vw] bg-base-300 fixed rounded-r-xl">
    <div class="relative">
        <div class="w-11/12 bg-base-200 mx-auto mt-2 h-8 rounded-lg text-center">
            postgres-dash
        </div>
        <br>
        <TablesDropdown
            bind:currentTable={currentTable}
            className="z-10"
        />
    </div>
</div>
<div class="md:w-[87.5vw] float-right">
    <div class="relative">
        {#if !colError[0] && !tableError[0]}
            <HtmlTable
                table={currentTable}
                bind:tableError={tableError}
                bind:colError={colError}
            />
        {/if}
    </div>
</div>