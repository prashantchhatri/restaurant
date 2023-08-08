import { useState } from "react";
import { app_logo } from "../utils/globalVariable";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    let [btnName, setBtnName] = useState('Login')
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="" >
                <img className="w-40 h-30" src={ app_logo }/>
            </div>
            <div className="flex items-center">
                <ul className="flex m-4 p-4">
                    <li className="px-4">
                        <Link to='/'> Home </Link>
                    </li>

                    <li className="px-4">
                        <Link to='/about'> About Us </Link>
                    </li>

                    <li className="px-4">
                    <Link to='/contact'> Contact Us </Link>
                    </li>

                    <li className="px-4">
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