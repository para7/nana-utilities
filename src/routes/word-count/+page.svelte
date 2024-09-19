<script lang="ts">
	import { TextCount } from './TextCount';

	let text = '';
	let includeBreakLine = true;

	$: counts = TextCount(text, { includeBreakLine });
</script>

<h1>Words Count</h1>

<textarea placeholder="☆ここにテキストを入力☆" bind:value={text}></textarea>

<div class="editor">
	<label>
		<input type="checkbox" bind:checked={includeBreakLine} /> 改行をカウントに含める
	</label>
</div>

<!-- {text.length} -->

<p>文字数: {counts.charCount}</p>
<p>全角文字数: {counts.fullWidthCount}</p>
<p>半角文字数: {counts.halfWidthCount}</p>
<p>UTF-8 byte size: {counts.byteCount}</p>

<style>
	textarea {
		height: 50vh;
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
</style>
