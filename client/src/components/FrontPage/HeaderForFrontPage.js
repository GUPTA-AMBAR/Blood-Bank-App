import React from 'react';
import toast from 'react-hot-toast';
import { CgProfile } from "react-icons/cg";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const HeaderForFrontPage = () => {
    const { user } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = () => {
        navigate('/login', { replace: true });
    }
    const handleRegister = () => {
        navigate('/register', { replace: true });
    }

    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                        src="./assests/images/logo.webp"
                        style={{ height: "40px", width: "60px", borderRadius: "20%" }}
                        alt="Logo"
                        className="d-inline-block align-text-top"
                    />
                    <b className="ms-2">Crimson Connect</b>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item" >
                            <Link to="/front-page"><a className="nav-link  text-white" href="#" style={{ borderRadius: "10px" }} >Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-info ms-lg-3" type="button" onClick={handleLogin}>Login</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-success ms-lg-3" type="button" onClick={handleRegister}>Register</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HeaderForFrontPage;






