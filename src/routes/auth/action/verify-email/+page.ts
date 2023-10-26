export async function load({ url: { searchParams } }) {
	const actionCode = searchParams.get('oobCode');
	return { actionCode };
}
