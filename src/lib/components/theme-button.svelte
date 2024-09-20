<script lang="ts">
	const onClick = () => {
		if (document.documentElement.classList.contains('dark')) {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		} else {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		}
	};
</script>

<button class="button" onclick={onClick}> 🌞/🌙 </button>

<style>
	button {
		padding: 0.3rem;
		color: var(--gray-12);
		background-color: inherit;
		border-radius: 0.5rem;
		box-shadow: 0.1rem 0.1rem 0.1rem var(--gray-11);
		/* border-color: var(--gray-8); */
		border: solid 3px var(--gray-8);
		/* transition:
			transform 0.2s,
			background-color 0.2s,
			box-shadow 0.2s; */
	}

	button:hover {
		transform: scale(1.04);
	}

	:global(:not(.dark)) button:hover {
		box-shadow: 0.2rem 0.2rem 0.1rem var(--gray-11);
	}

	:global(.dark) button {
		box-shadow: none;
		border: solid 3px var(--gray-12);
	}

	:global(.dark) button:hover {
		box-shadow: none;
		background-color: var(--gray-5);
	}
</style>
