<script lang="ts">
	import { goto } from '$app/navigation';
	import Navbar from '$lib/components/navbar.svelte';
	import Input from '$lib/components/input.svelte';
	import { auth, authStore } from '$lib/firebase';
	import { createUserWithEmailAndPassword } from 'firebase/auth';

	let email: string;
	let password: string;
	let passwordConfirm: string;
	let err: string = '';
	let temporaryDisable = false;

	$: (email, password, passwordConfirm), (temporaryDisable = false);

	let user = authStore();

	$: if ($user) goto('/app');

	async function signUp() {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (e) {
			err = (<{ message: string }>e).message;
		}
	}
</script>

<div id="page-container">
	<Navbar loggedIn={false} />
	<main>
		<div class="signup-section">
			<h1 style="margin-bottom: 1rem;">Sign up</h1>
			<p class="error">{err}</p>
			<p>Email</p>
			<Input bind:value={email} />
			<p>Password</p>
			<Input type="password" bind:value={password} />
			<p>Confirm password</p>
			<Input type="password" bind:value={passwordConfirm} />
			<br />
			<button
				class="signup-button"
				on:click={signUp}
				disabled={!email || !password || password !== passwordConfirm || temporaryDisable}
				>Sign up</button
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

		.signup-section {
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

			.signup-button {
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
