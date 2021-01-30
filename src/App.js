import React, { useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <input type="text"/>
      <button>Add Todo</button>

      <ul>
        <li>Take dogs for a walk</li>
        <li>Take the rubbish out</li>
      </ul>
    </div>
  );
}

export default App;
