import { Routes, Route } from "react-router-dom";
import LoginComponent from "./Pages/Login/LoginComponent";
import Welcome from "./Pages/Login/Welcome";

const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/Logindialog" element={<LoginComponent />} />
        <Route path="/welcome" element={<Welcome/>} />
      </Routes>
   
  );
}
export default App;
