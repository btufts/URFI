import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import "./Homepage.css";
import Web from "./Web.js";


class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first: "",
            last: "",
            savings: 0,
            checking: 0,
        }
        this.handleFirstNameUpdate = this.handleFirstNameUpdate.bind(this);
        this.handleLastNameUpdate = this.handleLastNameUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    createCustomer = (props) => {
        const firstname = document.getElementById("first");
        const lastname = document.getElementById("last");
        console.log(firstname.innerHTML, lastname.innerHTML);
    }

    handleFirstNameUpdate(event) {
        this.setState({ first: event.target.value });
    }

    handleLastNameUpdate(event) {
        this.setState({ last: event.target.value });
    }

    handleSubmit(e) {

        e.preventDefault();
    }

    render() {
        return (
            <div className="Screen">
                <h2>An Unbiased Repository of Financial Information</h2>

            </div>
        );
    }
}


export default Homepage;