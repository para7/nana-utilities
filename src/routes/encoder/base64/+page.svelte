<script lang="ts">
	import CopyButton from '$lib/components/copy-button.svelte';
	import { Base64ToString, StringToBase64 } from './convert';
	let inputData = '';
	$: encoded = StringToBase64(inputData);
	$: decoded = Base64ToString(inputData);
</script>

<svelte:head>
	<title>Base64 Encoder/Decoder</title>
</svelte:head>

<h2>Base64 Encoder/Decoder</h2>

<textarea placeholder="☆ここにURLを入力☆" bind:value={inputData} rows={4}></textarea>

<div class="margin"></div>

<div class="result">
	<div class="line">
		<span>【encode】</span>
		<CopyButton text={encoded} />
		{encoded}
	</div>
	<div class="line">
		<span>【decode】</span>
		<CopyButton disabled={decoded.hasError} text={decoded.text} />
		{decoded.text}
	</div>
	<div class="margin"></div>
</div>

<div class="margin"></div>

<!-- {text.length} -->

<style>
	textarea {
		width: 100%;
		background-color: var(--gray-2);
		color: var(--gray-12);
	}

	.result {
		background-color: var(--gray-4);
		/* どんな長さでも改行せず1行に収める */
		white-space: nowrap;
		overflow-x: auto;
		gap: 3rem;
		/* transition: var(--theme-transition-colors); */
	}

	.result .line {
		margin-bottom: 0.2em;
	}

	.margin {
		margin-bottom: 1rem;
	}
</style>
