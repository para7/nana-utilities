<script lang="ts">
	import { ImageConvert, ImageToCanvas } from '$lib/image-convert.client';
	import type { ClipboardEventHandler } from 'svelte/elements';

	let stateText = $state('ペーストされたデータがありません。');
	let loadedImage: HTMLImageElement | null = $state(null);
	let quality = $state(1.0);
	let fileName = $state('');
	let fileBasename = $state('');

	let images = $derived(
		loadedImage === null
			? null
			: {
					pngFileName: `${fileBasename}.png`,
					jpegFileName: `${fileBasename}-${quality.toFixed(1)}.jpg`,
					webpFileName: `${fileBasename}-${quality.toFixed(1)}.webp`,
					jpegSrc: ImageConvert(loadedImage, 'image/jpeg', quality),
					pngSrc: ImageConvert(loadedImage, 'image/png', quality),
					webpSrc: ImageConvert(loadedImage, 'image/webp', quality)
				}
	);

	const onpaste: ClipboardEventHandler<Document> = function (pasteEvent) {
		// 前の画像を破棄
		if (loadedImage?.src) {
			URL.revokeObjectURL(loadedImage?.src);
		}
		loadedImage = null;

		const item = pasteEvent.clipboardData?.items[0];

		if (item === undefined) {
			return;
		}

		if (item.type.indexOf('image') !== 0) {
			stateText = '画像データとして認識できませんでした。';
			return;
		}
		// 画像のブロブを取得します
		const blob = item.getAsFile();

		if (blob === null) {
			stateText = 'データ読み取りに失敗しました: blob is null';
			return;
		}

		const tmpImg = new Image();
		const url = URL.createObjectURL(blob);
		tmpImg.onload = () => {
			fileName = blob.name;
			fileBasename = fileName.split('.').slice(0, -1).join('.');
			loadedImage = tmpImg;
		};
		tmpImg.src = url;
		stateText = '読み込み中…';
	};
</script>

<!-- pasteイベントを拾う -->
<svelte:document on:paste={onpaste} />

<svelte:head>
	<title>画像形式変換</title>
</svelte:head>

<div class="container">
	<p>画像をペーストしてください。(直接 ctrl + v で認識します)</p>

	<!-- 0.1から1.0まで、0.1単位で指定できるinput range のスライダー -->

	{#if loadedImage}
		<div class="info">
			<p>【元データ】</p>
			<p>{fileName}</p>
			<a download={fileName} href={loadedImage.src}>
				{loadedImage.src}
			</a>
			<p>
				※ブラウザAPIの仕様上サイトのURLが表示されますが、実態は端末側にあります。サーバーからは参照できません。
			</p>
		</div>

		<img src={loadedImage.src} alt="paste data" />

		<!-- fileBasename を input で入力できるようにする -->

		<h2>Config</h2>
		<div class="editor">
			<div>【ファイル名】</div>
			<input type="text" bind:value={fileBasename} />
			<div>【Quality】 (数字が大きいほど高品質, サイズ大)</div>
			<div class="flex-row">
				<input type="range" min="0.1" max="1.0" step="0.1" bind:value={quality} />
				<div>{quality.toFixed(1)}</div>
			</div>
		</div>

		<h2>Download Links</h2>
		<div class="links">
			<p>
				<a download={`${fileBasename}.png`} href={images?.pngSrc}>Download PNG image </a>
				({images?.pngFileName})
			</p>
			<p>
				<a download={`${fileBasename}-${quality.toFixed(1)}.jpg`} href={images?.jpegSrc}
					>Download JPEG image
				</a>
				({images?.jpegFileName})
			</p>
			<p>
				<a download={`${fileBasename}-${quality.toFixed(1)}.webp`} href={images?.webpSrc}
					>Download WebP image
				</a>
				({images?.webpFileName})
			</p>
		</div>
	{:else}
		<p class="state">{stateText}</p>

		<div class="editor">
			<p>
				画像データをペーストすると、その画像をJPEG、PNG、WebP形式に変換してダウンロードできます。
			</p>
			<p>変換はブラウザの canvas のみで実施され、サーバーに送信されることはありません。</p>
			<p>動作確認は Windows 上の Google Chrome, Firefox でのみ行っています。</p>
			<p>
				<a href="https://developer.mozilla.org/ja/docs/Web/API/HTMLCanvasElement/toDataURL"
					>https://developer.mozilla.org/ja/docs/Web/API/HTMLCanvasElement/toDataURL</a
				>
			</p>
		</div>
		<div>TODO: ファイルアップロードにも対応させる</div>
	{/if}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	img {
		max-height: 200px;
		/* アスペクト比を元の画像のままで固定する */
		object-fit: contain;
	}

	.editor {
		background-color: var(--gray-5);
		padding: 1rem;
		margin: 1rem;
		/* transition: var(--theme-transition-colors); */
	}

	.state {
		margin: 2rem;
	}

	.links {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin: 0.5rem;
	}

	.flex-row {
		display: flex;
		flex-direction: row;
	}

	.info {
		color: var(--gray-11);
		background-color: var(--gray-3);
		padding: 1rem;
	}
</style>
