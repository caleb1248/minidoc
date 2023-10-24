<script lang="ts">
	import { auth } from '$lib/firebase';
	export let loggedIn: boolean;
</script>

<nav class="top-navbar">
	<span class="appname">Minidoc</span>
	<div class="right">
		{#if loggedIn}
			<a href="/home">My docs</a>
			<button on:click={() => auth.signOut()}>Sign out</button>
		{:else}
			<a href="/auth/login" style="margin-right: 1rem">Login</a>
			<a href="/auth/signup" class="bluebg">Sign up</a>
		{/if}
	</div>
</nav>

<style lang="scss">
	nav {
		padding: 1.5rem;
		display: flex;
		justify-content: space-between;
		background-color: #222;

		.appname {
			font-size: 1.2rem;
		}
		div.right {
			* {
				padding-right: 1rem;

				&:last-child {
					padding-right: 2rem;
				}
			}

			a.bluebg {
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
