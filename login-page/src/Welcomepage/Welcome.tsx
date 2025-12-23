import { useLocation } from "react-router-dom";
import { useContext,useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Navbar from "./Navbar";
import "./Welcome.css";
import LoginDialog from "../Pages/Dialog/LoginDialog";

const WelcomeContent = ({ username }: { username: string }) => {
  //const themeContext = useContext(ThemeContext);
  const[showDialog,setShowDialog]=useState(true);

  return (
    <div>
    {/* //<div className={themeContext?.dark ? "content-dark" : "content-light"}> */}
    {showDialog && (
      <LoginDialog
        onOK={() => setShowDialog(false)
          }
        onCancel={() => setShowDialog(false)}
      />
    )
        }
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
