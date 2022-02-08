import { Link } from 'react-router-dom'

function Navbar() {
      
    return (
    <>
        <Link to="/" className="nav-links" style={{textDecoration: 'none'}}> Home</Link>
        <Link to="/art" className="nav-links" style={{textDecoration: 'none'}}> Art</Link>
        <Link to="/baking" className="nav-links" style={{textDecoration: 'none'}}> Baking</Link>
        <Link to="/code" className="nav-links" style={{textDecoration: 'none'}}> Code</Link>
    </>
    )
}
    
export default Navbar;