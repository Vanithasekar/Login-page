import { useState } from "react";
import "./LoginComponent.css"
import { useNavigate } from "react-router-dom";
import LoginDialog from "../Dialog/LoginDialog";
const dummyUser = [
    { username: "Vanitha", password: "Vanitha@123" },
    { username: "Kashika", password: "Kashika@123" },
    { username: "Sneha", password: "Sneha@123" },
    { username: "Nivetha", password: "Nivetha@123" },
];
const LoginComponent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginDialog, setLoginDialog] = useState(false);
    const navigate=useNavigate();
    const Loginlogic=()=>{
        const user=dummyUser.find(
            (user)=>user.username===username && user.password==password);
            if(user){
            //     
            navigate("/welcome",{state:{username:username}});
            }
            else{
                alert ("Invalid credentials");
            }
        };
        const okClick=()=>{
            navigate("/welcome",{state:{username:username}});
        };
            const cancelClick=()=>{
                setLoginDialog(false);
            };
       return(
                <div className="login-container">
                    <h1>Login page</h1>
                    {/* <input type="text" placeholder="Enter the username" ></input>
                    <input type="password" placeholder="Enter the password"></input> */}
                    
                        <h3>username</h3>
                    <input onChange ={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter the username" value={username}></input>
                    <h3>password</h3>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter the password" value={password}></input>          
                    <button onClick={Loginlogic}>Login</button>
                    {loginDialog && 
                    ( <LoginDialog
                        onOK={okClick}
                        onCancel={cancelClick}
                        />
                        )}

               
                </div>
            )

    }
export default LoginComponent;