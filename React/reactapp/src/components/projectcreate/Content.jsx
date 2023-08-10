import React from 'react'
import { Link } from 'react-router-dom'

const Content = ({form , viewprojects}) => {
  const func1=()=>{
    form((pre)=>!pre);
    viewprojects(false)
  }
  const func2=()=>{
    viewprojects((pre)=>!pre)
    form(false);
  }
  
  return (
    <div className='w-full h-full z-[9999] flex flex-col text-[22px]   '>
        <h2 className='w-full font-poppins uppercase font-bold text-[30px] h-[100px] flex justify-center  items-center'>
            Projects
        </h2>
        <div className='text-white p-10 flex flex-row flex-wrap justify-evenly gap-5 '>
        <div className='relative bg-blue-300 w-[250px] h-[250px]'>
                <h2 className='w-full h-[70px] uppercase  bg-black flex justify-center items-center font-poppins '>
                    Create Project
                </h2>
                <span className='absolute b bg-blue-700 h-10 w-10 rounded-full flex justify-center items-center text-black bottom-10 left-[42%] hover:scale-125 cursor-pointer'
              onClick={func1}
              >
                +
              </span>
            </div>
            <div className='bg-blue-300 relative w-[250px] h-[250px]'>
                <h2 className='w-full h-[70px] uppercase  bg-black flex justify-center items-center font-poppins '>
                    View Projects
                </h2>
              <Link 
            to="/projectsview" 
            className="absolute bg-white h-10 w-10 rounded-full flex justify-center items-center text-black bottom-10 left-[42%] hover:scale-125 cursor-pointer"
            onClick={func2}
          >
            ❖
          </Link>
            </div>
        </div>

    </div>
  )
}

export default Content