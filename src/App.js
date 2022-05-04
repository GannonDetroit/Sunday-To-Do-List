import React, { useState } from 'react';
import './App.css';

const App = () => {
  // your app state should be stored here. You may use more than what is currently provided if you feel you need it.
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  return (
    <div className="App">
      {/* app title */}
      <h1>The Sunday To-Do List</h1>

      {/* to do input component */}


      {/* to do list view component */}

      
    </div>
  );
}

export default App;
