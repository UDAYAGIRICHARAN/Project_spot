import '../App.css';
import Login from '../components/login';
import SignUp from '../components/signup';
import ForgotPassword from '../components/forgotpassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AuthRouter() {
   
  return (
    <div>

    
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} /> 
        </Routes>
       
     
    </div>
  );
}

export default AuthRouter;




