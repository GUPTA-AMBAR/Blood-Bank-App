import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-center text-white" style={{
            backgroundColor: '#0a4275',
            width: '100%',
            marginTop: 'auto', // Pushes footer to the bottom when content is less
            textAlign: 'center'
        }}>
            <div className="container p-4 pb-0">
                <section>
                    <p className="d-flex justify-content-center align-items-center">
                        <span className="me-3">Register for free</span>
                        <Link to="/register">
                            <button type="button" className="btn btn-outline-light btn-rounded">Sign up!</button>
                        </Link>
                    </p>
                </section>
                <section className="mb-4">
                    <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#55acee" }} href="https://x.com/home?lang=en" role="button">
                        <FaTwitter />
                    </a>
                    <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#ac2bac" }} href="https://www.instagram.com/ambar_29_08/#" role="button">
                        <FaInstagram />
                    </a>
                    <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#0082ca" }} href="https://www.linkedin.com/in/ambargupta8534004080" role="button">
                        <FaLinkedinIn />
                    </a>
                    <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#333333" }} href="https://github.com/GUPTA-AMBAR" role="button">
                        <FaGithub />
                    </a>
                </section>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2025 Copyright:
                <a className="text-white" href="/login"> Crimson Connect</a>
            </div>
        </footer>
    );
};

export default Footer;
