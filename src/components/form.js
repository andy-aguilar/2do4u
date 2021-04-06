import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        todo: ""
    }

    handleChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    handleSubmit = () => {

    }

    render() {
        return (
            <div>
                <h1>Add Todo:</h1>
            <form className="form">
                <input type="text" onChange={this.handleChange} />
                <input type="submit" value="Add Item"/>
            </form>
            </div>
        )
    }
}
