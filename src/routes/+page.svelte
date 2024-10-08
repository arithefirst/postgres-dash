<script lang="ts">
   // Get the contents of the table
   let sqlResponse = fetchData()
    async function fetchData() {
        let response = await fetch('/api/db');
        return await response.json();
    }
</script>

<table>
    <tr>
        <th>id</th>
        <th>email</th>
        <th>gender</th>
        <th>firstname</th>
        <th>lastname</th>
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
