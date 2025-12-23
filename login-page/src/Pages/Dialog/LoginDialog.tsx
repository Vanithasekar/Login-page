import { useEffect } from "react";
import "./LoginDialog.css"
type LogindialogProps = {
    onOK:()=>void;
    onCancel:()=>void;
};
const LoginDialog = ({onOK,onCancel}:LogindialogProps) => {
    useEffect(() => {
        setTimeout(() => {
            onOK();
        }, 3000);
    }, [onOK]);
    
    return (
        <div className="dialog-overlay">
            <div className="dialog-box">
            <h2>Login successfull</h2>
            <h1>Login Dialog is open if you click ok it will move to the welcome page</h1>
            <div className="dialog-box-buttons">
            <button onClick={onOK}>OK</button>
            <button onClick={onCancel}>Cancel</button>
            </div>
            </div>
        </div>
    )
}   
export default LoginDialog;