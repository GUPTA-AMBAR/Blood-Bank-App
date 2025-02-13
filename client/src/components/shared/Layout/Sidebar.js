import { IoMenu } from "react-icons/io5";
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const SidebarContent = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);


    return (
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
    );
};

const Sidebar = () => {
    return (
        <>
            {/* Toggle Button for Small Screens */}
            <div className="d-md-none fixed-top d-flex justify-content-end p-2" style={{ zIndex: 1050 }}>
                <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasSidebar"
                    aria-controls="offcanvasSidebar"
                >
                    <IoMenu size={30} />
                </button>
            </div>

            {/* Offcanvas sidebar for small screens */}
            <div
                className="offcanvas offcanvas-start d-md-none"
                tabIndex="-1"
                id="offcanvasSidebar"
                aria-labelledby="offcanvasSidebarLabel"
            >
                <div className="offcanvas-header bg-dark">
                    <h5 className="offcanvas-title" id="offcanvasSidebarLabel">Menu</h5>
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
                <div className="offcanvas-body bg-dark">
                    <SidebarContent />
                </div>
            </div>

            {/* Persistent sidebar for md and larger screens */}
            <div
                className="d-none d-md-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
                style={{ width: '280px', height: '100vh', position: 'fixed' }}
            >
                <SidebarContent />
            </div>
        </>
    );
};

export default Sidebar;












{/* {userMenu.map((menu, index) => {
                const isActive = location.pathname === menu.path;

                return (
                    <li className="nav-item" key={index}>
                        <a
                            href="#"
                            className={`nav-link text-white ${isActive ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                navigate(menu.path);
                            }}
                        >
                            <i class={menu.icon}></i> <span className="ms-2">{menu.name}</span>
                        </a>
                    </li>
                );
            })} */}