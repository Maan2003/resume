<script lang="ts">
    import data from "../data.js";
    import Achieve from "./Achieve.svelte";
    import Education from "./Education.svelte";
    import Header from "./Header.svelte";
    import Section from "./Section.svelte";
    import Skills from "./Skills.svelte";
    import Social from "./Social.svelte";
    import Work from "./Work.svelte";
</script>

<Header name={data.personal.name} />

<div class="cols">
    <div class="c1">
        <Section name="Contact">
            <Social data={data.personal.socials} />
        </Section>
        <Section name="Education">
            {#each data.education as e}
                <Education {...e} />
            {/each}
        </Section>
        <Section name="Skills">
            {#each data.skill_groups as sg}
                <Skills {...sg} />
            {/each}
        </Section>
        <Section name="Achievements">
            {#each data.achievements as a}
                <Achieve {...a} />
            {/each}
        </Section>
    </div>
    <div class="c2">
        <Section name="Experience">
            {#each data.work_exp as work}
                <Work {...work} />
            {/each}
        </Section>

        <Section name="Projects">
            {#each data.projects as w}
                <Work {...w} />
            {/each}
        </Section>
    </div>
</div>

<style>
    .cols {
        display: flex;
        /* gap: 20pt; */
    }
    .c1 {
        flex: 0 0 35%;
    }
    .c2 {
        margin-left: 20pt;
        flex: 0 0 calc(65% - 20pt);
    }
</style>
