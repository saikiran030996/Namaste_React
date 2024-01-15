import React from 'react';
import ReactDOM from "react-dom/client"


// JSX => React.createElement => ReactElement-JS-Object => HTMLElement(render)

const Title = () => ( 
<h1 id='Heading'>
    Namaste React using JSX 🚆 🚀
</h1> );
const title = (
<h1>
    Namaste🙏
</h1>
)
// React Functional Component
 const number = 10000;

const HeadingComponent = () => (
    <div id="container"> 

    <h2>{"React is very important"}</h2>
    <Title></Title>
        <h3>Namaste{title} React Functional Component</h3>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent></HeadingComponent>);
