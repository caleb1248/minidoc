export async function load({ url: { searchParams } }) {
	const mode = searchParams.get('mode');
	const actionCode = searchParams.get('oobCode');
	const continueUrl = searchParams.get('continueUrl');
	const lang = searchParams.get('lang') || 'en';
	return { lang, mode, actionCode, continueUrl };
}
