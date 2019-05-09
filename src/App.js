import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import header from "./components/layout/header";
import AddTodo from "./components/AddTodo";
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Write todo app",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Push to github",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Write more code",
        completed: false
      }
    ]
  };

  markCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete todo
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  // Add todo
  addEntry = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <div className="App">
        <div className='container'>  
          <header style={headerStyle} />
          <AddTodo addEntry={this.addEntry}/>
          <Todos
            todos={this.state.todos}
            markCompleted={this.markCompleted}
            delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default App;
