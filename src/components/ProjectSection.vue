<script setup>
import Project from './Project.vue';
import GetItOnPlay from './GetItOnPlay.vue';

const open_link = (url) => {
    window.open(url, '_blank');
};

</script>

<template>
    <section id="apps">
        <Project client:load
            :images="['/showcase_images/iq_lab_start.png']"
            accent="#97db45a0"
            button_class="iq_lab_button"
            title="IQ Lab"
            description="An app to develop your abstract reasoning skills"
            run_url="/web_apps/iq_lab/index.html"
            iframe_width="80vw"
            iframe_height="80vh"
        >
                <button class="iq_lab_button interaction_button" id="iq_web_button" @click="open_link('/web_apps/iq_lab/index.html')"
                    >See website</button
                >
                <GetItOnPlay url="https://play.google.com/store/apps/details?id=io.andresdavidcalderon.github.iq&hl=en" />
        </Project>
        <Project client:load
            :images="['/showcase_images/smart_notes.png']"
            accent="#ffc300ff"
            button_class="smart_notes_button"
            title="Smart notes"
            description="A notes app with support for formatting and images"
            run_url="/web_apps/smart_notes/index.html"
        >
            <button class="smart_notes_button interaction_button" @click="open_link('/web_apps/smart_notes_index.html')"
                >See website</button
            >
            <button class="smart_notes_button interaction_button" @click="open_link('https://github.com/AndresDavidCalderon/smart_notes')"
                >Source code</button
            >
            <button class="smart_notes_button interaction_button" @click="open_link('https://github.com/AndresDavidCalderon/smart_notes/releases/tag/Linux_only')"
                >Get for desktop</button
            >
        </Project>
        <Project client:load
            :images="['/showcase_images/integral_formulas_tan.png']"
            accent="#455eb0ff"
            title="Integral formulas"
            description="A watchface that helps you study for calculus, avalible for wear OS, formerly android wear."
            image_width="50%"
        >
            <div class="project_interaction_container">
                <GetItOnPlay url="https://play.google.com/store/apps/details?id=dev.andresdavidcalderon.integral&hl=en" />
            </div>
        </Project>
    </section>
    <section id="prototypes">
        <Project client:load
            :images="['/showcase_images/pixel_liquid_toy.png']"
            accent="#e37979a0"
            button_class="pixel_liquid_button"
            title="Pixel liquid toy"
            description="Liquid simulation with solute"
            title_class="pixel_liquid_title"
            run_url="/web_apps/pixel_liquid/index.html"
            iframe_height="50vw"
        >
            <button class="pixel_liquid_button interaction_button" @click="open_link('https://andres-dev.itch.io/pixel-liquid-toy')">
                See on itch.io
            </button>
        </Project>
        <Project client:load
            :images="['/showcase_images/exploragrafos_orange.png']"
            accent="#ffffffa0"
            button_class="exploragrafos_button"
            title="Exploragrafos"
            description="A tool for showing properties of undirected graphs"
            run_url="/web_apps/exploragrafos/index.html"
            iframe_height="50vw"
        >
            <GetItOnPlay url="https://play.google.com/store/apps/details?id=exploragrafos.andresdavidcalderon.dev"></GetItOnPlay>
        </Project>
        <Project client:load
            :images="['/showcase_images/randamatch.png']"
            accent="#30541cff"
            button_class="randamatch_button"
            title="Randamatch"
            description="A prototype for chunk-based 3D procedural generation."
        >
            <button class="randamatch_button interaction_button" @click="open_link('https://andres-dev.itch.io/randamatch')">
                Get it on Itch.io
            </button>
        </Project>
    </section>
</template> 