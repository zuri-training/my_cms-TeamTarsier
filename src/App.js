import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SuccessPage from "./pages/SuccessPage";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Dash from "./pages/Dash";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPass from "./pages/ForgotPass";
import EmailSent from "./pages/EmailSent";
import EnterOtp from "./pages/EnterOtp";
import CreateNewPassword from "./pages/CreateNewPassword";
import SuccessfulReg from "./pages/SuccessfulReg";
import Template from "./pages/Template";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/successPage" element={<SuccessPage />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/emailSent" element={<EmailSent />} />
        <Route path="/enterOtp" element={<EnterOtp />} />
        <Route path="/createNewPass" element={<CreateNewPassword />} />
        <Route path="/successfulReg" element={<SuccessfulReg />} />
        <Route path="/template" element={<Template />} />
      </Routes>
    </div>
  );
}

export default App;
