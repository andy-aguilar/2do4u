import React, { Component } from 'react';
import logo from '../images/logo.jpeg';
import "./header.css"

export default class header extends Component {
    render() {
        return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        )
    }
}
