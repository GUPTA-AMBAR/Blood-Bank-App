// import React from 'react';
// import toast from 'react-hot-toast';
// import { CgProfile } from "react-icons/cg";
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const Header = () => {
//     const { user } = useSelector(state => state.auth);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const handleLogout = () => {
//         localStorage.clear();
//         navigate("/login");
//         toast.success("Logged out successfully!");
//     }

//     return (
//         <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="#">
//                     <img
//                         src="./assests/images/logo.webp"
//                         style={{ height: "40px", width: "60px", borderRadius: "20%" }}
//                         alt="Logo"
//                         className="d-inline-block align-text-top"
//                     />
//                     <b className="ms-2">Crimson Connect</b>
//                 </a>

//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav ms-auto">
//                         <li className="nav-item d-flex align-items-center">
//                             <span style={{ color: "white" }} className="me-3">
//                                 <b><CgProfile className='me-1' />Welcome </b> 
//                                 <i className='me-1'>{user?.name || user?.organisationName || user?.hospitalName}</i> 
//                                 <b style={{ borderRadius: "4px" }} className="text-decoration-underline bg-silver">{user?.role}</b>
//                             </span>
//                         </li>
//                         <li className="nav-item" >
//                             {location.pathname === "/" ? (
//                                 <Link to="/analytics"><a className="nav-link  text-white" href="#" style={{borderRadius :"10px"}} >Analytics</a></Link>
//                             ):(
//                                 <Link to="/"><a className="nav-link  text-white" href="#" style={{borderRadius :"10px"}} >Home</a></Link>
//                             )}
//                         </li>
//                         <li className="nav-item">
//                             <button className="btn btn-danger ms-lg-3" type="button" onClick={handleLogout}>Logout</button>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Header;










import React from 'react';
import toast from 'react-hot-toast';
import { CgProfile } from "react-icons/cg";
import { useSelector } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Header = () => {
    const { user } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const location = useLocation();


    const handleLogout = () => {
        localStorage.clear();
        navigate("/front-page");
        toast.success("Logged out successfully!");
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
            <div className="container-fluid d-flex align-items-center">

                {/* Left-aligned Dropdown (Before Logo) */}
                <div className="btn-group">
                    <button type="button" className="btn btn-danger">Menu</button>
                    <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>





                    <div className="dropdown-menu">
                        <ul className="nav nav-pills flex-column mb-auto mt-4">

                            {user?.role === 'organisation' &&
                                (<>
                                    <li className="nav-item" >
                                        <a
                                            href="#"
                                            className={`nav-link text-white ${location.pathname === "/" && "active"}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigate("/");
                                            }}
                                        >
                                            <i class="fa-duotone fa-solid fa-warehouse"></i> <span className="ms-2">Inventory</span>
                                        </a>
                                    </li>
                                    <li className="nav-item" >
                                        <a
                                            href="#"
                                            className={`nav-link text-white ${location.pathname === "/donar" && "active"}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigate("/donar");
                                            }}
                                        >
                                            <i class="fa-solid fa-hand-holding-medical"></i> <span className="ms-2">Donar</span>
                                        </a>
                                    </li>
                                    <li className="nav-item" >
                                        <a
                                            href="#"
                                            className={`nav-link text-white ${location.pathname === "/hospital" && "active"}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigate("/hospital");
                                            }}
                                        >
                                            <i class="fa-solid fa-hospital"></i> <span className="ms-2">Hospital</span>
                                        </a>
                                    </li>

                                </>)
                            }

                            {user?.role === 'admin' &&
                                (<>
                                    <li className="nav-item" >
                                        <a
                                            href="#"
                                            className={`nav-link text-white ${location.pathname === "/admin-pannel" && "active"}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigate("/admin-pannel");
                                            }}
                                        >
                                            <i class="fa-solid fa-chess-king"></i> <span className="ms-2">Admin Pannel</span>
                                        </a>
                                    </li>

                                    <li className="nav-item" >
                                        <a
                                            href="#"
                                            className={`nav-link text-white ${location.pathname === "/donar-list" && "active"}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigate("/donar-list");
                                            }}
                                        >
                                            <i class="fa-solid fa-hand-holding-medical"></i> <span className="ms-2">Donar List</span>
                                        </a>
                                    </li>
                                    <li className="nav-item" >
                                        <a
                                            href="#"
                                            className={`nav-link text-white ${location.pathname === "/hospital-list" && "active"}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigate("/hospital-list");
                                            }}
                                        >
                                            <i class="fa-solid fa-hospital"></i> <span className="ms-2">Hospital List</span>
                                        </a>
                                    </li>
                                    <li className="nav-item" >
                                        <a
                                            href="#"
                                            className={`nav-link text-white ${location.pathname === "/organisation-list" && "active"}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigate("/organisation-list");
                                            }}
                                        >
                                            <i class="fa-solid fa-building"></i> <span className="ms-2">Organisation List</span>
                                        </a>
                                    </li>

                                </>)
                            }

                            {(user?.role === "donar" || user?.role === "hospital") &&
                                <>
                                    <li className="nav-item" >
                                        <a
                                            href="#"
                                            className={`nav-link text-white ${location.pathname === "/organisation" && "active"}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigate("/organisation");
                                            }}
                                        >
                                            <i class="fa-solid fa-building"></i> <span className="ms-2">Organisation</span>
                                        </a>
                                    </li>
                                </>
                            }
                            {user?.role === "hospital" &&
                                <>
                                    <li className="nav-item" >
                                        <a
                                            href="#"
                                            className={`nav-link text-white ${location.pathname === "/consumer" && "active"}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigate("/consumer");
                                            }}
                                        >
                                            <i class="fa-regular fa-user"></i> <span className="ms-2">Consumer</span>
                                        </a>
                                    </li>
                                </>
                            }
                            {user?.role === "donar" &&
                                <>
                                    <li className="nav-item" >
                                        <a
                                            href="#"
                                            className={`nav-link text-white ${location.pathname === "/donation" && "active"}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigate("/donation");
                                            }}
                                        >
                                            <i class="fa-regular fa-user"></i> <span className="ms-2">Donation</span>
                                        </a>
                                    </li>
                                </>
                            }

                        </ul>
                    </div>

                </div>

                {/* Logo */}
                <a className="navbar-brand d-flex align-items-center ms-3" href="#">
                    <img
                        src="./assests/images/logo.webp"
                        style={{ height: "40px", width: "60px", borderRadius: "20%" }}
                        alt="Logo"
                        className="d-inline-block align-text-top"
                    />
                    <b className="ms-2">Crimson Connect</b>
                </a>

                {/* Navbar Toggle Button */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Right Section - Profile & Navigation */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item d-flex align-items-center">
                            <span style={{ color: "white" }} className="me-3">
                                <b><CgProfile className='me-1' />Welcome </b>
                                <i className='me-1'>{user?.name || user?.organisationName || user?.hospitalName}</i>
                                <b style={{ borderRadius: "4px" }} className="text-decoration-underline bg-silver">{user?.role}</b>
                            </span>
                        </li>
                        <li className="nav-item">
                            {location.pathname === "/" ? (
                                <Link to="/analytics" className="nav-link text-white" style={{ borderRadius: "10px" }}>Analytics</Link>
                            ) : (
                                <Link to="/" className="nav-link text-white" style={{ borderRadius: "10px" }}>Home</Link>
                            )}
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-danger ms-lg-3" type="button" onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
