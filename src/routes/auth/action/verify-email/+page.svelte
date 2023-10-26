<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth } from '$lib/firebase';
	import { applyActionCode } from 'firebase/auth';
	import { onMount } from 'svelte';

	export let data;

	let message = '';
	let success = false;

	const { actionCode } = data;

	async function verifyEmail() {
		try {
			await applyActionCode(auth, actionCode!);
			success = true;
			message = 'Email verification successful.';
			await auth.signOut();
			goto('/auth/login');
		} catch (e) {
			message = (<Error>e).message;
		}
	}

	onMount(() => verifyEmail());
</script>

<div id="page-container">
	<main>
		<div class="login-section">
			<h1 style="margin-bottom: 1rem;">{message}</h1>
			{#if success}
				<button class="login-button">Back to login</button>
			{/if}
		</div>
	</main>
</div>

<style lang="scss">
	main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.login-section {
			width: 384px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			* {
				width: 100%;
			}

			.login-button {
				background-color: hsl(200, 100%, 50%);
				margin-top: 1rem;
				padding: 0.75rem;
				border-radius: 5px;
				transition: all 0.2s;
				border: none;
				color: inherit;
				font: inherit;

				&:hover {
					background-color: hsl(200, 100%, 68%);
				}
				&:disabled {
					background-color: hsl(0, 0%, 20%);
					color: hsl(0, 0%, 50%);
				}
			}
		}
	}
</style>
