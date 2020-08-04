import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';
import Header from './components/layout/Header.js';
import About from './components/page/About.js';

import './App.css';

class App extends Component {
  state = {
    todos: [
      // {
      //   id: 1,
      //   title: 'Take out the trash',
      //   completed: false
      // },{
      //   id: 2,
      //   title: 'Dinner with wife',
      //   completed: false
      // },{
      //   id: 3,
      //   title: 'Learn MEVN stack',
      //   completed: false
      // }
    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  // Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map((todo) => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  // Delete Todo
  delTodo = (id) => {
    axios.delete('https://jsonplaceholder.typicode.com/todos/'+id)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id )] }) );

    // this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id )] })
  }

  // Add Todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [
        ...this.state.todos, res.data
      ] }))
    // const newTodo = {
    //   id: Math.random(),
    //   title,
    //   completed: false
    // }

    // this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
