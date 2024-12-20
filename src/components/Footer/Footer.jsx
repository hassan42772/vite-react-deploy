
import './Footer.css'
import { Link , NavLink } from 'react-router-dom'
import logo from "../../Assets/logo.png";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <div className="logo"><img src={logo} alt="logo" width="100px" height="100px"/><span>  Expert  <br /> Mind</span></div>
                        <p>
                        Our Tutors are specialized in their subjects and expert in guiding students to perform at their best level by understanding the capacity & interest of students.
                        </p>
                        <div className="contact">
                            <span><i className="fas fa-phone" style={{color:'green'}}></i> &nbsp;+92 308 5936366</span><br />
                            <span><i className="fas fa-envelope"></i> &nbsp;hrexpertmind366@gmail.com</span>
                        </div>
                    </div>
                    <div className="footer-section links">
                        <h2>Quick Links</h2>
                        <br />
                        <ul>
                            <li>  <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                        >
                            Home
                        </NavLink></li>
                            <li>
                            <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                        >
                            About
                        </NavLink></li>
                            <li>
                            <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                        >
                            Contact
                        </NavLink></li>
                            <li>
                            <NavLink
                            to="/github"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                        >
                            Serving Areas
                        </NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-section social">
                        <h2>Follow us</h2>
                        <br />
                        <div className="social-icons">
                            <Link to="https://www.facebook.com/share/aWwqZXyZf4ySxUcv/?mibextid=K35XfP" target='_blank'><i className="fab fa-facebook"></i></Link>
                            
                            <Link to="https://whatsapp.com/channel/0029Vaj4SEkLtOjH2dMXZp3a" target='_blank'><i className="fab fa-whatsapp"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; 2024 Export Mind | Designed by Rana Hassan
                </div>
            </footer>
        </>
    )
}

export default Footer
