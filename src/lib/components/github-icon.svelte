<script>
	import img from '$lib/assets/images/github-mark.png';
</script>

<img class="github-logo" alt="github link" src={img} />

<style>
	img {
		height: 2rem;
	}

	:global(.dark .github-logo) {
		filter: invert(1);
	}
</style>
