import { Link } from 'react-router-dom'

function Navbar() {
      
    return (
    <div id="navbar">
        <div id="navbar-title">    
            <span>The ABC Creative</span>
            {/* <span>By Lisa Primeaux-Redmond</span> */}
        </div>
        <div id="navbar-links">
            <Link to="/" className="nav-links" style={{textDecoration: 'none'}}> Home</Link>
            <Link to="/art" className="nav-links" style={{textDecoration: 'none'}}> Art</Link>
            <Link to="/baking" className="nav-links" style={{textDecoration: 'none'}}> Baking</Link>
            <Link to="/code" className="nav-links" style={{textDecoration: 'none'}}> Code</Link>
        </div>
    </div>
    )
}
    
export default Navbar;