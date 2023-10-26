import { error, redirect } from '@sveltejs/kit';

export async function load({ url: { searchParams } }) {
	switch (searchParams.get('mode')) {
		case 'resetPassword':
			throw redirect(302, '/auth/action/reset-password?' + searchParams.toString());
		case 'recoverEmail':
			throw redirect(302, '/auth/action/recover-email?' + searchParams.toString());
		case 'verifyEmail':
			throw redirect(302, '/auth/action/verify-email?' + searchParams.toString());
		default:
			throw error(400, { message: 'Invalid mode' });
	}
}
