import React from "react";
import ReactDOM from "react-dom/client";

heading = React.createElement("h1", {id: "heading"}, "Hello World From React!!");
root = ReactDOM.createRoot(document.getElementById('main'));
root.render(heading);