import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <li>
                {this.props.todo.text}
                <button onClick={() => this.props.deleteTodo(this.props.todo.key)}>x</button>
            </li>
        )
    }
}
