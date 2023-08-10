import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'; 

const Home = ({ userId }) => {
  const [firstname, setFirstname] = useState('');
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  const [totalProjectCount, setTotalProjectCount] = useState(0);
  const [taskCount, setTaskCount] = useState(0);
  
  useEffect(() => {
    const fetchLoggedInUserId = async () => {
      console.log(localStorage.getItem("AuthToken"));
      try {
        const response = await axios.get('http://localhost:8080/Home/logged-in-user-id', {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("AuthToken")
          }
        });

        const data = response.data;
        setLoggedInUserId(data.userId);
        console.log(data.userId);
      } catch (error) {
        console.error('Error fetching logged-in user ID:', error);
      }
    };

    fetchLoggedInUserId();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/Home/users/${loggedInUserId}`);
        const user = response.data;
        setFirstname(user.firstname);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [loggedInUserId]);

  useEffect(() => {
    axios.get('http://localhost:8080/Home/totalProjectCount')
      .then(response => {
        setTotalProjectCount(response.data);
      })
      .catch(error => {
        console.error('Error fetching total project count:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8080/Home/totalTaskCount')
      .then((response) => {
        setTaskCount(response.data);
      })
      .catch((error) => {
        console.log('Error fetching task count:', error);
      });
  }, []);

  return (
    <div>
      <div className='welcome-message'><div className='fs-1'><i><b>PROJECT MANAGEMENT TOOL</b></i></div>
        <div className='fs-1'>Hello, {firstname}!</div>
        <div className='user-id'>User ID: {loggedInUserId}</div>
      </div>
      <div className="project-boxes-container">
      <div className="project-box">
      <h2 className="box-title">Projects Allocated</h2>
      <p className="box-value">{totalProjectCount}</p>
    </div>
    <div className="project-box">
      <h2 className="box-title">Tasks Allocated</h2>
      <p className="box-value">{taskCount}</p>
    </div>
    </div>


    </div>
  );
};

export default Home;
