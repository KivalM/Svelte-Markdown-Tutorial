<script lang="ts">
    export let data;
</script>

<!-- using the metadat -->
<h1>{data.title}</h1>

<!-- using the content -->
<svelte:component this={data.content}></svelte:component>
