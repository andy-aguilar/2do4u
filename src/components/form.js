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

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.todo)
        this.props.createTodo(this.state.todo)
        this.setState({todo: ""})
    }

    render() {
        return (
            <div>
                <h1>Add Todo:</h1>
            <form className="form" onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} value={this.state.todo} />
                <input type="submit" value="Add Item"/>
            </form>
            </div>
        )
    }
}
