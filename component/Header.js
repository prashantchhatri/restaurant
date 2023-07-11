import { useState } from "react";
import { app_logo } from "../utils/globalVariable";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    let [btnName, setBtnName] = useState('Login')
    return(
        <div className="header">
            <div className="">
                <img className="logo" src={ app_logo }/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to='/'> Home </Link>
                    </li>

                    <li>
                        <Link to='/about'> About Us </Link>
                    </li>

                    <li>
                    <Link to='/contact'> Contact Us </Link>
                    </li>

                    <li>
                        <Link to='/cart'> Cart </Link>
                    </li>

                    <button 
                        className="login-btn"
                        onClick={ () => {
                            btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
                        }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;