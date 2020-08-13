const BASE_URL = 'http://api.reimaginebanking.com'
const API_KEY = 'afd9829a1bf1302f0b2f2c1ea1e10ea2'
const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com'

export async function getCustomer (customerId) {
  const respBody = await fetch(`${CORS_ANYWHERE}/${BASE_URL}/customers/${customerId}?key=${API_KEY}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return respBody.json()
}

export async function getAccount (accountId) {
  const respBody = await fetch(`${CORS_ANYWHERE}/${BASE_URL}/accounts/${accountId}?key=${API_KEY}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return respBody.json()
}

export async function createCustomer (firstName, lastName) {
  const respBody = await fetch(`${CORS_ANYWHERE}/${BASE_URL}/customers?key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      address: {
        street_number: '123',
        street_name: 'Sesame Street',
        city: 'Elmoville',
        state: 'VA',
        zip: '23120'
      }
    })
  })
  return respBody.json()
}

export async function createAccount (customerId, accountType = 'Credit Card') {
  const respBody = await fetch(`${CORS_ANYWHERE}/${BASE_URL}/customers/${customerId}/accounts?key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type: accountType,
      nickname: 'test demo',
      rewards: 0,
      balance: 0
    })
  })
  return respBody.json()
}
