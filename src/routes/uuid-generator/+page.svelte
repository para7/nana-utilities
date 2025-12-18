<script lang="ts">
	import CopyButton from '$lib/components/copy-button.svelte';
	import { generateUUID, generateMultipleUUIDs, isValidUUID } from './generator';

	let singleUuid = generateUUID();
	let multipleCount = 5;
	let multipleUuids: string[] = generateMultipleUUIDs(multipleCount);
	let validationInput = '';
	$: isValid = validationInput ? isValidUUID(validationInput) : null;

	const regenerateSingle = () => {
		singleUuid = generateUUID();
	};

	const regenerateMultiple = () => {
		multipleUuids = generateMultipleUUIDs(multipleCount);
	};

	const handleCountChange = () => {
		// Ensure count is between 1 and 100
		if (multipleCount < 1) multipleCount = 1;
		if (multipleCount > 100) multipleCount = 100;
		regenerateMultiple();
	};
</script>

<svelte:head>
	<title>UUID Generator</title>
</svelte:head>

<h2>UUID Generator</h2>

<div class="section">
	<h3>Single UUID</h3>
	<div class="uuid-display">
		<span class="uuid-text">{singleUuid}</span>
		<div class="button-group">
			<CopyButton text={singleUuid} />
			<button onclick={regenerateSingle} class="generate-btn">Generate New</button>
		</div>
	</div>
</div>

<div class="margin"></div>

<div class="section">
	<h3>Multiple UUIDs</h3>
	<div class="count-control">
		<label for="count">Count:</label>
		<input
			type="number"
			id="count"
			bind:value={multipleCount}
			onchange={handleCountChange}
			min="1"
			max="100"
		/>
		<button onclick={regenerateMultiple} class="generate-btn">Generate</button>
	</div>
	<div class="uuid-list">
		{#each multipleUuids as uuid, index}
			<div class="uuid-item">
				<span class="uuid-index">{index + 1}.</span>
				<span class="uuid-text">{uuid}</span>
				<CopyButton text={uuid} />
			</div>
		{/each}
	</div>
</div>

<div class="margin"></div>

<div class="section">
	<h3>UUID Validator</h3>
	<input
		type="text"
		placeholder="Paste UUID to validate"
		bind:value={validationInput}
		class="validation-input"
	/>
	{#if isValid !== null}
		<div class="validation-result" class:valid={isValid} class:invalid={!isValid}>
			{isValid ? '✓ Valid UUID' : '✗ Invalid UUID'}
		</div>
	{/if}
</div>

<style>
	.section {
		margin-bottom: 2rem;
	}

	h3 {
		margin-bottom: 1rem;
		color: var(--gray-12);
	}

	.uuid-display {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		background-color: var(--gray-2);
		border-radius: 0.5rem;
		flex-wrap: wrap;
	}

	.uuid-text {
		font-family: monospace;
		font-size: 1.1rem;
		color: var(--gray-12);
		word-break: break-all;
		flex: 1;
		min-width: 200px;
	}

	.button-group {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.generate-btn {
		padding: 0.5rem 1rem;
		background-color: var(--gray-6);
		color: var(--gray-12);
		border: 1px solid var(--gray-7);
		border-radius: 0.25rem;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	.generate-btn:hover {
		background-color: var(--gray-7);
	}

	.count-control {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.count-control label {
		color: var(--gray-12);
	}

	.count-control input {
		width: 80px;
		padding: 0.5rem;
		background-color: var(--gray-2);
		color: var(--gray-12);
		border: 1px solid var(--gray-7);
		border-radius: 0.25rem;
	}

	.uuid-list {
		background-color: var(--gray-2);
		border-radius: 0.5rem;
		padding: 1rem;
		max-height: 400px;
		overflow-y: auto;
	}

	.uuid-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem;
		margin-bottom: 0.5rem;
		background-color: var(--gray-3);
		border-radius: 0.25rem;
	}

	.uuid-item:last-child {
		margin-bottom: 0;
	}

	.uuid-index {
		color: var(--gray-11);
		min-width: 30px;
	}

	.validation-input {
		width: 100%;
		padding: 0.75rem;
		background-color: var(--gray-2);
		color: var(--gray-12);
		border: 1px solid var(--gray-7);
		border-radius: 0.25rem;
		font-family: monospace;
		margin-bottom: 0.5rem;
	}

	.validation-result {
		padding: 0.75rem;
		border-radius: 0.25rem;
		font-weight: 600;
	}

	.validation-result.valid {
		background-color: #2d5016;
		color: #86efac;
	}

	.validation-result.invalid {
		background-color: #502016;
		color: #fca5a5;
	}

	.margin {
		margin-bottom: 1rem;
	}
</style>
