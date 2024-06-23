import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList/TaskList';
import TaskForm from './components/Taskform/TaskForm';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/new" element={<TaskForm />} />
      </Routes>
    </div>
  );
}

export default App;
