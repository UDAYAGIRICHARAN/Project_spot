// import './GraphRender.css';
import FirstGraph from './FirstGraph';
import Navbar from './Navbar';
import Barchart from './SecondGraph';

function GraphRender() {
    return (
      <div>
        <Navbar/>
        <br></br>
        
  
      
      <div className="GraphRender">
        
        
        <FirstGraph/>
        </div>
        <div>
        <Barchart/>
      </div>
      </div>
    );
  }
  
  export default GraphRender;
  