<script lang="ts">
    import Columar from "./Columar.svelte";

    export let school: string;
    export let duration: string;
    export let course: string = undefined;
    export let score: string;
</script>

<div>
    <div class="title">{school}</div>
    {#if course}
        <span class="course">{course}</span>
    {/if}
    <Columar>
        <span class="duration">{duration}</span>
        <span class="score">{score}</span>
    </Columar>
</div>

<style>
    .title {
        font-size: var(--fzf-h3);
        font-weight: bold;
    }
</style>
