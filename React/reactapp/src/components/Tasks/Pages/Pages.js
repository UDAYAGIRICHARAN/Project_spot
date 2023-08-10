import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


export default function Pages() {

  const [tasks,setTasks]=useState([])
 
  
  const {id}=useParams();

  useEffect(()=>{
    loadUsers();
  },[]);

  const loadUsers=async()=>{
    const result=await axios.get("http://localhost:8080/tasks")
    setTasks(result.data)
  }

  const deleteTask=async(id)=>{
    await axios.delete(`http://localhost:8080/task/${id}`)
    loadUsers()
  }
  return (
    <div className='Container'>
        <div className='py-4'>
        <table class="table table-striped border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">TASK NAME</th>
      <th scope="col">PROJECT NAME</th>
      <th scope="col">STATUS</th>
      <th scope="col">PROGRESS(%)</th>
      <th scope="col">DUE DATE</th>
      <th scope="col">NOTES</th>
      <th></th>
      <th></th>
      <th scope="col">ACTIONS</th>
      
      <td>
      </td>
    </tr>
  </thead>
  <tbody>
    {
      tasks.map((task,index)=>(
         <tr>
          <th scope="row" key={index}>{index+1}</th>
          {/*<td>{task.id}</td>*/}
          <td>{task.taskname}</td>
          <td>{task.projectname}</td>
          <td>{task.status}</td>
          <td>{task.percentagecompleted}</td>
          <td>{task.date}</td>
          <td>{task.notes}</td>
          <td></td>
          <td></td>
          
          <Link className='btn btn-info mx-3 bg-info p-1'
          to={`/viewuser/${task.id}`}>View Task</Link>
         
          <Link className='btn btn-warning mx-3 bg-warning p-1'
          to={`/edittask/${task.id}`}
          >Edit Task</Link>

          <button className='btn btn-danger-400 mx-3 bg-danger p-1 '
          onClick={()=>deleteTask(task.id)}
          >Delete Task</button>
         {/* <button type="button mx-2 data-bs-theme=dark" class="btn-close" aria-label="Close"></button/>*/}
          </tr>

      ))
    }
    
  </tbody>
</table>
        </div>
        </div>
  )
}
