<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth } from '$lib/firebase';
	import {
		verifyPasswordResetCode,
		confirmPasswordReset,
		checkActionCode,
		applyActionCode
	} from 'firebase/auth';
	import { loadConfigFromFile } from 'vite';
	export let data;

	const { mode, actionCode, continueUrl, lang } = data;

	let error = '';
	let success = false;

	switch (mode) {
		case 'resetPassword':
			verifyPasswordResetCode(auth, actionCode!)
				.then((email) => {
					goto('/auth/action/reset-password');
				})
				.catch((error) => {
					// Invalid or expired action code. Ask user to try to reset the password
					// again.
				});
		case 'recoverEmail':
			break;
		case 'verifyEmail':
			// Display email verification handler and UI.
			handleVerifyEmail(auth, actionCode, continueUrl, lang);
			break;
		default:
		// Error: invalid mode.
	}
</script>

{#if success}
	logic goes here
{:else if error}
	{error}
{:else}
	<h1>Loading...</h1>
{/if}
