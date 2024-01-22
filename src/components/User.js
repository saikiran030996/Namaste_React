import { useEffect, useState } from "react";

const User = (props) => {
    const [count,setCount] = useState(0);
    const [count2] = useState(1);

    useEffect(()=>{
        //Api Calls
    },[])

    return (
        <div className="user-card">
        <h1>count={count}</h1>
        <h1>count2={count2}</h1>
        <h2>Name: {props.name}</h2>
        <h3>Location: Germany</h3>
        <h4>contact: +4917655734467</h4>
    </div>)
}


export default User;
