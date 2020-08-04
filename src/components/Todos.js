import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  // markComplete = () => {
  //   console.log('Hello');
  // }
  // Using arrow function can help us not using "bind" element with function.

  render(){
    // map creates list, list need key
    return this.props.todos.map((todo)=>(
      // this.props.markComplete => go up level
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

// Prop types
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;
