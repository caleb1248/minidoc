<script lang="ts">
	import { authStore } from '$lib/firebase';
	import { goto } from '$app/navigation';
	import Navbar from '$lib/components/navbar.svelte';
	import { browser } from '$app/environment';

	const user = authStore();

	function redirectIfNeeded() {
		if (browser) {
			if (!$user) {
				setTimeout(() => {
					if (!$user) goto('/auth/login');
				}, 1200);
			} else if (!$user.emailVerified) {
				goto('/auth/verify-email');
			}
		}
	}

	$: $user, redirectIfNeeded();
</script>

<div id="page-container">
	<Navbar loggedIn />
	<main>
		<h1>Hello, world!</h1>
	</main>
</div>
