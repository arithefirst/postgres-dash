<script lang="ts">
    import { page } from '$app/stores';
    const error = $page.error!.message;
</script>

<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <h1 class="text-5xl text-center font-bold">{$page.status}</h1>
    <p class="text-center">{error}</p>
</div>