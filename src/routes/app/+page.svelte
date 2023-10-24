<script lang="ts">
	import { authStore } from '$lib/firebase';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/navbar.svelte';

	let mounted = false;
	onMount(() => (mounted = true));

	const user = authStore();

	function redirectIfNeeded() {
		if (mounted) {
			if (!$user) {
				goto('/');
			} else if (!$user.emailVerified) {
				goto('/auth/verify-email');
			}
		}
	}

	$: $user, redirectIfNeeded();
</script>

<div id="page-container">
	<Navbar loggedIn={$user ? true : false} />
	<main>
		<h1>Hello, world!</h1>
	</main>
</div>
