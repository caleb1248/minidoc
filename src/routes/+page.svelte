<script>
	import Navbar from '$lib/components/navbar.svelte';
	import { authStore } from '$lib/firebase';
	const user = authStore();
</script>

<div id="page-container">
	<Navbar loggedIn={$user ? true : false} />
	<main>
		<h1 style="font-size: 4em; margin-top: 0; margin-bottom: 0.5em">Minidoc</h1>
		<div class="rest">
			<p>
				kinda like google docs, but has a faster load time, and made for short and simple note-like
				things.
			</p>
			<div class="links">
				<a href="/auth/signup" class="bluebg" style="width: 100%;">Start writing stuff</a>
			</div>
		</div>
	</main>
</div>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 3rem;
		flex: auto;

		div.rest {
			max-width: 30rem;

			div.links {
				display: flex;
				justify-content: center;
				flex-direction: row;
				gap: 1rem;

				a {
					text-align: center;

					&.bluebg {
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
		}
	}

	p {
		font-size: 1.25rem;
	}
</style>
