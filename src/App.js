import React, {Component} from 'react';
import Todos from './components/Todos.js';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: true
      },{
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },{
        id: 3,
        title: 'Learn MEVN stack',
        completed: false
      }
    ]
  }

  render(){
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
