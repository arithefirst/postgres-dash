<script>
    import { fade } from 'svelte/transition';
    export let errorCode
    export let where
</script>

<div transition:fade class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-error h-1/2 w-1/2 rounded-xl">
    <div class="w-full h-full relative text-error-content text-center my-auto">
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 class="text-4xl">ERROR!</h1>
            <p class="text-l">An error was encountered during communication with the database while fetching {where}. (Code {errorCode["code"]}) </p>
        </div>

    </div>
</div>