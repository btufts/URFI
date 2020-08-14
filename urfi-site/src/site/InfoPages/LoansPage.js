import React, { Component } from 'react';
import "./LoansPage.css";

class LoansPage extends Component {
    render() {
        return (
            <div className="wrapper-component">
                <div className="title">
                    <h2>Loans 101</h2>
                </div>
                <center>
                    <div className='cd-row'>
                        <div className='cd-column'>
                          <div className='column-header'>
                            <h2>Mortgage</h2>
                            <img src="img/home.png"></img>
                          </div>
                            <p>Long-term morgage loans are dounting to say the least.
                            However, there are a few key ideas to keep in mind throughout:</p>
                            <ul>
                              <li>Fixed vs. Adjustable rates</li>
                              <li>Duration</li>
                              <li>Money Down</li>
                            </ul>

                            <a target="_blank" href="https://www.fool.com/mortgages/our-guide-to-mortgages-for-beginners.aspx">
                            <button type="submit">Learn more</button>
                            </a>
                        </div>
                        <div className='cd-column'>
                          <div className='column-header'>
                            <h2>Car</h2>
                            <img src="img/car.png"></img>
                          </div>
                            <p>Buying a new car can be quite intimdating.  Rather
                            than buying the car out right many people choose to take
                            a loan out from the bank to purchase the car.  This means that
                            purchasing a car will usually involve three main items:</p>
                            <ul>
                              <li>A downpayment - the amount you pay the day you drive the Car
                              home</li>
                              <li>An APR (Anuual percentage rate) - The interset rate you pay on the
                              car loan per year, in other words, how much the bank is charging you per year
                              for borrowing money</li>
                              <li>Monthly Payment - How much money you much pay the bank ever month until the
                              car loan is paid off</li>
                            </ul>
                            <p>You can calculate how much your car loan would cost per month using bankrate.com's
                            car loan calculator</p>
                            <a target="_blank" href="https://www.bankrate.com/calculators/auto/auto-loan-calculator.aspx">
                            <button type="submit">Calculate it!</button>
                            </a>
                        </div>
                        <div className='cd-column'>
                          <div className='column-header'>
                            <h2>Student Loans</h2>
                            <img src="img/student.png"></img>
                          </div>
                            <p>One of the best resources for student aid is the
                            Federal Student Aid program.<br></br><br></br>The key to applying for
                            federal student aid is filling out the FAFSA Form. <br></br><br></br>You
                            can apply today here:</p>
                            <a target="_blank" href="https://studentaid.gov/h/apply-for-aid/fafsa">
                            <button type="submit">Apply Now!</button>
                            </a>
                        </div>
                        <div className='cd-column'>
                          <div className='column-header'>
                            <h2>Other</h2>
                            <img src="img/question-mark.png"></img>
                          </div>
                            <p>Depending on what other kinds of loans you are trying
                            to get, the interest rates may vary drastically depending on
                            your credit and other various factors.  If you are in need for
                            quick cash, a credit card may be able to provide this, however,
                            </p>
                            <a target="_blank" href="https://www.nerdwallet.com/article/loans/personal-loans/personal-loan-bank-credit-union">
                            <button type="submit">Personal Loans</button>
                            </a>
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}

export default LoansPage;
