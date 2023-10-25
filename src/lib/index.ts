import { readable, get, writable } from 'svelte/store'
import { page } from '$app/stores'

export interface Route {
	path: string
	name: string
}

export const routes = readable<Route[]>([
	{ path: '/', name: 'Kezdőlap' },
	{ path: '/about', name: 'Rólam' },
	{ path: '/projects', name: 'Projektek' },
	{ path: '/contact-me', name: 'Kapcsolat' }
])

export const currentRoute = writable<Route[]>()