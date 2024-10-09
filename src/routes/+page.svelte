<script lang="ts">
    const table = "dummy"

   // Get the contents of the table
    let sqlResponse = fetchData()
    async function fetchData() {
        let response = await fetch(`/api/db/all/${table}`);
        return await response.json();
    }

    let cols = fetchCols()
    async function fetchCols() {
        let response = await fetch(`/api/db/cols/${table}`);
        return await response.json();
    }
</script>

<div class="overflow-x-auto w-11/12 absolute left-1/2 -translate-x-1/2 top-4">
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