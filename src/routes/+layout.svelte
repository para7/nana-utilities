<script lang="ts">
	import './theme.css';

	import ThemeButton from '$lib/components/theme-button.svelte';
</script>

<div>
	<div class="flex">
		<h1>
			<a href="/"> UTILITIES </a>
			<span> @para7</span>
		</h1>

		<a class="toplink" href="/about"> about</a>
		<a class="toplink" href="/">top</a>

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
</style>
