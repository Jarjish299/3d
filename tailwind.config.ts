/**
 * Tailwind CSS Configuration File
 *
 * You can customize your Tailwind setup by editing this file.
 * For more information: https://tailwindcss.com/docs/configuration
 */

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;