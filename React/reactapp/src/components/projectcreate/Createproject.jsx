import React from "react";
import axios from "axios";
import { useRef, useState } from "react";

const Createproject = ({ form, viewprojects }) => {
  axios.defaults.baseURL = "http://localhost:8080";

  const projectNameRef = useRef("");
  const projectDescRef = useRef("");
  const projectStartDateRef = useRef();
  const projectEndDateRef = useRef();
  const [projectDetails, setProjectDetails] = useState({
    projectName: "",
    projectDescription: "",
    projectStartDate: "",
    projectEndDate: "",
  });

  const handleInputChange = (event) => {
    setProjectDetails({
      ...projectDetails,
      [event.target.name]: event.target.value,
    });
  };
  const handleCancelProject = () => {
    form(false);
    viewprojects(false);
  };
  const handleSaveProject = async (event) => {
    form(false);
    viewprojects(false);
    event.preventDefault();
    let data = {
      projectName: projectNameRef.current.value,
      projectDescription: projectDescRef.current.value,
      projectStartDate: projectStartDateRef.current.value,
      projectEndDate: projectEndDateRef.current.value,
    };
    console.log(data, projectDetails);

    await axios
      .post("/projects", data)
      .then((response) => {
        setProjectDetails({
          projectName: "",
          projectDescription: "",
          projectStartDate: "",
          projectEndDate: "",
        });
        projectStartDateRef.current.value = "";
        projectEndDateRef.current.value = "";
        console.log("res", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="h-full w-full">
      <div className=" h-full w-full flex flex-col items-center  text-black">
        <h2 className="w-full text-[30px] font-bold flex justify-center items-center uppercase font-poppins h-[100px] ">
          Create Project
        </h2>
        <div className="flex text-black bg-blue-500 py-5 w-[700px] h-[600px] items-center">
          <form
            action=""
            className=" w-full bg-discount-gradient rounded-2xl font-poppins text-white h-[500px] flex flex-col gap-3  items-center "
          >
            <div className="w-full h-[60px] flex items-center px-4 text-[16px]   ">
              <label htmlFor="" className="w-[20%]">
                Project Name
              </label>
              <input
                type="text"
                placeholder="Name..."
                className="h-full text-black outline-none w-[80%] px-1 border-none"
                ref={projectNameRef}
                onChange={handleInputChange}
                value={projectDetails.projectName}
                name="projectName"
              />
            </div>
            <div className="w-full flex items-center px-4 text-[16px]   ">
              <label htmlFor="" className="w-[20%]">
                Description
              </label>
              <textarea
                placeholder="About project..."
                className="h-[120px] text-black outline-none w-[80%] border-none"
                ref={projectDescRef}
                onChange={handleInputChange}
                value={projectDetails.projectDescription}
                name="projectDescription"
              ></textarea>{" "}
            </div>
            <div className="w-full flex items-center px-4 text-[16px]   ">
              <label htmlFor="" className="w-[20%]">
                Start date
              </label>
              <input
                type="date"
                className="h-[40px] text-black outline-none w-[50%] border-none"
                ref={projectStartDateRef}
                onChange={handleInputChange}
                value={projectDetails.projectStartDate}
                name="projectStartDate"
              />
            </div>
            <div className="w-full flex items-center px-4 text-[16px]   ">
              <label htmlFor="" className="w-[20%]">
                End Date
              </label>
              <input
                type="date"
                className="h-[40px] text-black outline-none w-[50%] border-none"
                ref={projectEndDateRef}
                onChange={handleInputChange}
                value={projectDetails.projectEndDate}
                name="projectEndDate"
              />
            </div>
            <div className="flex justify-center gap-32 items-center">
              <button
                className="mt-10 w-[100px] rounded-xl hover:scale-110 text-black font-poppins font-semibold h-[50px] bg-orange-400 "
                onClick={() => handleCancelProject()}
              >
                CANCEL
              </button>
              <button
                className="mt-10 w-[100px] rounded-xl hover:scale-110 text-black font-poppins font-semibold h-[50px] bg-orange-400 "
                onClick={(event) => handleSaveProject(event)}
              >
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Createproject;
