import { Link } from 'react-router-dom'

function Navbar() {
      
    return (
    <div id="navbar">
        <Link to="/" className="nav-links" style={{textDecoration: 'none'}}> Home</Link>
        <Link to="/art" className="nav-links" style={{textDecoration: 'none'}}> Art</Link>
        <Link to="/baking" className="nav-links" style={{textDecoration: 'none'}}> Baking</Link>
        <Link to="/code" className="nav-links" style={{textDecoration: 'none'}}> Code</Link>
    </div>
    )
}
    
export default Navbar;