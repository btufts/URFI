import React from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import checkImage from './check.png'
import logo from './logo.svg'
import { getCustomer, getAccount, createCustomer, createAccount } from './nessieApi'

class CreditDebit extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
  }

  render () {
    if (!localStorage.getItem('firstname') || !localStorage.getItem('lastname')) {
      localStorage.setItem('firstname', 'John')
      localStorage.setItem('lastname', 'Doe')
    }
    return (
      <div className='App'>
        <p>Credit card</p>
        <Cards
          cvc='999'
          expiry='12/99'
          focused={null}
          name='John Doe'
          number='9999999999999999'
          issuer='Capital One'
          preview
        />
        <p>Debit card</p>
        <Cards
          cvc='999'
          expiry='12/99'
          focused={null}
          name='John Doe'
          number='1111111111111111'
        />
        <div className='check-ctr'>
          <img src={checkImage} className='check-ctr' />
          <div className='check-dollar-amount'>You like jazz?</div>
          <div className='check-date'>12/30/1989?</div>
          <div className='check-name'>John Anthony Joe</div>
          <div className='check-memo'>John Anthony Joe</div>
          <div className='check-signature'>John Anthony Joe</div>
          <div className='check-long-amount'>two hundred and thirty dollars</div>
        </div>

      </div>
    )
  }
}

export default CreditDebit
