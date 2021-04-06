import React from "react"
import Header from "./components/header.js"
import Form from "./components/form.js"
import TodoContainer from "./containers/todoContainer.js"
import "./App.css"

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <div className="todo">
          <Form />
          <TodoContainer />
        </div>

      </div>
    )
    }
}

export default App;
