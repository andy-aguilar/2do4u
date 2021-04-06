import React, { Component } from 'react'

export default class todoContainer extends Component {
    render() {
        return (
            <div>
                <h1>Todos:</h1>
                <ul className="todo-container">
                    <li>Eat</li>
                    <li>Sleep</li>
                    <li>Code</li>
                </ul>
            </div>
        )
    }
}
