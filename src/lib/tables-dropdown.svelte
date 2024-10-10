<script lang="ts">
    import {onMount} from "svelte";

    export let className: string
    export let tablesCount: number
    export let currentTable: string

    async function getTables() {
        const response = await fetch("/api/db/tables")
        let data = await response.json()
        return Array.isArray(data) ? data : [data];
    }

    let tables: any[]
    onMount(async () => {
        tables = await getTables();
        if (tables[0].message == "Internal Error") {
            tablesCount = 0
        } else {
            currentTable = tables[0];
            tablesCount = tables.length;
        }
    })
</script>

<details class={`dropdown ${className}`}>
    <summary class="btn m-1">Table</summary>
    <ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        {#await getTables() then tables}
            {#each tables as table, i}
                <li>
                    <a
                        role="button" href="#"
                        on:click={() => {currentTable = tables[i]}}>
                        {table}
                    </a>
                </li>
            {/each}
        {/await}
    </ul>
</details>