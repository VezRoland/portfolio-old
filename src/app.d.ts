import type { FirebaseApp } from 'firebase/app'

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			app: FirebaseApp
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
