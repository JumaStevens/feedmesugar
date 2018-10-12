import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'


const createCustomer = async ({ user }) => {
  try {
    const { uid, email, phoneNumber } = user.toJSON()

    const userDefaults = {
      address: '',
      city: '',
      county: '',
      email: email || '',
      firstName: '',
      lastName: '',
      phoneNumber: phoneNumber || '',
      referralCode: admin.database().ref().push().key,
      referralCredit: 0,
      state: '',
      zipcode: ''
    }

    const customersRef = admin.firestore().collection('customers').doc(uid)
    await customersRef.set(userDefaults)
    return
  }
  catch(e) {
    console.error('createCustomer error: ', e)
    throw e
  }
}



export const listener = functions.auth.user().onCreate(async (user) => {
  try {
    await createCustomer({ user })

    return
  }
  catch (e) {
    console.error('User onCreate Error: ', e)
    return
  }
})
