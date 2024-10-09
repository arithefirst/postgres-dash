<script lang="ts">
    const table = "login"

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

<table>
    <tr>
        {#await cols then data}
            {#each data as col}
                <th>{col}</th>
            {/each}
        {/await}
    </tr>
    {#await sqlResponse then data}
        {#each data as entry}
            <tr>
                {#each Object.entries(entry) as [,value]}
                    <th>{value}</th>
                {/each}
            </tr>
        {/each}
    {/await}
</table>
