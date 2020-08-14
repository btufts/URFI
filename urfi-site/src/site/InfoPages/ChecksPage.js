import React, { Component } from 'react';
import "./ChecksPage.css";

import check from "../../check.png";
import bank from "../../bank1.png";
import arrow from "../../arrow.png";

class ChecksPage extends Component {
    render() {
        return (
            <div className="wrapper-component">
                <div className="title">
                    <h2>Checks 101</h2>
                </div>
                <center>
                    <div className="checkArea">
                        <img src={check} className="checkImage" />;
                        <div className="nameField">
                            <p>Name of person or business you are giving the check to</p>
                        </div>
                        <div className="dateField">
                            <p>Today's Date</p>
                        </div>
                        <div className="amountField">
                            <p>Cost of purchase ex(85.00)</p>
                        </div>
                        <div className="writtenAmount">
                            <p>Write Out Amount ex(Eighty-Five and 0/100)</p>
                        </div>
                        <div className="signField">
                            <p>Your Signature</p>
                        </div>
                        <div className="memoField">
                            <p>Why are you writing this</p>
                        </div>
                    </div>
                </center>
                <div className="bank">
                    <img src={bank} className="bankImage" />;
                    <img src={arrow} className="arrowImage" />;
                    <p>Money comes from your checking account!</p>
                </div>
                <div className="bounce">
                    <img src={arrow} className="bounceImage" />
                    <p>Check will "bounce" if you don't have enough money!</p>
                    <p>This means the person won't be paid and won't be happy!</p>
                </div>
            </div>

        );
    }
}

export default ChecksPage;