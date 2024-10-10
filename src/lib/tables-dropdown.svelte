<script lang="ts">
    import {onMount} from "svelte";

    export let tablesCount: number

    async function getTables() {
        const response = await fetch("/api/db/tables")
        let data = await response.json()
        return Array.isArray(data) ? data : [data];
    }

    onMount(async () => {
        let tables = await getTables();
        if (tables[0].message == "Internal Error") {
            tablesCount = 0
        } else {
            tablesCount = tables.length;
        }
    })
</script>