import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css'
const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    projectId: '',
    name: '',
    description: '',
    assignedTo: '',
    priority: '',
    deadline: '',
    status: ''
  });
  const [editTask, setEditTask] = useState(null);

  // Fetch all tasks
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get('http://localhost:8080/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  };

  const createTask = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/tasks/add', newTask)
      .then(() => {
        console.log('New task added');
        setNewTask({
          id: '',
          projectId: '',
          name: '',
          description: '',
          assignedTo: '',
          priority: '',
          deadline: '',
          status: ''
        });
        fetchTasks();
      })
      .catch(error => {
        console.error('Error creating task:', error);
      });
  };

  const editTaskForm = (task) => {
    setEditTask(task);
    setNewTask({
      id: task.id,
      projectId: task.projectId,
      name: task.name,
      description: task.description,
      assignedTo: task.assignedTo,
      priority: task.priority,
      deadline: task.deadline,
      status: task.status
    });
  };

  const updateTask = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/tasks/${editTask.id}`, newTask)
      .then(() => {
        console.log('Task updated');
        setEditTask(null);
        setNewTask({
          id: '',
          projectId: '',
          name: '',
          description: '',
          assignedTo: '',
          priority: '',
          deadline: '',
          status: ''
        });
        fetchTasks();
      })
      .catch(error => {
        console.error('Error updating task:', error);
      });
  };

  const cancelEdit = () => {
    setEditTask(null);
    setNewTask({
      id: '',
      projectId: '',
      name: '',
      description: '',
      assignedTo: '',
      priority: '',
      deadline: '',
      status: ''
    });
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:8080/tasks/${id}`)
      .then(() => {
        console.log('Task deleted');
        fetchTasks();
      })
      .catch(error => {
        console.error('Error deleting task:', error);
      });
  };

  return (
    <div>
    <nav class="navbar bg-primary navbar-expand-lg"  data-bs-theme="dark">
    <div class="container-fluid"><div  class="navbar-brand">Task Management</div></div>
    </nav>
      <div>
        <form class="container-fluid row g-3" onSubmit={editTask ? updateTask : createTask}>
        <div class="row g-3">
        <div class="col-md-6">
        <input
            type="text"
            class="form-control"
            placeholder="Task ID"
            value={newTask.id}
            onChange={(e) => setNewTask({ ...newTask, id: e.target.value })}
          />
          </div>
          <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="Project ID"
            value={newTask.projectId}
            onChange={(e) => setNewTask({ ...newTask, projectId: e.target.value })}
          />
          </div>
          </div>
          <div class="row g-3">
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            value={newTask.name}
            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
          />
          </div>
          <div class="col-12">
          <input
            type="text"
            class="form-control"
            placeholder="Description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
          </div>
          </div>
          <div class="row g-3">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Assigned To"
            value={newTask.assignedTo}
            onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
          />
          </div>
          <div class="col">

          <input
            type="text"
            class="form-control"
            placeholder="Priority"
            value={newTask.priority}
            onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
          />
          </div>
          </div>
          
          <div class="row g-3">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Deadline"
            value={newTask.deadline}
            onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
          />
          </div>
          <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Status"
            value={newTask.status}
            onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
          />
          </div></div>
          <button type="submit" class="btn btn-success" >{editTask ? 'Update Task' : 'Create Task'}</button>
          {editTask && <button onClick={cancelEdit}class="btn btn-danger">Cancel Edit</button>}
        </form>
      </div>

      <div>
        <h2>Tasks</h2>
        <table class="table table-primary table-striped">
          <thead>
            <tr>
              <th>Task Id</th>
              <th>Project ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Assigned To</th>
              <th>Priority</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.projectId}</td>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>{task.assignedTo}</td>
                <td>{task.priority}</td>
                <td>{task.deadline}</td>
                <td>{task.status}</td>
                <td>
                  <button onClick={() => editTaskForm(task)}class="btn btn-warning">Edit</button>
                  <button onClick={() => deleteTask(task.id)}class="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskManagement;