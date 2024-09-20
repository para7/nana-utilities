<script lang="ts">
	import './theme.css';

	import ThemeButton from '$lib/components/theme-button.svelte';
	import { PAGES } from '$lib/ROUTES';
	import { onNavigate } from '$app/navigation';

	// https://svelte.dev/blog/view-transitions
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div>
	<div class="flex header">
		<h1>
			<a href="/"> UTILITIES </a>
			<span> @para7</span>
		</h1>

		<a class="toplink" href={PAGES['/about']}> about</a>
		<a class="toplink" href={PAGES['/']}>top</a>

		<ThemeButton />
	</div>

	<div class="container">
		<slot></slot>
	</div>
</div>

<style>
	.flex {
		display: flex;
		align-items: end;
		gap: 1rem;
		/* 下部分にだけ枠線を付ける */
		border-bottom: 1px solid var(--gray-12);
		padding-bottom: 1rem;
	}

	span {
		font-size: 1rem;
	}

	h1 {
		font-style: italic;
		font-size: 3rem;
		flex: 1;
		font-weight: bold;
	}

	/* aタグに囲まれた h1 タグの色が変わるのを無効化する */
	h1 a {
		color: inherit;
		text-decoration: none;
	}

	.toplink {
		font-size: 1.25rem;
	}

	.container {
		margin: 1rem;
	}

	/* https://svelte.dev/blog/view-transitions */
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}

	.header {
		display: flex;
		justify-content: space-between;
		view-transition-name: header;
	}
</style>
