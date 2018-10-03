import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
const express = require('express')
const cors = require('cors')


// create express instance
const app = express()


// automatically allow cross-origin requests
app.use(cors({ origin: true }))


// write order data to database
const writeOrder = async ({ order }) => {
  try {
    const { order_number, test } = order
    await admin.firestore().collection('orders').doc(`${order_number}`).set(order)
    return
  }
  catch (e) { throw e }
}


// handle order create event
app.post('/create', async (req, res) => {
  try {
    await writeOrder({ order: req.body })
    res.status(200).send()
  }
  catch (e) {
    console.error('catch error: ', e)
    res.status(400).send('Error: A wild Error appeared!')
  }
})


// https://us-central1-feed-me-sugar.cloudfunctions.net/https-shopifyWebhookOrders
export const listener = functions.https.onRequest(app)
