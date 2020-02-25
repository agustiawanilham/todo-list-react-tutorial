import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello World',
      newTodo:'',
      todos:[
        {
          title:"Bersih-bersih",
          done:false
        },
        {
          title:"Gosok gigi",
          done:false
        }

      ],
    };
  }
  formSubmitted(event){
    event.preventDefault();
   
    this.setState({
      newTodo:'',
      todos:[...this.state.todos, {
        title: this.state.newTodo,
        done:false,
      }]
    });
  };
  newTodoChanged(event){
    this.setState({
      newTodo:event.target.value,
    })    
  };
  toggleTodoDone(event, index) {
    const todos = [...this.state.todos];
    todos[index] = {...todos[index]};
    todos[index].done = event.target.checked;
    this.setState({
      todos
    });
    console.log(todos);
  }

  render() {
    return (
      <div className="App">
        <h3>{this.state.message }</h3>
        <form onSubmit={(event)=>this.formSubmitted(event)}>
          <label htmlFor="newTodo">New Todo</label>
          <input onChange={(event)=>this.newTodoChanged(event)} id="newTodo" name="newTodo" value={this.state.newTodo}/>
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {this.state.todos.map((todo, index)=> {
            return(
            <li key={todo.title}>
              <input onChange={(event)=>this.toggleTodoDone(event, index)} type="checkbox"/> 
              <span style={{textDecoration: todo.done ? 'line-through' : 'inherit'}}>
                {todo.title}
              </span>
            </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App;
