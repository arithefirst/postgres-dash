<script lang="ts">
    export let table: string

    // Get the contents of the table
    let sqlResponse; $: sqlResponse = fetchData(table)
    async function fetchData(tableName: string) {
        let response = await fetch(`/api/db/all/${tableName}`);
        return await response.json();
    }

    // Get the columns in the table
    let cols; $: cols = fetchCols(table)
    async function fetchCols(tableName: string) {
        let response = await fetch(`/api/db/cols/${tableName}`);
        return await response.json();
    }
</script>

<div class="overflow-x-auto w-10/12 mt-4 absolute left-1/2 -translate-x-1/2">
    <div class="rounded-xl border-2 border-base-300 overflow-scroll">
        <table class="table table-zebra rounded-xl">
            <thead>
            <tr>
                {#await cols then data}
                    {#each data as col}
                        <th class="text-base-content">{col}</th>
                    {/each}
                {/await}
            </tr>
            </thead>
            <tbody>
            {#await sqlResponse then data}
                {#each data as entry}
                    <tr>
                        {#each Object.entries(entry) as [,value]}
                            <td>{value}</td>
                        {/each}
                    </tr>
                {/each}
            {/await}
            </tbody>
        </table>
    </div>
    <div class="h-4"/>
</div>