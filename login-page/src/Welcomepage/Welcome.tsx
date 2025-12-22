import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Navbar from "./Navbar";
import "./Welcome.css";

const WelcomeContent = ({ username }: { username: string }) => {
  //const themeContext = useContext(ThemeContext);

  return (
    <div>
    {/* //<div className={themeContext?.dark ? "content-dark" : "content-light"}> */}
      <h1>Welcome to the Login Page {username}</h1>
    {/* //</div> */}
    </div>
  );
};

const Welcome = () => {
  const location = useLocation();
 const username =(location.state as { username?: string })?.username || "";
 const themeContext = useContext(ThemeContext);

  return (
    <>
     <div className={themeContext?.dark ? "content-dark" : "content-light"}>
    
      <Navbar />
       {location.pathname === "/Home" && (
        <h2 >This is Home Page</h2>
      )}

      {location.pathname === "/Contact" && (
        <h2>This is Contact Page</h2>
      )}
      <WelcomeContent username={username} />
      </div>
    </>
    
    
  );
};

export default Welcome;
