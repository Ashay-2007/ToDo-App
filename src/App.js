import React, { useState} from 'react';
import './App.css';
import { Button, FormControl,Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take the rubbish out', 'I want to eat out today']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    //this function will fire up when we click the button
    event.preventDefault(); //This prevents page from refreshing every time todo is added using addTodo button
    setTodos([...todos, input]);
    setInput(''); //clear up the input field after each add
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
      </form>
      
      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
