import React, { Component } from 'react'
import Todo from "../components/todo.js"

export default class todoContainer extends Component {

    renderTodos = () => {
        return this.props.todos.map(todo => <Todo key={todo.key} todo={todo} deleteTodo={this.props.deleteTodo}/>)
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
