<script lang="ts">
	export let type: 'text' | 'password' = 'text';
	export let placeholder = '';
	export let value: string;
</script>

<input
	{type}
	{value}
	placeholder={placeholder ? placeholder : type == 'password' ? '●●●●●●●●' : ''}
	on:input={(e) => (value = e.currentTarget.value)}
/>

<style>
	input {
		background-color: #222;
		padding: 1rem;
		color: white;
		border: 1px solid #444;
		border-radius: 5px;
		font-family: 'Courier New', Courier, monospace;
	}

	input:focus {
		outline: none;
		border: 1px solid #bbb;
	}
</style>
