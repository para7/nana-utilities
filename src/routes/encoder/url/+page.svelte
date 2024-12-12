<script lang="ts">
	import CopyButton from '$lib/components/copy-button.svelte';
	// let inputData = 'https://mozilla.org/?x=шеллы';
	let inputData = '';

	$: encoded = encodeURI(inputData);
	$: decoded = decodeURI(inputData);
	$: encodedComp = encodeURIComponent(inputData);
	$: decodedComp = decodeURIComponent(inputData);
</script>

<svelte:head>
	<title>URL Encoder/Decoder</title>
</svelte:head>

<h2>URL Encoder/Decoder</h2>

<textarea placeholder="☆ここにURLを入力☆" bind:value={inputData} rows={6}></textarea>

<div class="margin"></div>

<div class="result">
	<div class="line">
		<span>【encode】</span>
		<CopyButton text={encoded} />
		{encoded}
	</div>
	<div class="line">
		<span>【decode】</span>
		<CopyButton text={decoded} />
		{decoded}
	</div>
	<div class="margin"></div>
	<div class="line">
		<span>【encodeComponent】</span>
		<CopyButton text={encodedComp} />
		{encodedComp}
	</div>
	<div class="line">
		<span>【decodeComponent】</span>
		<CopyButton text={decodedComp} />
		{decodedComp}
	</div>
</div>

<div class="margin"></div>

<div class="explain">
	<h3>各項目の意味</h3>

	<h4>URL Encode/Decode</h4>
	<p>http から始まる, 完全な形式のURLを正しく変換する</p>

	<h4>URL Component Encode/Decode</h4>
	<p>部分的な箇所をURLエンコード形式にしたいときに利用する</p>
</div>

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

	.explain {
		margin-top: 3em;
	}

	.explain h4 {
		margin-top: 0.5em;
	}
</style>
