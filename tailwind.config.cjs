/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				gray: {
					"bg": "#090c0e",
					900: "#0d0d0d",
					800: "#141414",
					700: "#1a1a1a",
					600: "#313131",
					500: "#484848",
					400: "#5f5f5f",
					300: "#767676",
					200: "#a3a3a3",
					100: "#d1d1d1",
					50: "#e8e8e8"
				},
				accent:{
					100: "#00aaff",
					200: "#0087ff",
					300: "#0076ff",
					400: "#0054ff"
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
