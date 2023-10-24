<script lang="ts">
	import { authStore } from '$lib/firebase';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import { sendEmailVerification } from 'firebase/auth';

	let mounted = false;
	onMount(() => (mounted = true));

	const user = authStore();

	function redirectIfNeeded() {
		if (mounted) {
			if (!$user) {
				goto('/');
			}
		}
	}

	function verifyEmail() {
		if ($user) {
			sendEmailVerification($user).then(
				() => alert('Email verification sent!'),
				(err) => alert(err.message)
			);
		} else {
			console.error('User appears to not be logged in');
		}
	}

	$: $user, redirectIfNeeded();
</script>

<div id="page-container">
	<Navbar loggedIn={$user ? true : false} />
	<main>
		<h1 style="font-size: 3rem; margin-top: 0; margin-bottom: 0.5em">
			Please verify your email address
		</h1>
		<div class="rest">
			<button class="bluebg" style="width: 100%;" on:click={verifyEmail}
				>Send verification email</button
			>
		</div>
	</main>
</div>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 3rem;
		flex: auto;

		div.rest {
			max-width: 30rem;
			display: flex;
			justify-content: center;
			flex-direction: row;
			gap: 1rem;

			.bluebg {
				background-color: hsl(200, 100%, 50%);
				margin-top: 1rem;
				padding: 0.6rem;
				border-radius: 5px;
				transition: all 0.2s;
				&:hover {
					background-color: hsl(200, 100%, 68%);
				}
			}
		}
	}
</style>
