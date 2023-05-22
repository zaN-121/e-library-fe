import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";



function App() {
  return (
    <div>

      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/"} element={<Dashboard />} />
      </Routes>

    </div>
  );
}

export default App;
