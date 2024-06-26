/** @type {import("tailwindcss").Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			typography(theme) {
				return {
					DEFAULT: {
						css: {
							'code::before': {
								content: 'none' // don’t generate the pseudo-element
								//                content: '""', // this is an alternative: generate pseudo element using an empty string
							},
							'code::after': {
								content: 'none'
							},
							code: {
								color: theme('colors.zinc.300'),
								backgroundColor: theme('colors.zinc.800'),
								borderRadius: theme('borderRadius.DEFAULT'),
								paddingLeft: theme('spacing.1'),
								paddingRight: theme('spacing.1'),
								paddingTop: theme('spacing.1'),
								paddingBottom: theme('spacing.1')
							},
							'.prose :where(pre):not(:where([class~="not-prose"] *))': {
								color: theme('colors.zinc.300'),
								backgroundColor: theme('colors.zinc.800'),
								borderRadius: theme('borderRadius.DEFAULT'),
								paddingLeft: theme('spacing.1'),
								paddingRight: theme('spacing.1'),
								paddingTop: theme('spacing.1'),
								paddingBottom: theme('spacing.1')
							},
							'.prose a': {
								color: theme('colors.blue.400')
							},
							'.prose a:hover': {
								color: theme('colors.blue.200')
							},
							'blockquote p:first-of-type::before': { content: 'none' },
							'blockquote p:first-of-type::after': { content: 'none' }
						}
					}
				};
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
