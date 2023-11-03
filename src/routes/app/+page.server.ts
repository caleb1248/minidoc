import { app } from '$lib/server/firebase';
import { redirect } from '@sveltejs/kit';
import { getAuth } from 'firebase-admin/auth';
import type { PageServerLoad } from './$types';

const auth = getAuth(app);

export const load: PageServerLoad = async ({ cookies }) => {
	const idtoken = cookies.get('idToken');
	if (!idtoken) throw redirect(302, '/auth/login');

	try {
		const token = await auth.verifyIdToken(idtoken);
		token.sub;
	} catch (e) {
		//
	}
};
