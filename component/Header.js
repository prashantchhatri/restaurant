import { useState } from "react";
import { app_logo } from "../utils/globalVariable";
import { useState } from "react";


const Header = () => {
    let [btnName, setBtnName] = useState('Login')
    return(
        <div className="header">
            <div className="">
                <img className="logo" src={ app_logo }/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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