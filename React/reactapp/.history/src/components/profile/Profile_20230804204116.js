import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './Profile.css';
import { Container, Row, Col } from 'reactstrap';

const ProfilePage = ({ userId }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    role: 'USER' 
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/profile/users/${userId}`);
        const data = response.data;

        setProfile(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8080/profile/update/${userId}`, updatedProfile);
      setProfile(updatedProfile);
      setEditMode(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle the error
      // ...
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>Error fetching profile.</div>;
  }

  return (
    <div className="profile-page">
      <Container>
        <Row className="profile-header">
          <Col xs="12" md={{ size: 4, offset: 4 }}>
            <h1 className="profile-name">Profile</h1>
          </Col>
        </Row>
        <Row className="profile-content">
          <Col xs="12" md={{ size: 6, offset: 3 }}>
            {!editMode ? (
              <>
                <h5>
                  <span>First Name:</span> {profile.firstname}
                </h5>
                <h5>
                  <span>Last Name:</span> {profile.lastname}
                </h5>
                <h5>
                  <span>Email:</span> {profile.email}
                </h5>
                <h5>
                  <span>Username:</span> {profile.username}
                </h5>
                <h5>
                  <span>Role:</span> {profile.role}
                </h5>
                <Button color="primary" onClick={() => setEditMode(true)}>
                  Edit
                </Button>
              </>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="firstname">First Name:</label>
                  <input
                    type="text"
                    id="firstname"
                    className="form-control"
                    value={updatedProfile.firstname}
                    onChange={(e) =>
                      setUpdatedProfile({
                        ...updatedProfile,
                        firstname: e.target.value
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">Last Name:</label>
                  <input
                    type="text"
                    id="lastname"
                    className="form-control"
                    value={updatedProfile.lastname}
                    onChange={(e) =>
                      setUpdatedProfile({
                        ...updatedProfile,
                        lastname: e.target.value
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    value={updatedProfile.email}
                    onChange={(e) =>
                      setUpdatedProfile({
                        ...updatedProfile,
                        email: e.target.value
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={updatedProfile.username}
                    onChange={(e) =>
                      setUpdatedProfile({
                        ...updatedProfile,
                        username: e.target.value
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="role">Role:</label>
                  <input
                    type="text"
                    id="role"
                    className="form-control"
                    value={updatedProfile.role}
                    onChange={(e) =>
                      setUpdatedProfile({
                        ...updatedProfile,
                        role: e.target.value
                      })
                    }
                     // Disable the input field for the role
                  />
                </div>
                <Button color="primary" onClick={handleUpdate}>
                  Update
                </Button>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

ProfilePage.propTypes = {
  userId: PropTypes.number.isRequired
};

export default ProfilePage;
