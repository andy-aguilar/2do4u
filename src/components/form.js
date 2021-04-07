import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        todo: ""
    }

    handleChange = (event) => {
        this.setState({todo: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createTodo(this.state.todo)
        this.setState({todo: ""})
    }

    render() {
        return (
            <div>
                <h1>Add Todo:</h1>
            <form className="form" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.todo} onChange={(event) => this.handleChange(event)} />
                <input type="submit" value="Add Item"/>
            </form>
            </div>
        )
    }
}
