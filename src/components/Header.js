import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();
    // if no dependancy array => useEffect is called on every render
    // if dependancy array is empty = [] => useEffect is called on initial render(just once)
    // if dependancy array is [btnNameReact] => called everytime btnNameReact is updated
    
    useEffect(() => {
        console.log("useEffect called");
    },[])

    

    return (
    <div className='header'>
        <div className='logo-container'>
            <img className='logo' src={LOGO_URL} />
        </div>

        <div className='nav-items'>
            <ul>
                <li>
                    Online Status: {onlineStatus ? "✅" : "🔴"}
                </li>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/about">About Us</Link></li>
                <li>
                    <Link to="/contact">Contact us </Link>   
                </li>
                <li>
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li> Cart  </li>
                <button className="login" onClick={()=>{
                    btnNameReact === "Login"? setBtnNameReact("Logout") : setBtnNameReact("Login");
                }}>
                    {btnNameReact}
                </button>
                
            </ul>

        </div>

    </div>)
};

export default Header;