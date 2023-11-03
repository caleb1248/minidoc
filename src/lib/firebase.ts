import authStore from './firebase/authStore';
import { auth } from './firebase/app';

/**
 * Signs out the user and update the signedIn state
 */
function signOut() {
	localStorage.signedIn = null;
	auth.signOut();
}

export { authStore, auth, signOut };
