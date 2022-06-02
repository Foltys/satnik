module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			spacing: {
				15: '3.75rem',
			},
		},
		colors: {
			black: '#000',
			white: '#fff',
			light: '#F8EBDB',
			blue: '#0A9DBF',
			red: '#EB2F06',
			'brown-600': '#957D5E',
			'brown-500': '#C6B49D',
			yellow: '#E9D520',
			'gray-900': '#1A1A1A',
		},
		fontFamily: {
			sans: ['Inter', 'ui-sans-serif', 'system-ui'],
			serif: ['ui-serif', 'Georgia'],
			mono: ['ui-monospace', 'SFMono-Regular'],
		},
		fontSize: {
			tiny: '0.8125rem',
			sm: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
		},
	},
	plugins: [],
}
