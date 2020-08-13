import React from 'react'
import './App.css'
import Homepage from './site/Homepage.js'
import Web from './site/Web.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import BottomNav from './site/BottomNav'
import BankPage from './site/InfoPages/BankPage'
import ChecksPage from './site/InfoPages/ChecksPage'
import CreditDebitPage from './site/InfoPages/CreditDebitPage'
import LoansPage from './site/InfoPages/LoansPage'
import RetirementPage from './site/InfoPages/RetirementPage'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <h1 className='middle-nav'>URFI</h1>
          <Homepage />
          <BottomNav />
        </Route>
        <Route path='/bank'>
          {/* <BankPage /> */}
          <h1 className='middle-nav'>URFI</h1>
          <BankPage />
          <BottomNav />
        </Route>
        <Route path='/checks'>
          {/* <BankPage /> */}
          <h1 className='middle-nav'>URFI</h1>
          <ChecksPage />
          <BottomNav />
        </Route>
        <Route path='/creditdebt'>
          {/* <BankPage /> */}
          <h1 className='middle-nav'>URFI</h1>
          <CreditDebitPage />
          <BottomNav />
        </Route>
        <Route path='/loans'>
          {/* <BankPage /> */}
          <h1 className='middle-nav'>URFI</h1>
          <LoansPage />
          <BottomNav />
        </Route>
        <Route path='/retirement'>
          {/* <BankPage /> */}
          <h1 className='middle-nav'>URFI</h1>
          <RetirementPage />
          <BottomNav />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
