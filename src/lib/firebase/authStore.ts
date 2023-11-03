import { writable } from 'svelte/store';
import { auth } from './app';
import { onAuthStateChanged } from 'firebase/auth';

export default function authStore() {
	return writable(auth.currentUser, (set) => {
		const unsubscribe = onAuthStateChanged(auth, (newUser) => {
			if (newUser && 'window' in globalThis) localStorage.signedIn = true;
			set(newUser);
		});
		return () => unsubscribe();
	});
}
