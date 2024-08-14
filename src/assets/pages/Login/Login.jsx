import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { FaUserShield, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios'; // Import Axios
import { blue } from '@mui/material/colors';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                email,
                password,
            });
            console.log(response.data); // Handle success
            if (typeof onLogin === 'function') {
              localStorage.setItem('user', JSON.stringify(response.data));
                onLogin(response.data); // Call the onLogin function with response data
            } else {
                console.error('onLogin is not a function');
            }
            navigate('/'); // Navigate to Home page
        } catch (error) {
            console.error(error); // Handle error
            setError('Invalid email or password');
        }
    };

    const handleRegisterClick = () => {
        navigate('/signup'); // Navigate to the Register page
    };

    const handleAdminLoginClick = () => {
        navigate('/adminlogin'); // Navigate to the Admin Login page
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const appStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#FAAB36' // Updated theme color
    };

    const navbarStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FAAB36', // Updated theme color
        color: 'white',
        padding: '10px 20px'
    };

    const navbarLeftStyle = {
        fontSize: '24px'
    };

    const loginContainerStyle = {
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
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px'
    };

    const loginLeftStyle = {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        boxSizing: 'border-box',
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: '8px'
    };

    const loginRightStyle = {
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

    const loginImageStyle = {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '8px'
    };

    const formGroupStyle = {
        marginBottom: '15px',
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    };

    const labelStyle = {
        marginBottom: '5px',
        fontWeight: 'bold',
        display: 'block',
        fontSize: '17px', // Adjust the size as needed
        fontFamily: 'Arial, sans-serif', // Adjust the font family as needed
        alignItems: 'left'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        marginLeft: '10px',
        position: 'relative' // Added for positioning the eye icon
    };

    const buttonStyle = {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: blue[500],
        color: 'white',
        cursor: 'pointer',
        marginTop: '10px'
    };

    const signUpLinkStyle = {
        color: '#007BFF',
        cursor: 'pointer',
        marginTop: '10px'
    };

    const adminButtonStyle = {
        ...buttonStyle,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007BFF', // Different color for admin login button
        marginTop: '20px'
    };

    const eyeIconStyle = {
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        fontSize: '20px' // Increase the font size of the eye icon
    };

    const responsiveStyle = `
        .inner-container {
            flex-direction: column;
        }
        .login-left, .login-right {
            flex: none;
            width: 100%;
            border-radius: 0;
            margin-bottom: 20px;
        }
        @media (max-width: 768px) {
            .login-left {
                order: 2;
            }
            .login-right {
                order: 1;
            }
        }
    `;

    return (
        <div style={appStyle}>
            <Navbar />
            <div style={loginContainerStyle} className="login-container">
                <style>{responsiveStyle}</style>
                <div style={innerContainerStyle} className="inner-container">
                    <div style={loginLeftStyle} className="login-left">
                        <img src="src/assets/pages/Signup/1.jpg" alt="Placeholder" style={loginImageStyle} />
                    </div>
                    <div style={loginRightStyle} className="login-right">
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                            <label style={labelStyle}>E-Mail</label>
                            <div style={formGroupStyle}>
                                <FaEnvelope size={24} /> {/* Set the size of the envelope icon */}
                                <input 
                                    type="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                    style={inputStyle} 
                                />
                            </div>
                            <label style={labelStyle}>Password</label>
                            <div style={{ ...formGroupStyle, position: 'relative' }}>
                                <FaLock size={24} /> {/* Set the size of the lock icon */}
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
                                    {passwordVisible ? <FaEyeSlash size={24} /> : <FaEye size={24} />} {/* Set the size of the eye icons */}
                                </span>
                            </div>
                            {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
                            <button type="submit" style={buttonStyle}>Login</button>
                        </form>
                        <p>
                            Don't have an account? 
                            <span style={signUpLinkStyle} onClick={handleRegisterClick}> Sign Up</span>
                        </p>
                        <button style={adminButtonStyle} onClick={handleAdminLoginClick}>
                            <FaUserShield size={24} style={{ marginRight: '8px' }} /> {/* Set the size of the user shield icon */}
                            Admin Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
