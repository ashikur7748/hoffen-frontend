import { useState, useEffect } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login() {
  const [authenticationSuccess, setAuthenticationSuccess] = useState("");
  const [authenticationError, setAuthenticationError] = useState("");
  const redirect = useNavigate();
  const submitHandle = ()=>{
      AuthenticationApi();
  }
  const AuthenticationApi = async () => {
    try {
      const { data } = await axios.post('http://localhost:8000/api/login?email=ashikur7748@gmail.com&password=1234');
    sessionStorage.setItem('user', data);
    setAuthenticationError(data);
    redirect("/dashboard");
    toast.success(authenticationError, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

   
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };  
  
  // const notify = () => {
  //   toast.success(authenticationError, {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //     });
  // };
 
  return (
    <div>
      
      <button type='button' onClick={submitHandle}>LOgin</button>
      <div>
        
      </div>
      </div>
  )
}
