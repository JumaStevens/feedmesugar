import { config } from './config'
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'


firebase.initializeApp(config)


const storage = firebase.storage()


const firestore = firebase.firestore()
firestore.settings({ timestampsInSnapshots: true })


const auth = firebase.auth


export { storage, firestore, auth }
