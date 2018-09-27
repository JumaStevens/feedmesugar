import firebase, { firestore } from '~/firebase'


export default {
  async writeName ({}, { firstName, lastName }) {
    try {
      const { uid } = firebase.auth().currentUser
      const data = { [uid]: { firstName, lastName } }

      const dbRef = firestore.doc('customerQueues/updateName')
      await dbRef.set(data)
      return
    }
    catch (e) {
      console.error(e)
      throw e
    }
  },


  async writeEmail ({}, { email }) {
    try {
      const { uid } = firebase.auth().currentUser
      const data = { [uid]: { email } }

      const dbRef = firestore.doc('customerQueues/updateEmail')
      await dbRef.set(data)
      return
    }
    catch (e) {
      console.error(e)
      throw e
    }
  },


  async writeShippingAddress ({}, { address, city, state, zipcode, country }) {
    try {
      const { uid } = firebase.auth().currentUser
      const data = { [uid]: { address, city, state, zipcode, country } }

      const dbRef = firestore.doc('customerQueues/updateShippingAddress')
      await dbRef.set(data)
      return
    }
    catch (e) {
      console.error(e)
      throw e
    }
  },


  async writePhoneNumber ({}, { phoneNumber }) {
    try {
      const { uid } = firebase.auth().currentUser
      const data = { [uid]: { phoneNumber } }

      const dbRef = firestore.doc('customerQueues/updatePhoneNumber')
      await dbRef.set(data)
      return
    }
    catch (e) {
      console.error(e)
      throw e
    }
  },


  watchCustomer ({ commit, dispatch }) {
    const success = (snapshot) => {
      console.log('snapshot: ', snapshot.data())
      commit('SET_CUSTOMER', { metadata: snapshot.data() })
    }
    const error = (err) => console.error(err)

    const { uid } = firebase.auth().currentUser
    const dbRef = firestore.doc(`customers/${uid}`)

    dbRef.onSnapshot(snapshot => success(snapshot), e => error(e))
  }
}
