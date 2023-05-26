import Login from "../../pages/login/Login";

const authRoute = ({
    path: "/auth",
    children: [
        {index: true, path: "/auth/login", element: <Login /> }
    ]
})

export default authRoute