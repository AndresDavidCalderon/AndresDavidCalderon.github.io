import { defineConfig } from 'vite'
import vue from '@astrojs/vue';
export default defineConfig({
    integrations: [vue()],
    site : 'https://andresdavidcalderon.github.io/'
})