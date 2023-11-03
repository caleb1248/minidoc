import { PUBLIC_FIREBASE_API_KEY } from '$env/static/public';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
	apiKey: PUBLIC_FIREBASE_API_KEY,
	authDomain: 'minidoc-db100.firebaseapp.com',
	projectId: 'minidoc-db100',
	storageBucket: 'minidoc-db100.appspot.com',
	messagingSenderId: '401939679769',
	appId: '1:401939679769:web:c014b38068a5e67b32f888',
	measurementId: 'G-4NRBG4J8WL'
});

export const auth = getAuth(app);
