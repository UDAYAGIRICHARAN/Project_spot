import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewProject() {
  const [project, setProject] = useState({
    projectName: "",
    projectDescription: "",
    projectStartdate: null,
    projectEnddate: null,
  });

  const { projectId } = useParams();

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/projects/${projectId}`
      );
      setProject(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Project Details</h2>

          <div className="card">
            <div className="card-header">
              Details of project id: {projectId}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b> {project.projectName}
                </li>
                <li className="list-group-item">
                  <b>Description:</b> {project.projectDescription}
                </li>
                <li className="list-group-item">
                  <b>Start Date:</b> {project.projectStartDate}
                </li>
                <li className="list-group-item">
                  <b>End Date:</b> {project.projectEndDate}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to="/projectsview">
            Back to Projects
          </Link>
          <Link className="btn btn-primary mx-2" to="/addtasks">
            Add Task
          </Link>
        </div>
      </div>
    </div>
  );
}
