import { useContext } from "react";
import{ThemeContext } from "../context/ThemeContext";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const themeContext=useContext(ThemeContext);
    const navigate=useNavigate();
    return(
        <div className={themeContext?.dark ? "navbar-dark":"navbar-light"}>
            <h2 onClick={()=>navigate("/Home")}>Home</h2>
            <h2 onClick={()=>navigate("/Contact")}>Contact</h2>
            <button onClick={themeContext?.toggle}>
                {themeContext?.dark ? "Light Mode" : "Dark Mode"}
            </button>
           
        </div>
    )
}
export default Navbar;
