import './navbar.css';
import logo from '../../images/finvestera.jpg'
import { FaBars} from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

function Navbar() {

    const [visible, setVisible] = useState(false)
    const [responsive, setResponsive] = useState(true);
    const faBars = useRef(null)

    const handleClick = () => {
        
        setVisible(!visible)
        if(faBars.current.children.length ===1)
            setResponsive(true)
        else
            setResponsive(false)
    }
    
    return (  
        <div className="navbar">
            <div className="logo" >
                <img src={logo} />
                <div ref={faBars}>
                    <FaBars  className='fa-bar'  onClick={handleClick}/>
                </div>
               
            </div>

            

            <ul className={`nav-menu ${(visible && responsive) ? 'visible': 'hidden'}`}>
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