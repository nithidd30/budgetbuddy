import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'; // Adjust the import path as necessary
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios'; // Import Axios

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password
    const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // State for confirm password visibility
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/api/auth/signup', {
                name,
                email,
                password,
            });
            console.log(response.data); // Handle success
            navigate('/login'); // Redirect to home page after successful registration
        } catch (error) {
            console.error(error); // Handle error
        }
    };

    const handleLoginClick = () => {
        navigate('/login'); // Navigate to the Login page
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const appStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#FAAB36' // Updated theme color
    };

    const registerContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4f4f4',
        boxSizing: 'border-box'
    };

    const innerContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        maxWidth: '1200px',
        backgroundColor: 'white',
        boxShadow: '0 4px 4px rgba(0,0,0,0.1)',
        borderRadius: '8px'
    };

    const registerLeftStyle = {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px',
        boxSizing: 'border-box',
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: '8px'
    };

    const registerRightStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        boxSizing: 'border-box',
        borderTopRightRadius: '8px',
        borderBottomRightRadius: '8px'
    };

    const registerImageStyle = {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '8px'
    };

    const formGroupStyle = {
        marginBottom: '15px',
        width: '100%'
    };

    const labelStyle = {
        marginBottom: '5px',
        fontWeight: 'bold',
        display: 'block',
        fontSize: '17px', // Adjust the size as needed
        fontFamily: 'Arial, sans-serif' // Adjust the font family as needed
    };

    const inputContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '0 10px'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        border: 'none',
        outline: 'none'
    };

    const buttonStyle = {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007BFF',
        color: 'white',
        cursor: 'pointer',
        marginTop: '10px'
    };

    const loginLinkStyle = {
        color: '#007BFF',
        cursor: 'pointer',
        marginTop: '10px'
    };

    const eyeIconStyle = {
        cursor: 'pointer'
    };

    const responsiveStyle = `
        @media (max-width: 768px) {
            .inner-container {
                flex-direction: column;
            }
            .register-left, .register-right {
                flex: none;
                width: 100%;
                border-radius: 0;
                margin-bottom: 20px;
            }
            .register-left {
                order: 2;
            }
            .register-right {
                order: 1;
            }
        }
    `;

    return (
        <div style={appStyle}>
            <Navbar />
            <div style={registerContainerStyle} className="register-container">
                <style>{responsiveStyle}</style>
                <div style={innerContainerStyle} className="inner-container">
                    <div style={registerLeftStyle} className="register-left">
                        <img src="src/assets/pages/Signup/1.jpg" alt="Register Illustration" style={registerImageStyle} />
                    </div>
                    <div style={registerRightStyle} className="register-right">
                        <h2>Register</h2>
                        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                            <div style={formGroupStyle}>
                                <label style={labelStyle}>Name</label>
                                <div style={inputContainerStyle}>
                                    <FaUser style={{ marginRight: '10px', color: '#555' }} />
                                    <input 
                                        type="text" 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)} 
                                        required 
                                        style={inputStyle} 
                                    />
                                </div>
                            </div>
                            <div style={formGroupStyle}>
                                <label style={labelStyle}>Email</label>
                                <div style={inputContainerStyle}>
                                    <FaEnvelope style={{ marginRight: '10px', color: '#555' }} />
                                    <input 
                                        type="email" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        required 
                                        style={inputStyle} 
                                    />
                                </div>
                            </div>
                            <div style={formGroupStyle}>
                                <label style={labelStyle}>Password</label>
                                <div style={{ ...inputContainerStyle, position: 'relative' }}>
                                    <FaLock style={{ marginRight: '10px', color: '#555' }} />
                                    <input 
                                        type={passwordVisible ? 'text' : 'password'} 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        required 
                                        style={inputStyle} 
                                    />
                                    <span 
                                        style={eyeIconStyle} 
                                        onClick={togglePasswordVisibility}
                                    >
                                        {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                    </span>
                                </div>
                            </div>
                            <div style={formGroupStyle}>
                                <label style={labelStyle}>Confirm Password</label>
                                <div style={{ ...inputContainerStyle, position: 'relative' }}>
                                    <FaLock style={{ marginRight: '10px', color: '#555' }} />
                                    <input 
                                        type={confirmPasswordVisible ? 'text' : 'password'} 
                                        value={confirmPassword} 
                                        onChange={(e) => setConfirmPassword(e.target.value)} 
                                        required 
                                        style={inputStyle} 
                                    />
                                    <span 
                                        style={eyeIconStyle} 
                                        onClick={toggleConfirmPasswordVisibility}
                                    >
                                        {confirmPasswordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                    </span>
                                </div>
                            </div>
                            <button type="submit" style={buttonStyle}>Register</button>
                        </form>
                        <br></br>
                        <p>
                            Already have an account?
                            <span style={loginLinkStyle} onClick={handleLoginClick}> Login</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
