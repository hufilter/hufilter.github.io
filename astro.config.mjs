import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import { url } from './src/constants';

// https://astro.build/config
export default defineConfig({
  site: url,
  integrations: [tailwind()]
});
