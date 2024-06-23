import React, { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';
import 'react-toastify/dist/ReactToastify.css';
import './taskItem.css';

const TaskItem = ({ task, deleteTask }) => {
  const [completed, setCompleted] = useState(task.completed);

  const handleToggle = () => {
    api.put(`/tasks/${task._id}`, { completed: !completed })
      .then(response => {
        setCompleted(response.data.completed);
        toast.success(`Task marked as ${response.data.completed ? 'complete' : 'incomplete'}`);
      })
      .catch(error => {
        console.error('There was an error updating the task!', error);
        toast.error('Error updating the task');
      });
  };

  const handleDelete = () => {
    api.delete(`/tasks/${task._id}`)
      .then(() => {
        deleteTask(task._id); 
        toast.success('Task deleted successfully');
      })
      .catch(error => {
        console.error('There was an error deleting the task!', error);
        toast.error('Error deleting the task');
      });
  };

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <h3>Task: {task.title}</h3>
      <p>{task.description}</p>
      <div className="buttons">
        <button className="complete" onClick={handleToggle}>
          <i className="fas fa-check"></i> {completed ? 'Incomplete' : 'Complete'}
        </button>
        <button className="delete" onClick={handleDelete}>
          <i className="fas fa-trash-alt"></i> Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
