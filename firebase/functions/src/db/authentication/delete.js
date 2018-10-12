import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'


const deleteCustomer = async ({ user }) => {
  try {
    const { uid } = user.toJSON()
    const customersRef = admin.firestore().collection('customers').doc(uid)
    await customersRef.delete()
    return
  }
  catch(e) {
    console.error('deleteCustomer error: ', e)
    throw e
  }
}



export const listener = functions.auth.user().onDelete(async (user) => {
  try {
    await deleteCustomer({ user })

    return
  }
  catch (e) {
    console.error('User onDelete Error: ', e)
    return
  }
})
