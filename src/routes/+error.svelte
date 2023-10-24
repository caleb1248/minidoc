<script>
	import { page } from '$app/stores';
	import Navbar from '$lib/components/navbar.svelte';
	import { authStore } from '$lib/firebase';
	const user = authStore();
</script>

<div id="page-container">
	<Navbar loggedIn={$user ? true : false} />
	<main>
		<h1 style="font-size: 3.5rem;">{$page.status}: {$page.error?.message}</h1>
	</main>
</div>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 3rem;
		flex: auto;
	}
</style>
