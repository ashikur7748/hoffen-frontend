import React, { useState } from 'react';
import { Formik, Form, resetForm } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUserAlt, FaLock } from "react-icons/fa";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { IoIosNotifications } from 'react-icons/io';
import { GrStatusGood } from 'react-icons/gr';
import { GoTasklist } from 'react-icons/go';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        password: "",
    });

    const paramName = formData.name;
    const paramUsername = formData.username;
    const paramEmail = formData.email;
    const paramMobile = formData.mobile;
    const paramPassword = formData.password;

    const url = 'http://127.0.0.1:8000/api/userregister';

    const targetUrl = `${url}?name=${paramName}&username=${paramUsername}&email=${paramEmail}&mobile=${paramMobile}&password=${paramPassword}`;


    const handleSubmit = (e) => {
        e.preventDefault();
        const promise = axios.post(targetUrl);
        const success = (response) => {
            if (response.data === 'success') {
                toast.success('Registration Successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setFormData({
                    name: "",
                    username: "",
                    email: "",
                    mobile: "",
                    password: "",
                });

            } else if (response.data === 'failed') {
                toast.error('Registration Failed', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }

        }

        const error = (error) => {
            console.log(error);
        }

        promise
            .then(success)
            .catch(error);
    }

    return (

        <Formik
            initialValues={{
                name: "",
                username: "",
                email: "",
                mobile: "",
                password: ""
            }}


        >
            {(formikprops) => {
                return (

                    <Form onSubmit={handleSubmit}>
                        <div className="container-fluid" >
                            <div className="row d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                                <div className="col-md-5 p-4 rounded">
                                    <h2 className='text-center pb-2'>User Registration</h2>
                                    <div className="input-group flex-nowrap mb-3">
                                        <span className="input-group-text" id="addon-wrapping"><FaUserAlt /></span>
                                        <input type="text" className="form-control" placeholder="Full name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} />
                                    </div>
                                    <div className="input-group flex-nowrap mb-3">
                                        <span className="input-group-text" id="addon-wrapping"><FaUserAlt /></span>
                                        <input type="text" className="form-control" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} value={formData.username} />
                                    </div>
                                    <div className="input-group flex-nowrap mb-3">
                                        <span className="input-group-text" id="addon-wrapping"><AiOutlineMail /></span>
                                        <input type="text" className="form-control" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} />
                                    </div>
                                    <div className="input-group flex-nowrap mb-3">
                                        <span className="input-group-text" id="addon-wrapping"><AiFillPhone /></span>
                                        <input type="text" className="form-control" placeholder="Mobile" onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} value={formData.mobile} />
                                    </div>
                                    <div className="input-group flex-nowrap mb-3">
                                        <span className="input-group-text" id="addon-wrapping"><FaLock /></span>
                                        <input type="password" className="form-control" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} value={formData.password} />
                                    </div>

                                    <div className='d-flex justify-content-end'>
                                        <button type="submit" className="btn btn-primary mt-3">Register</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Form>
                )
            }}
        </Formik>

    )
}
export default Register
