<script lang="ts">
	let inputJson = '';
	let indentWidth = 2;
	let feedbackMessage = '';

	$: result = ((): { text: string; copyable: boolean } => {
		if (inputJson === '') {
			return { copyable: false, text: '' };
		}

		try {
			const formatted = JSON.stringify(JSON.parse(inputJson), null, indentWidth);
			return { copyable: true, text: formatted };
		} catch (e) {
			return { copyable: false, text: 'JSON形式が正しくありません' + String(e) };
		}
	})();

	const copyText = () => {
		if (!result.copyable) {
			return;
		}
		feedbackMessage = 'コピーしました！';

		setTimeout(() => {
			feedbackMessage = '';
		}, 500);
		navigator.clipboard.writeText(result.text);
	};
</script>

<svelte:head>
	<title>JSONフォーマット</title>
</svelte:head>

<h1>JSON Format</h1>

<div class="editor">
	<!-- <label>
		インデント深さ
		<input type="number" bind:value={indentWidth} />
	</label> -->
	<!-- 2,4,8,tabを選択できるチェックボックス -->
	<label>
		<input type="radio" name="indentWidth" value={2} bind:group={indentWidth} />
		2
	</label>
	<label>
		<input type="radio" name="indentWidth" value={4} bind:group={indentWidth} />
		4
	</label>
	<label>
		<input type="radio" name="indentWidth" value={8} bind:group={indentWidth} />
		8
	</label>
	<label>
		<input type="radio" name="indentWidth" value={'\t'} bind:group={indentWidth} />
		tab
	</label>
</div>

<textarea placeholder="☆ここにJSONを入力☆" bind:value={inputJson} rows={6}></textarea>

<div>
	<button onclick={copyText} disabled={!result.copyable}>
		フォーマットされたJSONをコピーする
	</button>
	<span>{feedbackMessage}</span>
</div>

<div class="result">
	<pre>{result.text}</pre>
</div>

<!-- {text.length} -->

<style>
	textarea {
		width: 100%;
		background-color: var(--gray-2);
		color: var(--gray-12);
	}

	.editor {
		background-color: var(--gray-5);
		padding: 1rem;
		margin: 0.5rem;
		/* transition: var(--theme-transition-colors); */
	}

	.result {
		background-color: var(--gray-4);
		/* transition: var(--theme-transition-colors); */
	}

	pre {
		white-space: pre-wrap;
	}

	input {
		width: 5em;
	}
</style>
