import { NavLink, useNavigate } from 'react-router-dom';
import '../../../App.css';
import './Navbar.css';
import { FiLogIn } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="left">
                <img src="src/assets/components/Navbar/logo1.png" alt="logo" />
            </div>
            <div className="right">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Expense">Expense</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Goals">Goals</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/Reviews">Review</NavLink>
                    </li> */}
                </ul>
                    <button
                        className="btn-primary align-center"
                        onClick={() => {
                            navigate('/login');
                        }}
                    >
                        <span>Login</span>
                        <FiLogIn className="icon" />
                    </button>
                <div className="profile-section">
                    <FaUserCircle 
                        className="profile-icon" 
                        onClick={() => {
                            navigate('/profile');
                        }} 
                    />
                </div>
            </div>
        </nav>
    );
}
