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
                            <h2>Mortgage</h2>
                            <p>column 1</p>
                        </div>
                        <div className='cd-column'>
                            <h2>Car</h2>
                            <p>column 2</p>
                        </div>
                        <div className='cd-column'>
                            <h2>School</h2>
                            <p>column 3</p>
                        </div>
                        <div className='cd-column'>
                            <h2>Other</h2>
                            <p>column 4</p>
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}

export default LoansPage;