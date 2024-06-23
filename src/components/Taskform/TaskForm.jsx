import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';
import 'react-toastify/dist/ReactToastify.css';
import './taskForm.css';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    api.post('/tasks', { title, description })
      .then(response => {
        console.log('Task added successfully!', response.data);
        toast.success('Task added successfully');
        navigate('/');
      })
      .catch(error => {
        console.error('There was an error adding the task!', error);
        toast.error('Error adding the task');
      });
  };

  return (
    <div className="task-form-container">
      <h2>Add New Task</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">
            <i className="fas fa-heading"></i> Title:
          </label>
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">
            <i className="fas fa-file-alt"></i> Description:
          </label>
          <textarea 
            id="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          ></textarea>
        </div>
        <button type="submit">
          <i className="fas fa-plus-circle"></i> Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
