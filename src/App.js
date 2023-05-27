import './App.css';
import {Route, RouterProvider, Routes} from "react-router-dom";
import navigationConfigs from './navigation/navigationConfigs';
import {getBorrow} from "./services/borrowApi";
import {useDispatch, useSelector} from "react-redux";
import {fetchTakenBorrow} from "./store/reducer/BorrowReducer";
import {useEffect} from "react";



function App() {

    const s = useSelector(st => st.borrow)
    console.log(s)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchTakenBorrow())
            } catch (e) {
                console.log(e)
            }
        }

        fetchData()
    }, [dispatch] )
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
