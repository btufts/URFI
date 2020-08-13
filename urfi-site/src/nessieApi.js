const BASE_URL = 'http://api.reimaginebanking.com'
const API_KEY = ''
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
