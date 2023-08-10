import React, { useState } from 'react';
import Content from '../components/projectcreate/Content';
import Createproject from '../components/projectcreate/Createproject'

const Projects = () => {
    const [showform, setshowform] = useState(false);
    const [showprojects,setshowprojects]=useState(false);
    console.log(showform,showprojects)
    return (
        <div className='w-full h-full'>
        
            {showform===false?(
                <Content form={setshowform} viewprojects={setshowprojects}/>
            ):(
                <Createproject form={setshowform} viewprojects={setshowprojects}/>
            )}
        </div>
    );
};

export default Projects;