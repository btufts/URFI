import React, { Component } from 'react';
import "./ChecksPage.css";

import CheckImg from "../../CheckImg.png";
import bank from "../../bank1.png";
import arrow from "../../arrow.png";

class ChecksPage extends Component {
    render() {
        return (
            <div className="wrapper-component">
                <div className="title">
                    <h2>Checks 101</h2>
                </div>
                <center className="center">
                    <div className="checkArea">
                        <img src={CheckImg} className="checkImage" />
                    </div>
                    <p> A check is basically a transaction note for the bank to transer money from your checking account into whoever is cashing the check</p>
                </center>
                <div className="bank">
                    <img src={bank} className="bankImage" />
                    <img src={arrow} className="arrowImage" />
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