<script lang="ts">
</script>

<div class="container">
	<h2>モチベーション</h2>
	<div class="block">
		<p>
			あるとちょっと便利なwebツールってありますよね。
			文字数をカウントしたり、画像の形式を変換したり。
		</p>
		<p>
			インターネットで検索をかければ大抵欲しいツールは見つかりますが、ソースが公開されていなかったり、サーバーにデータを送っていたり。セキュリティ面の不安から利用を躊躇する場合があります。
		</p>
		<p>安心して使える自前のツールセットが欲しいと思ったのが、このサイトのモチベーションです。</p>
	</div>

	<h2>理念</h2>
	<ul>
		<li>ブラウザオンリーで動作し、データを外部送信しない。</li>
		<li>
			極力外部ライブラリの利用を避け、ブラウザネイティブの動作で実現する。外部ライブラリに依存している場合は明示する。
		</li>
		<li>オープンソース TODO: githubへのリンクを張る</li>
	</ul>

	<h2>問い合わせ先</h2>
	<div class="block">
		<p>
			機能追加のリクエストや不具合報告ありましたら、今は一旦 github の issue へお願いいたします。
		</p>
		<p>Pull Requestも歓迎いたします。</p>
	</div>

	<h2>サイト構成技術</h2>

	<table>
		<thead>
			<tr>
				<th>Category</th>
				<th>Details</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>frontend</td>
				<td>sveltekit ( static adapter )</td>
			</tr>
			<tr>
				<td>styling</td>
				<td>modern-css-reset, radix-colors</td>
			</tr>
			<tr>
				<td>hosting</td>
				<td>cloudflare</td>
			</tr>
		</tbody>
	</table>
</div>

<style>
	p {
		padding-bottom: 0.5em;
	}

	.block {
		padding: 1em;
	}
</style>
