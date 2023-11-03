import { initializeApp } from 'firebase-admin/app';
import { SERVICE_ACCT } from '$env/static/private';

const app = initializeApp({
	credential: JSON.parse(SERVICE_ACCT)
});

export { app };
