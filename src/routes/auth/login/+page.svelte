<script lang="ts">
	import { goto } from '$app/navigation';
	import Navbar from '$lib/components/navbar.svelte';
	import { auth, authStore } from '$lib/firebase';
	import { signInWithEmailAndPassword } from 'firebase/auth';

	let email: string;
	let password: string;
	let err: string = '';
	let temporaryDisable = false;

	let user = authStore();

	$: if ($user) goto('/app');

	async function login() {
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (e) {
			err = (<{ message: string }>e).message;
		}
	}
</script>

<div id="page-container">
	<Navbar loggedIn={false} />
	<main>
		<div class="login-section">
			<h1 style="margin-bottom: 1rem;">Log in</h1>
			<p class="error">{err}</p>
			<p>Email</p>
			<input
				bind:value={email}
				placeholder="email@example.com"
				on:input={() => (temporaryDisable = false)}
			/>
			<p>Password</p>
			<input
				type="password"
				bind:value={password}
				placeholder="●●●●●●●●"
				on:input={() => (temporaryDisable = false)}
			/>
			<br />
			<button
				class="login-button"
				on:click={login}
				disabled={!email || !password || temporaryDisable}>Login</button
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
