import { app_logo } from "../utils/globalVariable";


const Header = () => {
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
                </ul>
            </div>
        </div>
    );
}

export default Header;