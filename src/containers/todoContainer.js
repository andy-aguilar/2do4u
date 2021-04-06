import React, { Component } from 'react'

export default class todoContainer extends Component {

    renderTodos = () => {
        return this.props.todos.map(todo => <li>{todo.text}</li>)
    }

    render() {
        return (
            <div>
                <h1>Todos:</h1>
                <ul className="todo-container">
                    {this.renderTodos()}
                </ul>
            </div>
        )
    }
}
