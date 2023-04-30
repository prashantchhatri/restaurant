import React from "react";
import ReactDOM from "react-dom/client";
import Header from './Header'
import Body from './Body'

// heading = React.createElement("h1", {id: "heading"}, "Hello World From React!!");

const AppLayout = () => {
    return(
    <div className="app">
        <Header/>
        <Body/>
    </div>
    );
}



root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);