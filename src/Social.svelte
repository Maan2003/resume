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
        content: url(../assets/linkedin.svg);
    }
    .social[data-platform="github"]::before {
        content: url(../assets/github.svg);
    }
    .social[data-platform="phone"]::before {
        content: url(../assets/phone.svg);
    }
    .social[data-platform="address"]::before {
        content: url(../assets/location.svg);
    }
    /**/
    .social[data-platform="email"]::before {
        content: url(../assets/email.svg);
    }
</style>
