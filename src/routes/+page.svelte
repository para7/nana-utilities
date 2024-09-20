<script>
	import { PAGES } from '$lib/ROUTES';
</script>

<!-- 箇条書きでリンクを並べる -->
<ul>
	<li><a href={PAGES['/image-converter']}>画像形式変換</a></li>
	<li><a href={PAGES['/word-count']}>文字数カウント</a></li>
	<li><a href={PAGES['/formatter/json']}>JSONフォーマット</a></li>
	<li><div>n進数変換</div></li>
	<li><a href={PAGES['/encoder/url']}>URLエンコード・デコード</a></li>
	<li><div>base64 エンコード・デコード</div></li>
</ul>

<style>
	a,
	a:visited {
		color: var(--blue-11);
	}
</style>
