import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from './config'

// Initialize Firebase
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()

export { db }
