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

<div class="overflow-x-auto w-11/12 border-black border-2 rounded-lg absolute left-1/2 top-8 mb-8 -translate-x-1/2">
    <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead class="bg-gray-200">
        <tr>
            {#await cols then data}
                {#each data as col}
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">{col}</th>
                {/each}
            {/await}
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
        {#await sqlResponse then data}
            {#each data as entry}
                <tr class="hover:bg-gray-50 focus:outline-none transition duration-300">
                    {#each Object.entries(entry) as [,value]}
                        <td class="px-6 py-3 whitespace-no-wrap text-sm text-gray-900">{value}</td>
                    {/each}
                </tr>
            {/each}
        {/await}
        </tbody>
    </table>
</div>

