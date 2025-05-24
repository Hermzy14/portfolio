<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { Tween } from 'svelte/motion';

	// Target positions
	let targetX: number = $state(0);
	let targetY: number = $state(0);

	// Tween positions
	const options = { duration: 400, easing: cubicOut };
	const xTween = new Tween(typeof window !== 'undefined' ? window.innerWidth / 2 : 0, options);
	const yTween = new Tween(typeof window !== 'undefined' ? window.innerHeight / 2 : 0, options);

	// Derived values for current positions
	let currentX: number = $derived(xTween.current);
	let currentY: number = $derived(yTween.current);

	// Default colors
	const backgroundColor: string = 'var(--background-color)';
	const color1: string = 'var(--primary-color)';

	$effect(() => {
		// Initialize to center if window is defined
		if (typeof window !== 'undefined') {
			targetX = window.innerWidth / 2;
			targetY = window.innerHeight / 2;
		}
		/**
		 * Handles mouse movement
		 */
		function handleMouseMove(event: MouseEvent) {
			targetX = event.clientX;
			targetY = event.clientY;
		}

		/**
		 * Handles touch movement
		 */
		function handleTouchMove(event: TouchEvent) {
			if (event.touches.length > 0) {
				targetX = event.touches[0].clientX;
				targetY = event.touches[0].clientY;
			}
		}

		// Event listeners for mouse and touch events
		if (typeof window !== 'undefined') {
			window.addEventListener('mousemove', handleMouseMove);
			window.addEventListener('touchmove', handleTouchMove);
		}

		// Cleanup event listeners on component destroy
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('touchmove', handleTouchMove);
		};
	});

	// Update tween targets on mouse/touch move
	$effect(() => {
		xTween.target = targetX;
		yTween.target = targetY;
	});
</script>

<div
	class="interactive-bg"
	style="--x: {currentX}px; --y: {currentY}px; --color1: {color1};  --defaultColor: {backgroundColor};"
></div>

<style>
	.interactive-bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -1;
		background-color: var(--background-color);
		background-image: radial-gradient(
			circle at var(--x) var(--y),
			var(--color1) 0%,
			transparent 40%
		);
		overflow: hidden;
	}
</style>
