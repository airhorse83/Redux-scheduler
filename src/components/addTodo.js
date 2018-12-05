import React, { Component } from 'react';

class AddTodo extends Component {
  render() {
      const { className } = this.props
    return (
      <div className={`${className} add-todo`}>
            <input/>
            <button>add</button>
        
      </div>
    );
  }
}


export default AddTodo;
