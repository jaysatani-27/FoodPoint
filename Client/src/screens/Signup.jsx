import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Import your CSS file

export default function Signup() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        navigate('/login');
    }

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    }

    return (
        <div className='signup-container'>
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Create an Account</h2>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email </label>
                    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="geolocation">Address</label>
                    <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-success ">Submit</button>
                <Link to="/login" className='btn btn-danger m-3'>Already a user</Link>
            </form>
        </div>
    );
}
