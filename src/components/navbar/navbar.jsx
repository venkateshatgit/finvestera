import './navbar.css';
import logo from '../../images/finvestera.jpg'
function Navbar() {
    return (  
        <div className="navbar">
            <div className="logo">
                <img src={logo} />
            </div>

            

            <ul className='nav-menu'>
                <li>Investment</li>
                <li>Insurce</li>
                <li>Finances</li>
                <li>Blog</li>
                <li>E-books  Courses</li>
            </ul>
        </div>
    );
}

export default Navbar;