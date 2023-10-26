<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth } from '$lib/firebase';
	import { confirmPasswordReset } from 'firebase/auth';

	export let data;

	let newPassword: string;
	let confirmNewPassword: string;
	let temporaryDisable = false;
	let err = '';

	const { actionCode } = data;

	async function resetPasswordClick() {
		try {
			await confirmPasswordReset(auth, actionCode!, newPassword);
			alert('Your password has been successfully reset. Please log in again');
			await auth.signOut();
			goto('/auth/login');
		} catch (e) {
			err = (<Error>e).message;
		}
	}
</script>

<div id="page-container">
	<main>
		<div class="login-section">
			<h1 style="margin-bottom: 1rem;">Reset your password</h1>
			<p class="error">{err}</p>
			<p>New password</p>
			<input
				bind:value={newPassword}
				placeholder="●●●●●●●●"
				on:input={() => (temporaryDisable = false)}
			/>
			<p>Confirm new password</p>
			<input
				type="password"
				bind:value={confirmNewPassword}
				placeholder="●●●●●●●●"
				on:input={() => (temporaryDisable = false)}
			/>
			<br />
			<button
				class="login-button"
				on:click={resetPasswordClick}
				disabled={!newPassword || newPassword !== confirmNewPassword || temporaryDisable}
				>Reset password</button
			>
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

			p.error {
				color: red;
				margin: 0;
				&:empty {
					margin: 0;
				}
			}

			input {
				background-color: #222;
				padding: 1rem;
				color: white;
				border: 1px solid #444;
				border-radius: 5px;
				font-family: 'Courier New', Courier, monospace;

				&:focus {
					outline: none;
					border: 1px solid #bbb;
				}
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
