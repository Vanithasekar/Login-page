import { Routes, Route } from "react-router-dom";
import LoginComponent from "./Pages/Login/LoginComponent";
import Welcome from "./Welcomepage/Welcome";
// import Home from "./Welcomepage/Welcome";
// import Contact from "./Welcomepage/Welcome";


const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        {/* <Route path="/Logindialog" element={<LoginComponent />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>} /> */}
        <Route path="/welcome" element={<Welcome/>} />
      </Routes>
   
  );
}
export default App;
