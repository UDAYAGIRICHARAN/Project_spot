import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditProject() {
  let navigate = useNavigate();

  const { projectId } = useParams();

  const [project, setProject] = useState({
    projectName: "",
    projectDescription: "",
    projectStartDate: "",
    projectEndDate: "",
  });

  const { projectName, projectDescription, projectStartDate, projectEndDate } =
    project;

  const onInputChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/projects/${projectId}`, project);
    navigate("/projectsview");
  };

  const loadProjects = async () => {
    const result = await axios.get(
      `http://localhost:8080/projects/${projectId}`
    );
    setProject(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Project</h2>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="projectName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your projectName"
                name="projectName"
                value={projectName}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter description"
                name="projectDescription"
                value={projectDescription}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="startDate" className="form-label">
                Start Date
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter start date"
                projectName="projectStartDate"
                value={projectStartDate}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endDate" className="form-label">
                End Date
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter end date"
                projectName="projectEndDate"
                value={projectEndDate}
                onChange={onInputChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Update
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/projectsview">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
