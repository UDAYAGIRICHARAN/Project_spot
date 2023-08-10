import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  Link, useNavigate, useParams } from 'react-router-dom';

export default function EditTasks() {
    
    let navigate=useNavigate()

    const {id}=useParams()

    const [task,setTask]=useState({
        
        taskname:"",
        projectname:"",
        status:"",
        percentagecompleted:"",
        date:"",
        notes:"",
    });

    const { taskname,projectname,status,percentagecompleted,date,notes} = task;
    
    const onInputChange = (e) => {
        setTask({...task,[e.target.name]:e.target.value})};
   

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/task/${id}`,task);
        navigate("/")
        }
           
        useEffect(()=>{
            loadUsers()
        
        },[])
        
        const loadUsers=async() => {
            const result=await axios.get(`http://localhost:8080/user/${id}`)
            setTask=(result.data)}

  return (
    <div className='container'>
       <div className='row'>
          <div className="col-md-5 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Edit Task</h2>
             {/*<form onSubmit={(e)=>onSubmit(e)}>
              <div className='mb-3'>
                <label htmlFor="TASK ID" className='form-label'>
                    TASK ID
                </label>

                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter Task ID"
                    name="id"
                    value={id}
                    onChange={(e)=>onInputChange(e)}/>
                </div>*/}
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                <label htmlFor="TASK NAME" className='form-label'>
                TASK NAME
                </label>
                <input
                type={'text'}
                className="form-control"
                placeholder="Enter Task name"
                name="taskname"
                value={taskname}
                onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className='mb-3'>
                <label htmlFor="PROJECT NAME" className='form-label'>
                PROJECT NAME
                </label>
                <input
                type={'text'}
                className="form-control"
                placeholder="Enter Project name"
                name="projectname"
                value={projectname}
                onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className='mb-3'>
                <label htmlFor="Status" className='form-label'>
                    STATUS
                </label>
                <input
                type={'text'}
                className="form-control"
                placeholder="Enter Task status"
                name="status"
                value={status}
                onChange={(e)=>onInputChange(e)}/></div>
                
                <div className='mb-3'>
                <label htmlFor="PROGRESS(%)" className='form-label'>
                    PROGRESS
                </label>
                <input
                type={'text'}
                className="form-control"
                placeholder="Enter Progress Percentage"
                name="percentagecompleted"
                value={percentagecompleted}
                onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className='mb-3'>
                <label htmlFor="DATE" className='form-label'>
                    DUE DATE
                </label>
                <input
                type={'text'}
                className="form-control"
                placeholder="Enter Due date"
                name="date"
                value={date}
                onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className='mb-3'>
                <label htmlFor="NOTES" className='form-label'>
                NOTES
                </label>
                <input
                type={'text'}
                className="form-control"
                placeholder="Enter Notes/Update if any"
                name="notes"
                value={notes}
                onChange={(e)=>onInputChange(e)}/>
                </div>
                
                <button type="submit" className="btn btn-outline-primary">Submit</button>
                <Link className="btn btn-outline-danger mx-2" to ="/">Cancel</Link>
                </form>
                </div>
            </div>
           </div>       
        
  )
}
