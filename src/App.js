import './App.css';
import {Route, RouterProvider, Routes} from "react-router-dom";
import navigationConfigs from './navigation/navigationConfigs';



function App() {
  return (
    <div>
      
      <RouterProvider router={navigationConfigs} />

      {/* <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/"} element={<Dashboard />} />
      </Routes> */}

    </div>
  );
}

export default App;
