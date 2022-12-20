<script lang="ts">
    export let group: string | undefined = undefined;
    export let skills: string[];
</script>

<div>
    {#if group}
        <b>{group}</b>:
    {/if}
    {#each skills as s}
        <span class="skill">{s}</span>
    {/each}
</div>

<style>
    .skill:not(:last-child)::after {
        content: ", ";
    }
</style>
