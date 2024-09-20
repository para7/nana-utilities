<script lang="ts">
	let inputData = '';

	const copyText = (text: string) => () => {
		// if (!result.copyable) {
		// 	return;
		// }
		// feedbackMessage = 'コピーしました！';

		// setTimeout(() => {
		// 	feedbackMessage = '';
		// }, 500);
		navigator.clipboard.writeText(text);
	};

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
<!-- 
<div>
	<button onclick={copyText} disabled={!result.copyable}>
		フォーマットされたJSONをコピーする
	</button>
	<span>{feedbackMessage}</span>
</div> -->

<div class="margin"></div>

<div class="result">
	<div>
		<span>【encode】</span>
		<button onclick={copyText(encoded)}>copy</button>
		{encoded}
	</div>
	<div>
		<span>【decode】</span>
		<button onclick={copyText(decoded)}>copy</button>
		{decoded}
	</div>
	<div class="margin"></div>
	<div>
		<span>【encodeComponent】</span>
		<button onclick={copyText(encodedComp)}>copy</button>
		{encodedComp}
	</div>
	<div>
		<span>【decodeComponent】</span>
		<button onclick={copyText(decodedComp)}>copy</button>
		{decodedComp}
	</div>
</div>

<div class="margin"></div>

<h3>各項目の意味</h3>

<h4>URL Encode/Decode</h4>
<p>http から始まる, 完全な形式のURLを正しく変換する</p>

<h4>URL Component Encode/Decode</h4>
<p>部分的な箇所をURLエンコード形式にしたいときに利用する</p>

<!-- {text.length} -->

<style>
	textarea {
		width: 100%;
		background-color: var(--gray-2);
		color: var(--gray-12);
	}

	.result {
		background-color: var(--gray-4);
		/* transition: var(--theme-transition-colors); */
	}

	.margin {
		margin-bottom: 1rem;
	}
</style>
