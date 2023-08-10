import React,{useContext,useEffect} from 'react';
import {UserContext} from '../context'
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const{setUser,user}=useContext(UserContext)
    const navigate= useNavigate();
    useEffect(() => {
        if(!user){
            navigate("/")
        }
      }, [user]);
    return (
        <div>
            <h1 className='mt-5 text-center text-black'>Are you sure want to Logout this page?<br></br><br></br>
            <button onClick={()=>{setUser(false)}}  className='btn btn-danger text-center'>logout</button></h1>
            
        </div>
    );
};

export default Logout;