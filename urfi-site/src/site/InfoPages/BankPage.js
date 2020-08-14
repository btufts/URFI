import React, { Component } from 'react'
import './BankPage.css'
import Button from 'react-bootstrap/Button';

import SavingsImg from '../../savings.png';
import CheckingImg from '../../checking.png';

class BankPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            monthlyIncome: 0,
            setAside: 0,
            result: 0,
            yearResult: 0,
            earned: 0,
        }
    }

    output() {
        var value1 = this.state.monthlyIncome;
        var value2 = this.state.setAside;
        value2 = parseInt(value2);
        var monthly_income = value1 - value2;
        var interest_savings = 0;
        var moneyMade = 0;
        for (var i = 0; i < 12; i++) {
            interest_savings = interest_savings + value2;
            interest_savings = interest_savings * 1.00008;
        }
        var with2Decimals = interest_savings.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
        interest_savings = with2Decimals
        var total_savings = value2 * 12
        moneyMade = interest_savings - total_savings;
        var with2Decimals2 = moneyMade.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
        moneyMade = with2Decimals2
        var year = 12;
        var yearly_income = monthly_income * year;
        this.setState({ result: interest_savings, yearResult: yearly_income, earned: moneyMade })
    }

    monthlyUpdate(e) {
        this.setState({ monthlyIncome: e.target.value || 0 })
    }

    asideUpdate(e) {
        this.setState({ setAside: e.target.value || 0 })
    }

    render() {
        return (
            <div className="bank-wrapper">
                <div className="titleBank">
                    <h1>Bank Accounts 101</h1>
                </div>
                <center>
                    <div className='cd-row'>
                        <div className='cd-column1'>
                            <img src={SavingsImg} className="savingsImage" />
                            <h2><u>Savings Account</u></h2>
                            <p>A Savings Account is held at a bank or financial institution.</p>
                            <p>Ideal for building an emergency fund or saving for a short term goal.</p>
                            <p>While these accounts have modest interest rates, their safety and reliability make them a </p>
                            <p>great option for parking cash you want available for short term needs</p>
                            <h3><u>Interest</u></h3>
                            <p>Iterest is money you get based on the amount of money in your savings account.</p>
                            <p>The average interest rate is .1%.</p>
                            <p>Interest can be compounded daily, monthly, quarterly, or yearly.</p>
                            <p>This means if you get .1% a year compounded monthly, .008% would be added to your savings every month!</p>
                            <h4>Example</h4>
                            <p>You have $1000 in savings, $.08 would be added to your account the first month </p>
                            <p>then .008% of $1,000.08 would be added the next month!</p>
                        </div>
                        <div classname='cd-column2'>
                            <img src={CheckingImg} className="checkingImage" />
                            <h2><u>Checking Account</u></h2>
                            <p>A deposit account held at a bank or financial institution.</p>
                            <p>Ideal for spending money that you want to use frequently</p>
                            <p>These accounts don't have any interest but are more easily accessible day to day</p>
                            <h3><u>Debit Card</u></h3>
                            <p>Your debit card is attatched to this acount.</p>
                            <p>Everytime you use your debit card it withdraws funds from this account.</p>
                            <p>Make sure you don't use your debit card for more than is in this account!</p>
                            <p>That is an easy way to get charged an overdraft fee and lose money.</p>
                        </div>
                    </div>
                </center>
                <div className="practice">
                    <h1>See How Much You Can Make by Saving!</h1>
                    <h2>First, input how much money you make a month:</h2>
                    <input id='value1' type='text' onChange={e => this.monthlyUpdate(e)} />
                    <h2>Second, input how much money you can put aside from your monthly income:</h2>
                    <input id='value2' type='text' onChange={e => this.asideUpdate(e)} />
                    <Button className='button' id='button' type='Info' variant="primary" onClick={() => this.output()}>Submit</Button>

                    <h2>Perfect! You have this much in savings after one year!</h2>
                    <p id='result'>${this.state.result}</p>
                    <h2>You can spend this amount in a year:</h2>
                    <p id='year_result'>${this.state.yearResult}</p>
                    <h2>At 1% interest compounded monthly you made:</h2>
                    <p id='earned'>${this.state.earned}</p>
                </div>
            </div>


        )
    }
}

export default BankPage
