<script lang="ts">
    import * as marked from "marked";
    import Columar from "./Columar.svelte";
    export let title: string | undefined = undefined;
    export let duration: string | undefined = undefined;
    export let company: string | undefined = undefined;
    export let summary: string | undefined = undefined;
    export let link: string | undefined = undefined;
    export let details: string | undefined = undefined;
</script>

<div>
    <Columar>
        <span class="title">{title}</span>
        {#if duration}
            <span>{duration}</span>
        {/if}
    </Columar>
    {#if company}
        <div class="company">{company}</div>
    {/if}
    {#if summary}
        <div class="summary">{summary}</div>
    {/if}
    {#if link}
        <a class="link" href={link}>{link}</a>
    {/if}
    {#if details}
        {@html marked.parse(details)}
    {/if}
</div>

<style>
    .title {
        font-size: var(--fsz-h2);
        color: var(--fg-dark);
        font-weight: bold;
    }

    .company,
    .summary {
        font-size: var(--fsz-h3);
        font-style: italic;
    }
</style>
