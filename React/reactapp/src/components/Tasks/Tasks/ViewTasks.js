import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewTasks() {
 

    const[task,setTask]=useState({
        taskname:"",
        projectname:"",
        status:"",
        percentagecompleted:"",
        date:"",
        notes:"",
})

const{id}=useParams();

useEffect(()=>{
    loadUsers()

},[])

const loadUsers=async() => {
    const result=await axios.get(`http://localhost:8080/user/${id}`)
    setTask=(result.data)
}
return (  
    <div className='container'>
    <div className='row'>
       <div className="col-md-5 offset-md-3 border rounded p-4 mt-2 shadow">
         <h2 className="text-center m-4">Task Details</h2>
         <div className="card">
            <div className='card-header'>
                Task Details:{task.id}
                <ul className="list-group list-group-flush">
                    <li className='list-group-item'>
                        <b>TASK NAME:</b>
                         {task.taskname}
                    </li>
                    <li className='list-group-item'>
                        <b>PROJECT NAME:</b>
                        {task.projectname}
                    </li>
                    <li className='list-group-item'>
                        <b>STATUS:</b>
                        {task.status}
                    </li>
                    <li className='list-group-item'>
                        <b>PROGRESS(%):</b>
                        {task.percentagecompleted}
                    </li>
                    <li className='list-group-item'>
                        <b>DUE DATE:</b>
                        {task.date}
                    </li>
                    <li className='list-group-item'>
                        <b>NOTES:</b>
                        {task.notes}
                    </li>
                    
                </ul>
            </div>
         </div>
             
          <Link className="btn btn-primary my-2"  to={"/"}>BACK</Link>    

            
            
            
        
    </div>  
  </div>
</div>  
    
  )
}




