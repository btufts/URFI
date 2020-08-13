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
import CreditDebit from './CreditDebit'
import BottomNav from './site/BottomNav'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Homepage />
          <BottomNav />
        </Route>
        <Route path='/bank'>
          {/* <BankPage /> */}
          <CreditDebit />
          <BottomNav />
        </Route>
        <Route path='/creditdebt'>
          {/* <BankPage /> */}
          <CreditDebit />
          <BottomNav />
        </Route>
        <Route path='/freeroute'>
          {/* <BankPage /> */}
          <CreditDebit />
          <BottomNav />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
