import './navbar.css';
import logo from '../../images/finvestera.jpg'
import { FaBars} from 'react-icons/fa';
import { useState, useRef } from 'react';

function Navbar() {

    const [visible, setVisible] = useState(true)
    const faBars = useRef(null)

    const handleClick = () => {
        setVisible(!visible)
        console.log(faBars.current.children.length)
    }


    

    return (  
        <div className="navbar">
            <div className="logo" >
                <img src={logo} />
                <div ref={faBars}>
                    <FaBars  className='fa-bar'  onClick={handleClick}/>
                </div>
               
            </div>

            

            <ul className={`nav-menu ${(visible && faBars.current.children.length===1) ? 'visible': 'hidden'}`}>
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