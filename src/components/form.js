import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <h1>Add Todo:</h1>
            <form className="form">
                <input type="text" />
                <input type="submit" value="Add Item"/>
            </form>
            </div>
        )
    }
}
