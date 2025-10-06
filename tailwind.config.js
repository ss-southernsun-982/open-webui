import typography from '@tailwindcss/typography';
import containerQuries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				gray: {
					50: '#006E43', // dùng làm màu nền sáng
					100: '#FFEF99', // secondary nhạt
					200: '#FFEF99',
					300: '#006E43', // màu secondary chính
					400: '#006E43',
					500: '#1F1F00',
					600: '#E6BA00',
					700: '#1F1F00',
					800: '#0D0D0D',
					850: '#262626',
					900: '#171717',
					950: '#0D0D0D'
				}
			},
			typography: {
				DEFAULT: {
					css: {
						pre: false,
						code: false,
						'pre code': false,
						'code::before': false,
						'code::after': false
					}
				}
			},
			padding: {
				'safe-bottom': 'env(safe-area-inset-bottom)'
			}
		}
	},
	plugins: [typography, containerQuries]
};
