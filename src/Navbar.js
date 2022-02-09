import { Link } from 'react-router-dom'
import linkedin from "./images/linkedin-icon.png";
import github from "./images/github-icon.png";
import blog from "./images/blog-icon.png";
import email from "./images/email-icon.png";

function Navbar() {
      
    return (
    <div id="navbar">
        <div id="navbar-title">    
            <Link to="/" className="nav-links" style={{textDecoration: 'none'}}>
                <span>The ABC Creative</span>
            </Link>
                <a href="https://www.linkedin.com/in/lisa-primeaux-redmond/" target="_blank" className="footer-links">
                    <img src={linkedin} className="footer-icon"/>
                </a>
            
                <a href="https://github.com/lredmo1/" target="_blank" className="footer-links">
                    <img src={github} className="footer-icon"/>
                </a>
            
                <a href="https://medium.com/@redlisa125" target="_blank" className="footer-links">
                    <img src={blog} className="footer-icon-bigger"/>
                </a>

                <a href="mailto:redlisa125@gmail.com" target="_blank" className="footer-links">
                    <img src={email} className="footer-icon-bigger"/>
                </a>
        </div>
        <div id="navbar-links">
            <Link to="/art" className="nav-links" style={{textDecoration: 'none'}}> Art</Link>
            <Link to="/baking" className="nav-links" style={{textDecoration: 'none'}}> Baking</Link>
            <Link to="/code" className="nav-links" style={{textDecoration: 'none'}}> Code</Link>
        </div>
    </div>
    )
}
    
export default Navbar;