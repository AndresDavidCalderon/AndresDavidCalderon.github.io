<script setup>
import Project from './Project.vue';
import GetItOnPlay from './GetItOnPlay.vue';
import { getUI } from '../language.js';

const open_link = (url) => {
    window.open(url, '_blank');
};

</script>

<template>
    <section id="apps">
        <Project client:load
            :images="['/showcase_images/iq_lab_highres.png']"
            accent="#97db45a0"
            button_class="iq_lab_button"
            title="IQ Lab"
            :description="getUI('contents.iqlab.desc')"
            run_url="/web_apps/iq_lab/index.html"
            iframe_width="80vw"
            iframe_height="80vh"
        >
                <button class="iq_lab_button interaction_button" id="iq_web_button" @click="open_link('/web_apps/iq_lab/index.html')"
                    >{{ getUI('contents.website') }}</button
                >
                <GetItOnPlay url="https://play.google.com/store/apps/details?id=io.andresdavidcalderon.github.iq&hl=en" />
        </Project>
        <Project client:load
            :images="['/showcase_images/smart_notes.png']"
            accent="#ffc300ff"
            button_class="smart_notes_button"
            title="Smart notes"
            :description="getUI('contents.smartnotes.desc')"
            run_url="/web_apps/smart_notes/index.html"
        >
            <button class="smart_notes_button interaction_button" @click="open_link('/web_apps/smart_notes_index.html')"
                >{{ getUI('contents.website') }}</button
            >
            <button class="smart_notes_button interaction_button" @click="open_link('https://github.com/AndresDavidCalderon/smart_notes')"
                >{{ getUI('contents.source') }}</button
            >
            <button class="smart_notes_button interaction_button" @click="open_link('https://github.com/AndresDavidCalderon/smart_notes/releases/tag/Linux_only')"
                >{{ getUI('contents.desktop') }}</button
            >
        </Project>
        <Project client:load
            :images="['/showcase_images/integral_formulas_tan.png']"
            accent="#455eb0ff"
            title="Integral formulas"
            :description="getUI('contents.integralformulas.desc')"
            image_width="50%"
        >
            <div class="project_interaction_container">
                <GetItOnPlay url="https://play.google.com/store/apps/details?id=dev.andresdavidcalderon.integral&hl=en" />
            </div>
        </Project>
    </section>
    <section id="prototypes">
        <Project client:load
            :images="['/showcase_images/pixel_liquid_highres.png']"
            accent="#e37979a0"
            button_class="pixel_liquid_button"
            title="Pixel liquid toy"
            :description="getUI('contents.pixelliquid.desc')"
            title_class="pixel_liquid_title"
            run_url="/web_apps/pixel_liquid/index.html"
            iframe_height="50vw"
        >
            <button class="pixel_liquid_button interaction_button" @click="open_link('https://andres-dev.itch.io/pixel-liquid-toy')">
                {{ getUI('contents.itch') }}
            </button>
        </Project>
        <Project client:load
            :images="['/showcase_images/exploragrafos_highres.png']"
            accent="#ffffffa0"
            button_class="exploragrafos_button"
            title="Exploragrafos"
            :description="getUI('contents.exploragrafos.desc')"
            run_url="/web_apps/exploragrafos/index.html"
            iframe_height="50vw"
        >
            <GetItOnPlay url="https://play.google.com/store/apps/details?id=exploragrafos.andresdavidcalderon.dev"></GetItOnPlay>
        </Project>
        <Project client:load
            :images="['/showcase_images/randamatch_highres.png']"
            accent="#30541cff"
            button_class="randamatch_button"
            title="Randamatch"
            :description="getUI('contents.randamatch.desc')"
        >
            <button class="randamatch_button interaction_button" @click="open_link('https://andres-dev.itch.io/randamatch')">
                {{ getUI('contents.itch') }}
            </button>
        </Project>
    </section>
</template> 