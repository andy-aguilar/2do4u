import React from "react"
import Header from "./components/header.js"
import Form from "./components/form.js"
import TodoContainer from "./containers/todoContainer.js"
import "./App.css"

class App extends React.Component {

  state = {
    todos: []
  }

  createTodo = (e) => {
    this.setState({
      todos: [...this.state.todos, {text: "Yo!"}]
    })
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div className="todo">
          <button onClick={this.createTodo}>Yo!</button>
          <Form />
          <TodoContainer todos={this.state.todos}/>
        </div>

      </div>
    )
    }
}

export default App;
