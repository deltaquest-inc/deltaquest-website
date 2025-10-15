const { createTailwindConfig } = require('@deltaquest/shared-config')

/** @type {import('tailwindcss').Config} */
module.exports = createTailwindConfig({
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/shared-ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
})

