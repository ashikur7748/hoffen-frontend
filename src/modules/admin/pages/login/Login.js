import { useState, useEffect } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { FaUserAlt, FaLock } from 'react-icons/fa';

const Login = () => {
    const [authenticationFailed, setAuthenticationFailed] = useState();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const paramUsername = formData.username;
    const paramPassword = formData.password;


    const url = 'http://127.0.0.1:8000/api/userauthentication';
    const targetUrl = `${url}?username=${paramUsername}&password=${paramPassword}`;


    const handleSubmit = (e) => {
        e.preventDefault();
        if (paramUsername === '' || paramPassword === '') {
            alert("Please provide username & password");
        } else {
            const promise = axios.post(targetUrl);
            const success = (response) => {

                if (response.data === 'Failed') {
                    setAuthenticationFailed('Authentication Failed');
                } else {
                    localStorage.setItem('user', response.data[0].username);
                    navigate("/dashboard");
                }
            }

            const error = (error) => {
                console.log(error);
            }

            promise
                .then(success)
                .catch(error);
        }


    }

    return (
        <Formik
            initialValues={{
                username: '',
                password: '',
            }}
        >
            {(formikprops) => {
                return (<Form onSubmit={handleSubmit}>
                    <div className="container-fluid">
                        <div className='row d-flex justify-content-center align-items-center' style={{ height: "80.2vh" }}>
                            <div className="col-md-4 bg-white rounded p-4 border">
                                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                    <img src='../../../../assets/images/logo/logo.png' alt='Login logo' width="100px" height="100px" />
                                </div>
                                <div className="input-group flex-nowrap my-3">
                                    <span className="input-group-text" id="addon-wrapping"><FaUserAlt /></span>
                                    <input type="text" className="form-control" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} value={formData.username}
                                    />
                                </div>
                                <div className="input-group flex-nowrap">
                                    <span className="input-group-text" id="addon-wrapping"><FaLock /></span>
                                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} value={formData.password}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary text-white float-end mt-3">Login</button>
                            </div>
                        </div>
                    </div>
                </Form>
                )
            }}
        </Formik>
    )
}

export default Login
