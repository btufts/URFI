import React, { Component } from 'react'
import './BankPage.css'

class BankPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      monthlyIncome: 0,
      setAside: 0,
      result: 0,
      yearResult: 0
    }
  }

  output () {
    console.log('op')
    var value1 = this.state.monthlyIncome
    var value2 = this.state.setAside
    var monthly_income = value1 - value2
    var year = 12
    var yearly_income = monthly_income * year
    this.setState({ result: monthly_income, yearResult: yearly_income })
  }

  monthlyUpdate (e) {
    console.log('upd', e, e.target.value)
    this.setState({ monthlyIncome: e.target.value || 0 })
  }

  asideUpdate (e) {
    this.setState({ setAside: e.target.value || 0 })
  }

  render () {
    return (
      <div>
        <h1>BanksPage</h1>
        <h1>Practice Saving your Money</h1>
        <h2>First, input how much money you make a month</h2>
        <input id='value1' type='text' onChange={e => this.monthlyUpdate(e)} />
        <h2>Second, input how much money you want to put aside after every monthly salary check:</h2>
        <input id='value2' type='text' onChange={e => this.asideUpdate(e)} />
        <button type='Submit' onClick={() => this.output()}>Submit</button>

        <h2>Perfect! You have this much savings from one year</h2>
        <p id='result'>{this.state.result}</p>
        <h2>You saved this much money spend in your checking account</h2>
        <p id='year_result'>{this.state.yearResult}</p>
      </div>

    )
  }
}

export default BankPage
