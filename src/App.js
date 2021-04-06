import React from "react"
import Header from "./components/header.js"
import Form from "./components/form.js"
import TodoContainer from "./containers/todoContainer.js"
import "./App.css"

class App extends React.Component {

  state = {
    todos: [],
    currentKey: 1
  }

  createTodo = (text) => {
    this.setState({
      todos: [...this.state.todos, { text: text, key: this.state.currentKey }],
      currentKey: this.state.currentKey + 1
    })
  }

  deleteTodo = (key) => {
    let newTodos = this.state.todos.filter(todo => todo.key !== key)
    this.setState({
      todos: newTodos
    })
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div className="todo">
          <Form createTodo={this.createTodo}/>
          <TodoContainer todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        </div>

      </div>
    )
    }
}

export default App;
