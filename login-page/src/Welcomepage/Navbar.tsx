import { useContext } from "react";
import{ThemeContext } from "../context/ThemeContext";
import "./Navbar.css";
//import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showContact, showHome } from "../Pages/redux/pageSlice";
const Navbar = () => {
    const themeContext=useContext(ThemeContext);
    //const navigate=useNavigate();
    const dispatch=useDispatch();
    return(
        <div className={themeContext?.dark ? "navbar-dark":"navbar-light"}>
            <h2 onClick={()=>dispatch(showHome())}>Home</h2>
            <h2 onClick={()=>dispatch(showContact())}>Contact</h2>
            <button onClick={themeContext?.toggle}>
                {themeContext?.dark ? "Light Mode" : "Dark Mode"}
            </button>
           
        </div>
    )
}
export default Navbar;
