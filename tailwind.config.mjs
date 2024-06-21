/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				xxs: '280px',
				xs: '400px',
				xxl: '1700px'
			},
			
         colors: {
            context: 'var(--context-color)'
         }
		},
	},
	plugins: [],
}
