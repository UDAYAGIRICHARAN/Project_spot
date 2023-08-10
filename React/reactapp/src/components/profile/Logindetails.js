import React, { useState, useEffect } from "react";
import ProfilePage from "./Profile";
import axios from "axios";

const Logindetails = () => {
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  useEffect(() => {
    const fetchLoggedInUserId = async () => {
      console.log(localStorage.getItem("AuthToken"));
      try {
        const response = await axios.get('http://localhost:8080/profile/logged-in-user-id', {
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

  return (
    <div>
      {loggedInUserId ? (
        <ProfilePage userId={loggedInUserId} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Logindetails;
