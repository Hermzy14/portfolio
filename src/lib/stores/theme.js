import { browser } from '$app/environment';
import { writable } from 'svelte/store';

/**
 * Creates a theme. Defaults to 'dark', but checks localStorage and system preference.
 */
function createTheme() {
	const defaultTheme = 'dark';
	let initialTheme = defaultTheme;

	if (browser) {
		// Check localStorage for a saved theme
		const stored = localStorage.getItem('theme');
		if (stored) {
			initialTheme = stored;
		} else {
			// Check system preference
			const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light';
			initialTheme = systemPreference;
		}
	}

	// Create a writable store with the initial theme
	const { subscribe, set, update } = writable(initialTheme);

	// Return the store and a method to update the theme
	return {
		subscribe,
		// Toggle between 'dark' and 'light' themes
		toggle: () => {
			update((theme) => {
				const newTheme = theme === 'dark' ? 'light' : 'dark';
				if (browser) {
					localStorage.setItem('theme', newTheme);
					document.documentElement.setAttribute('data-theme', newTheme);
				}
				return newTheme;
			});
		},
		// Method to set a specific theme
		set: (/** @type {string} */ theme) => {
			if (browser) {
				localStorage.setItem('theme', theme);
				document.documentElement.setAttribute('data-theme', theme);
			}
			set(theme);
		}
	};
}

// Create the theme store
export const theme = createTheme();
