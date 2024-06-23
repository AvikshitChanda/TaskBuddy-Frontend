import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import TaskItem from "../TaskItem/TaskItem";
import api from "../../services/api";
import 'react-toastify/dist/ReactToastify.css';
import './taskList.css';
import logo from '../../assets/logo.png'; // Ensure you have a logo image in this path

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the tasks!', error);
        toast.error('Error fetching tasks');
      });
  }, []);

  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId));
    toast.success('Task deleted successfully');
  };

  return (
    <div className="tasksContainer">
      <ToastContainer />
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        
        <button className="add-task-button" onClick={() => navigate('/new')}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className={`taskItem ${tasks.length === 0 ? 'empty' : ''}`}>
        {tasks.map(task => (
          <TaskItem key={task._id} task={task} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
