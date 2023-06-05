import { useState } from 'react'

import './App.css'

function App() {
  const [todoList, setTodoList] = useState([]);

  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

const addTask = () => {
  setTodoList([...todoList, newTask]);
 
  const deleteTask = (taskName) => {
    setTodoList(todoList.filter((task) => task !== taskName) 
    
    );
  };
  
};
  return (
    
    <div className="app">
     <div className="add-task">
        <input type="text" placeholder="Add Task" onChange={handleChange}/>
        <button onClick={addTask}>Add</button>
     </div>
     <div className="list">
     {
      todoList.map( ( task ) => {
        return (
          <>
          <div className="task-container">
              <h1 className="task">{task}</h1>
              <button onClick= {() => deleteTask(task)}>X</button>
          </div>
          </>
        );

      })}
     
     </div>
     
    </div>
    
  );
}

export default App
