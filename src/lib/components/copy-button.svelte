<script lang="ts">
	export let text: string;
	export let onclick = () => {};

	export let button_text = 'copy';

	$: action = () => {
		navigator.clipboard.writeText(text);
		onclick();

		const tmp = button_text;
		button_text = 'copied!';
		setTimeout(() => {
			button_text = tmp;
		}, 1000);
	};
</script>

<button onclick={action} disabled={text === ''}>{button_text}</button>

<style>
	/* button {
		width: 4.5em;
	} */
</style>
