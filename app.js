import React from 'react';
import ReactDOM from "react-dom/client"



const parent  = React.createElement(
    'div',{id:'parent'},[React.createElement('div',{id:'child'},[React.createElement('h1',{},'This is Namaste React 🚀'),React.createElement("h2",{},'By Saikiran')]
), React.createElement('div',{id:'child2'},[React.createElement('h1',{},'I am an h1 tag'),React.createElement("h2",{},'I am an h2 tag')])]); 
        
        
        
// JSX


console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
