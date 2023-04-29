import React from "react";
import ReactDOM from "react-dom/client";

// heading = React.createElement("h1", {id: "heading"}, "Hello World From React!!");

const Heading = () => {
    return(
        <div className="header">
            <div className="">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblZNHHBFmKTyJG0si_ISJ3ET6ABOj62CQ0g&usqp=CAU"/>
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

const AppLayout = () => {
    return(
    <div className="app">
        <Heading/>
    </div>
    );
}





root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);