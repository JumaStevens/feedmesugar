import { config } from './config'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp(config)

const database = firebase.database()


const storage = firebase.storage()


const firestore = firebase.firestore()
firestore.settings({ timestampsInSnapshots: true })


const auth = firebase.auth


export { database, storage, firestore, auth }
