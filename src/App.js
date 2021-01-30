import React, { useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take the rubbish out', 'I want to eat out today']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    //this will fire up when we click the button
    setTodos([...todos, input]);
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
