import React, { Component } from "react";
import TodoItem from "./TodoItem";
import propTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markCompleted={this.props.markCompleted}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// PropTypes
// eslint-disable-next-line react/no-typos
Todos.propTypes = {
  todos: propTypes.array.isRequired
};

export default Todos;
