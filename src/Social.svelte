<script lang="ts">
    export let data: { link?: string; display?: string; name: string }[];
</script>

<div class="socials">
    {#each data as s}
        <a href={s.link} data-platform={s.name} class="social">
            {s.display}
        </a>
    {/each}
</div>

<style>
    .socials {
        display: flex;
        flex-direction: column;
    }

    .social {
        color: inherit;
    }

    .social::before {
        display: inline-block;
        text-align: center;
        width: 12px;
        margin-right: 4px;
        position: relative;
        bottom: -2px;
    }

    .social[data-platform="linkedin"]::before {
        content: url(/icons/linkedin.svg);
    }
    .social[data-platform="github"]::before {
        content: url(/icons/github.svg);
    }
    .social[data-platform="phone"]::before {
        content: url(/icons/phone.svg);
    }
    .social[data-platform="address"]::before {
        content: url(/icons/location.svg);
    }
    .social[data-platform="email"]::before {
        content: url(/icons/email.svg);
    }
</style>
