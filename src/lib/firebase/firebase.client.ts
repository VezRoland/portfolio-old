import { initializeApp, getApps } from 'firebase/app' 
import config from './firebase.config.json'

export function getApp() {
	if (getApps().length > 0) return getApps()[0]
	return initializeApp(config)
}