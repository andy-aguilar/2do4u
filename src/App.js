import React from "react"
import Header from "./components/header.js"
import Form from "./components/form.js"
import TodoContainer from "./containers/todoContainer.js"
import "./App.css"

class App extends React.Component {

  state = {
    todos: [],
    currentKey: 1,
    urgent: false
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

  toggleUrgent = () => {
    this.setState({
      urgent: !this.state.urgent
    })
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div className="todo">
          {this.state.urgent 
          ? <button style={{backgroundColor: "red"}} onClick={this.toggleUrgent}>Urgent</button> 
          : <button onClick={this.toggleUrgent}>Normal</button>}
          
          <Form createTodo={this.createTodo} urgent={this.state.urgent}/>
          
          <TodoContainer todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        </div>

      </div>
    )
    }
}

export default App;
