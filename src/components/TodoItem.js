import React, { Component } from "react";
import propTypes from "prop-types";

export class TodoItem extends Component {

  render() {
    const { id, title } = this.props.todo;

    return (
      <div
        style={{
          background: "#f4f4f4f4",
          padding: "10px",
          borderBottom: "1px #ccc dotted",
          textDecoration: this.props.todo.completed
            ? "line-through" //means if true
            : "none" // : means else
        }}
      >
        <p>
          <input type="checkbox" onChange={this.props.markCompleted.bind(this, id)}/>
          {"  "}
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: propTypes.object.isRequired
};

const btnStyle = {
  background: '#212529',
  color: '#fff',
  border: 'none',
  padding: '2px 7px',
  borderRadius: '25%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;
